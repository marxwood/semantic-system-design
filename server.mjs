import express from "express";
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const BOOK_DIR = path.resolve(__dirname, "book");
const INDEX_PATH = path.join(BOOK_DIR, "graph-index.jsonld");

const ROLES = ["designer", "engineer", "product", "exec", "aiAgent"];
const DEFAULT_ROLE = "designer";

function safeReadJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function loadGraphIndex() {
  const j = safeReadJson(INDEX_PATH);
  const graph = Array.isArray(j["@graph"]) ? j["@graph"] : [];
  const byId = new Map();
  for (const n of graph) {
    if (n && n["@id"]) byId.set(n["@id"], n);
  }
  return { jsonld: j, graph, byId };
}

let GRAPH = loadGraphIndex();

// Optional: hot-reload index when file changes
fs.watchFile(INDEX_PATH, { interval: 500 }, () => {
  try {
    GRAPH = loadGraphIndex();
    console.log("Reloaded graph-index.jsonld");
  } catch (e) {
    console.error("Failed to reload graph-index.jsonld:", e);
  }
});

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function clamp01(x) {
  const n = Number(x);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

function getRole(req) {
  const q = String(req.query.role || "").trim();
  if (ROLES.includes(q)) return q;
  return DEFAULT_ROLE;
}

function nodeTitle(node) {
  return (
    node?.name || node?.headline || node?.title || node?.["@id"] || "Untitled"
  );
}

function nodeFile(node) {
  // tool outputs ssd:file as a raw key; depending on JSON-LD compaction it could be "ssd:file" or "file"
  return node?.["ssd:file"] || node?.file || null;
}

function resolveMarkdownPathForId(id) {
  const node = GRAPH.byId.get(id);
  if (!node) return null;

  const rel = nodeFile(node);
  if (rel) {
    const abs = path.resolve(__dirname, rel);
    if (abs.startsWith(BOOK_DIR) && fs.existsSync(abs)) return abs;
  }

  // Fallback: try to locate a matching md by scanning once (cheap enough for now)
  // If this becomes slow, cache a map of id->file from md parsing.
  const files = walkMdFiles(BOOK_DIR);
  for (const f of files) {
    const md = fs.readFileSync(f, "utf8");
    const fm = parseFrontmatter(md);
    if (fm?.id === id) return f;
  }
  return null;
}

// minimal walker
function walkMdFiles(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkMdFiles(p, out);
    else if (ent.isFile() && p.endsWith(".md")) out.push(p);
  }
  return out;
}

