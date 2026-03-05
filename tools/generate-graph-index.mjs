#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

// -----------------------------
// CLI args
// -----------------------------
function parseArgs(argv) {
  const args = { seed: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--seed") {
      args.seed = argv[i + 1] ? String(argv[i + 1]) : null;
      i++;
    }
  }
  return args;
}

const ARGS = parseArgs(process.argv.slice(2));

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function parseFrontmatter(md) {
  // Minimal YAML frontmatter parser (enough for our constrained format)
  // Expects:
  // ---
  // key: value
  // key:
  //   - item
  // ---
  const m = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!m) return { fm: null, body: md };
  const raw = m[1];
  const fm = {};
  let currentKey = null;

  for (const line of raw.split("\n")) {
    if (!line.trim()) continue;

    const listMatch = line.match(/^\s*-\s*(.+)\s*$/);
    if (listMatch && currentKey) {
      if (!Array.isArray(fm[currentKey])) fm[currentKey] = [];
      fm[currentKey].push(listMatch[1].trim().replace(/^["']|["']$/g, ""));
      continue;
    }

    const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)\s*$/);
    if (kv) {
      const k = kv[1];
      let v = kv[2];
      currentKey = k;

      // Array inline: [a, b]
      if (v.startsWith("[") && v.endsWith("]")) {
        const inner = v.slice(1, -1).trim();
        fm[k] = inner
          ? inner.split(",").map(s => s.trim().replace(/^["']|["']$/g, ""))
          : [];
      } else if (v === "" || v === "|") {
        // start of block or list; keep key, value set later
        fm[k] = fm[k] ?? (v === "" ? [] : "");
      } else {
        fm[k] = v.replace(/^["']|["']$/g, "");
      }
      continue;
    }

    // If we land here and currentKey is a scalar block, ignore for now.
  }

  return { fm, body: md.slice(m[0].length) };
}

// -----------------------------
// Seed TOC loader (schema.org JSON-LD)
// -----------------------------
function asArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

function extractId(v) {
  if (!v) return null;
  if (typeof v === "string") return v;
  if (typeof v === "object" && v["@id"]) return String(v["@id"]);
  return null;
}

function inferClusterFromUrn(id) {
  // urn:ssd:toc:v2:<cluster>:<nn>   OR urn:ssd:toc:v2:entry:<name>
  if (!id || typeof id !== "string") return "meta";
  const m = id.match(/^urn:ssd:toc:v2:([^:]+):/);
  if (m && m[1]) return m[1];
  return "meta";
}

function inferTypeFromSeed(node) {
  const t = node["@type"];
  const arr = asArray(t).map(String);
  // normalize to our runtime custom types if present
  if (arr.includes("EntryPage")) return "EntryPage";
  if (arr.includes("ReadingPath")) return "ReadingPath";
  if (arr.includes("UIConcept")) return "UIConcept";
  if (arr.includes("UIConceptSpec")) return "UIConceptSpec";
  // else default
  return "WebPage";
}

function extractRelatedFromSeed(node) {
  const out = new Set();

  // schema.org style: relatedLink: [{@id: ...}]
  for (const rl of asArray(node.relatedLink)) {
    const id = extractId(rl);
    if (id) out.add(id);
  }

  // sometimes: isRelatedTo: {@id: ...} or [ ... ]
  for (const ir of asArray(node.isRelatedTo)) {
    const id = extractId(ir);
    if (id) out.add(id);
  }

  // if someone already placed "links" in seed
  for (const l of asArray(node.links)) {
    const to = (l && typeof l === "object") ? extractId(l.to) : null;
    if (to) out.add(to);
  }

  return Array.from(out);
}

function loadSeedGraph(seedPath) {
  const abs = path.resolve(process.cwd(), seedPath);
  if (!fs.existsSync(abs)) {
    throw new Error(`Seed file not found: ${abs}`);
  }
  const raw = fs.readFileSync(abs, "utf8");
  const json = JSON.parse(raw);
  const g = asArray(json["@graph"]);

  const seedNodes = [];
  for (const n of g) {
    if (!n || typeof n !== "object") continue;
    const id = n["@id"];
    if (!id) continue;
    const title = n.name || n.headline || n.title || id;
    const cluster = n.cluster || inferClusterFromUrn(id);
    const type = inferTypeFromSeed(n);
    const related = extractRelatedFromSeed(n);

    seedNodes.push({
      id: String(id),
      title: String(title),
      cluster: String(cluster),
      type,
      file: null,
      related
    });
  }
  return seedNodes;
}

// --- Role weighting heuristic

const ROLES = ["designer", "engineer", "product", "exec", "aiAgent"];

// Base affinity by cluster
const CLUSTER_BASE = {
  foundations: { designer: 0.85, engineer: 0.65, product: 0.75, exec: 0.8, aiAgent: 0.25 },
  semantics:   { designer: 0.65, engineer: 0.9,  product: 0.7,  exec: 0.6, aiAgent: 0.95 },
  dso:         { designer: 0.8,  engineer: 0.7,  product: 0.55, exec: 0.35, aiAgent: 0.35 },
  graphnav:    { designer: 0.8,  engineer: 0.6,  product: 0.65, exec: 0.4, aiAgent: 0.45 },
  dual:        { designer: 0.65, engineer: 0.8,  product: 0.85, exec: 0.85, aiAgent: 0.75 },
  ops:         { designer: 0.35, engineer: 0.75, product: 0.8,  exec: 0.95, aiAgent: 0.55 },
  entry:       { designer: 0.75, engineer: 0.75, product: 0.75, exec: 0.75, aiAgent: 0.75 },
  "reading-paths": { designer: 0.6, engineer: 0.6, product: 0.6, exec: 0.6, aiAgent: 0.6 },
  "ui-concepts":   { designer: 0.7, engineer: 0.7, product: 0.7, exec: 0.6, aiAgent: 0.7 },
  meta:        { designer: 0.55, engineer: 0.45, product: 0.5,  exec: 0.55, aiAgent: 0.2 }
};

// Bridge nodes (high value connectors)
const BRIDGE_IDS = new Set([
  "urn:ssd:toc:v2:entry:foundations",
  "urn:ssd:toc:v2:entry:semantics",
  "urn:ssd:toc:v2:entry:dso",
  "urn:ssd:toc:v2:entry:graphnav",
  "urn:ssd:toc:v2:entry:dual",
  "urn:ssd:toc:v2:entry:ops",
  "urn:ssd:toc:v2:uiconcept:role-switcher",
  "urn:ssd:toc:v2:uiconcept:role-switcher-spec",
  "urn:ssd:toc:v2:epilogue",
  // Optional “core anchors” (tune later):
  "urn:ssd:toc:v2:foundations:01",
  "urn:ssd:toc:v2:foundations:02",
  "urn:ssd:toc:v2:semantics:01",
  "urn:ssd:toc:v2:semantics:03"
]);

function clamp01(x) {
  return Math.max(0, Math.min(1, x));
}

function computeRoleWeights(fromNode, toNode) {
  const fromC = fromNode.cluster || "meta";
  const toC = toNode.cluster || "meta";

  const base = CLUSTER_BASE[toC] || CLUSTER_BASE.meta;

  // Global modifiers
  const sameClusterBonus = (fromC === toC) ? 0.12 : 0;
  const crossClusterPenalty = (fromC !== toC) ? 0.08 : 0;

  const bridgeBonus = BRIDGE_IDS.has(toNode.id) ? 0.10 : 0;

  const weights = {};
  for (const r of ROLES) {
    let w = base[r] ?? 0.5;
    w += sameClusterBonus;
    w += bridgeBonus;
    w -= crossClusterPenalty;

    // AI Agent dislikes pure “meta”/narrative unless it’s bridge/core
    if (r === "aiAgent" && toC === "meta" && !BRIDGE_IDS.has(toNode.id)) w -= 0.15;

    weights[r] = clamp01(Number(w.toFixed(3)));
  }
  return weights;
}

// --- Main

const BOOK_DIR = path.resolve(process.cwd(), "book");
if (!fs.existsSync(BOOK_DIR)) {
  console.error(`Missing directory: ${BOOK_DIR}`);
  process.exit(1);
}

// Seed (canonical TOC) is optional, but recommended until all 250 .md pages exist.
let seeded = [];
try {
  if (ARGS.seed) seeded = loadSeedGraph(ARGS.seed);
} catch (e) {
  console.error(String(e?.message || e));
  process.exit(1);
}

const mdFiles = walk(BOOK_DIR).filter(f => f.endsWith(".md"));

const nodesById = new Map();
const nodes = [];

// 1) Load seed nodes first (if provided)
for (const s of seeded) {
  nodesById.set(s.id, s);
  nodes.push(s);
}

for (const file of mdFiles) {
  const md = fs.readFileSync(file, "utf8");
  const { fm } = parseFrontmatter(md);
  if (!fm || !fm.id) continue;

  const node = {
    id: fm.id,
    title: fm.title || path.basename(file, ".md"),
    cluster: fm.cluster || inferClusterFromPath(file),
    type: fm.type || "WebPage",
    file: path.relative(process.cwd(), file).replace(/\\/g, "/"),
    related: normalizeRelated(fm.related ?? fm.links ?? [])
  };

  // 2) Merge: if node exists from seed, enrich/override with MD
  const existing = nodesById.get(node.id);
  if (existing) {
    existing.title = node.title || existing.title;
    existing.cluster = node.cluster || existing.cluster;
    existing.type = node.type || existing.type;
    existing.file = node.file || existing.file;

    // Merge related edges (union). Prefer MD set if you want strictness.
    const merged = new Set([...(existing.related || []), ...(node.related || [])]);
    existing.related = Array.from(merged);
  } else {
    nodesById.set(node.id, node);
    nodes.push(node);
  }
}

function inferClusterFromPath(file) {
  const parts = file.replace(/\\/g, "/").split("/");
  // book/<cluster>/x.md
  const idx = parts.indexOf("book");
  if (idx >= 0 && parts[idx + 1]) return parts[idx + 1];
  return "meta";
}

function normalizeRelated(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v.filter(Boolean);
  // If someone put a scalar, accept it
  return [String(v)].filter(Boolean);
}

// Optional: warn on dangling related refs (useful when seed contains 250 nodes but MD is partial)
function warnDangling(nodesById, nodes) {
  let dangling = 0;
  for (const n of nodes) {
    for (const toId of (n.related || [])) {
      if (!nodesById.has(toId)) dangling++;
    }
  }
  if (dangling > 0) {
    console.warn(`Warning: ${dangling} dangling related refs (targets not present in node set).`);
  }
}

// Build graph nodes and edges
const graph = [];

warnDangling(nodesById, nodes);

for (const n of nodes) {
  const outEdges = [];
  for (const toId of n.related) {
    const toNode = nodesById.get(toId);
    if (!toNode) continue; // skip dangling refs, optionally warn
    outEdges.push({
      to: toId,
      roleWeights: computeRoleWeights(n, toNode)
    });
  }

  const cluster = n.cluster === "entry" ? "entry"
               : n.cluster === "reading-paths" ? "reading-paths"
               : n.cluster === "ui-concepts" ? "ui-concepts"
               : n.cluster;

  const types = ["WebPage"];
  // keep your existing custom types, but make them visible
  if (n.type && n.type !== "WebPage") types.push(n.type);

  graph.push({
    "@id": n.id,
    "@type": types,
    name: n.title,
    cluster,
    ...(n.file ? { "ssd:file": n.file } : {}),
    ...(outEdges.length ? { links: outEdges } : {})
  });
}

// JSON-LD context
const jsonld = {
  "@context": {
    "@vocab": "https://schema.org/",
    "ssd": "https://semanticdesign.systems/ns/ssd#",
    "role": "ssd:role",
    "cluster": "ssd:cluster",
    "links": { "@id": "ssd:links", "@container": "@set" },
    "to": { "@id": "ssd:to", "@type": "@id" },
    "roleWeights": "ssd:roleWeights",
    "designer": "ssd:designer",
    "engineer": "ssd:engineer",
    "product": "ssd:product",
    "exec": "ssd:exec",
    "aiAgent": "ssd:aiAgent",
    "file": "ssd:file",
    "EntryPage": "ssd:EntryPage",
    "ReadingPath": "ssd:ReadingPath",
    "UIConcept": "ssd:UIConcept",
    "UIConceptSpec": "ssd:UIConceptSpec"
  },
  "@graph": graph
};

const outPath = path.resolve(process.cwd(), "book", "graph-index.jsonld");
fs.writeFileSync(outPath, JSON.stringify(jsonld, null, 2) + "\n", "utf8");
console.log(`Wrote ${outPath} with ${graph.length} nodes.` + (ARGS.seed ? ` (seed: ${ARGS.seed})` : ""));