// minimal frontmatter parser (same constraints as earlier)
function parseFrontmatter(md) {
  const m = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!m) return null;
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

      if (v.startsWith("[") && v.endsWith("]")) {
        const inner = v.slice(1, -1).trim();
        fm[k] = inner
          ? inner.split(",").map((s) => s.trim().replace(/^["']|["']$/g, ""))
          : [];
      } else if (v === "" || v === "|") {
        fm[k] = fm[k] ?? (v === "" ? [] : "");
      } else {
        fm[k] = v.replace(/^["']|["']$/g, "");
      }
      continue;
    }
  }
  return fm;
}

function rankLinks(node, role) {
  const links = Array.isArray(node?.links) ? node.links : [];
  const scored = links
    .map((l) => {
      const to = l?.to;
      const w = l?.roleWeights?.[role];
      const score = clamp01(w);
      return { to, score };
    })
    .filter((x) => x.to)
    .sort((a, b) => b.score - a.score);

  return scored;
}

function renderNavList(items, role, label) {
  if (!items.length) return "";
  const lis = items
    .map(({ to, score }) => {
      const tnode = GRAPH.byId.get(to);
      const title = nodeTitle(tnode);
      const href = `/node/${encodeURIComponent(to)}?role=${encodeURIComponent(role)}`;
      return `<li><a href="${href}">${escapeHtml(title)}</a> <span class="score">${score.toFixed(2)}</span></li>`;
    })
    .join("\n");
  return `<section class="nav"><h3>${escapeHtml(label)}</h3><ul>${lis}</ul></section>`;
}

function htmlShell({ title, role, contentHtml, leftHtml, rightHtml }) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <style>
    :root { --fg:#111; --muted:#666; --bg:#fff; --border:#e6e6e6; }
    body { margin:0; font:14px/1.55 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif; color:var(--fg); background:var(--bg); }
    header { position:sticky; top:0; background:var(--bg); border-bottom:1px solid var(--border); padding:10px 14px; display:flex; gap:12px; align-items:center; z-index:10; }
    header .brand { font-weight:600; }
    header .spacer { flex:1; }
    header select { padding:6px 8px; }
    main { display:grid; grid-template-columns: 280px 1fr 320px; gap:16px; padding:16px; max-width: 1400px; margin:0 auto; }
    aside { border:1px solid var(--border); border-radius:10px; padding:12px; }
    article { border:1px solid var(--border); border-radius:10px; padding:18px; min-height: 60vh; }
    h1,h2,h3 { line-height:1.2; }
    .muted { color:var(--muted); font-size:12px; }
    a { color:inherit; }
    a:hover { text-decoration: underline; }
    ul { padding-left: 18px; }
    .score { color:var(--muted); font-size:12px; margin-left:8px; }
    .nav h3 { margin: 6px 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); }
    code, pre { background:#f7f7f7; border:1px solid var(--border); border-radius:8px; }
    pre { padding:12px; overflow:auto; }
  </style>
</head>
<body>
  <header>
    <div class="brand"><a href="/?role=${encodeURIComponent(role)}" style="text-decoration:none;">Semantic System Design</a></div>
    <div class="muted">Graph renderer</div>
    <div class="spacer"></div>
    <form method="get" id="roleForm">
      <label class="muted" for="role">Role</label>
      <select id="role" name="role" onchange="document.getElementById('roleForm').submit()">
        ${ROLES.map((r) => `<option value="${r}" ${r === role ? "selected" : ""}>${r}</option>`).join("")}
      </select>
    </form>
  </header>

  <main>
    <aside>${leftHtml || ""}</aside>
    <article>${contentHtml || ""}</article>
    <aside>${rightHtml || ""}</aside>
  </main>
</body>
</html>`;
}

const app = express();

app.get("/", (req, res) => {
  const role = getRole(req);

  // If you have a central hub node, use it; else fall back to entry:foundations
  const preferred = ["urn:ssd:toc:v2:hub", "urn:ssd:toc:v2:entry:foundations"];
  const startId =
    preferred.find((id) => GRAPH.byId.has(id)) || GRAPH.graph[0]?.["@id"];

  res.redirect(
    `/node/${encodeURIComponent(startId)}?role=${encodeURIComponent(role)}`,
  );
});

app.get("/node/:id", (req, res) => {
  const role = getRole(req);
  const id = decodeURIComponent(req.params.id);

  const node = GRAPH.byId.get(id);
  if (!node) {
    res.status(404).send(`Unknown node: ${escapeHtml(id)}`);
    return;
  }

  // content
  let mdHtml = `<h1>${escapeHtml(nodeTitle(node))}</h1><p class="muted">${escapeHtml(id)}</p>`;
  const mdPath = resolveMarkdownPathForId(id);
  if (mdPath) {
    const md = fs.readFileSync(mdPath, "utf8");
    const body = md.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "");
    mdHtml = marked.parse(body);
    mdHtml =
      `<h1>${escapeHtml(nodeTitle(node))}</h1><p class="muted">${escapeHtml(id)} · ${escapeHtml(path.relative(__dirname, mdPath))}</p>` +
      mdHtml;
  } else {
    mdHtml += `<p class="muted">No markdown file found for this node yet.</p>`;
  }

  // navigation
  const ranked = rankLinks(node, role);
  const next = ranked.slice(0, 3);
  const related = ranked.slice(3, 15);

  const leftHtml = `
    <div class="muted">Node</div>
    <div style="font-weight:600; margin:6px 0 10px;">${escapeHtml(nodeTitle(node))}</div>
    <div class="muted" style="margin-bottom:10px;">Cluster: ${escapeHtml(node.cluster || "unknown")}</div>
    ${renderNavList(next, role, "Next")}
  `;

  const rightHtml = `
    ${renderNavList(related, role, "Related")}
    <section class="nav">
      <h3>Tools</h3>
      <ul>
        <li><a href="/raw/${encodeURIComponent(id)}">Raw markdown</a></li>
        <li><a href="/graph/${encodeURIComponent(id)}?role=${encodeURIComponent(role)}">JSON</a></li>
      </ul>
    </section>
  `;

  res.send(
    htmlShell({
      title: nodeTitle(node),
      role,
      contentHtml: mdHtml,
      leftHtml,
      rightHtml,
    }),
  );
});

app.get("/raw/:id", (req, res) => {
  const id = decodeURIComponent(req.params.id);
  const mdPath = resolveMarkdownPathForId(id);
  if (!mdPath) return res.status(404).send("No markdown file found.");
  res.type("text/plain").send(fs.readFileSync(mdPath, "utf8"));
});

app.get("/graph/:id", (req, res) => {
  const role = getRole(req);
  const id = decodeURIComponent(req.params.id);
  const node = GRAPH.byId.get(id);
  if (!node) return res.status(404).json({ error: "Unknown node" });

  const ranked = rankLinks(node, role);
  res.json({ id, role, node, rankedLinks: ranked });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3030;
app.listen(PORT, () => {
  console.log(`Renderer running on http://localhost:${PORT}`);
  console.log(`Using graph index: ${INDEX_PATH}`);
});
