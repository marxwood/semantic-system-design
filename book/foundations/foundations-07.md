---
id: urn:ssd:toc:v2:foundations:07
title: "Foundations 07 — The Minimum Viable Semantic Model"
cluster: foundations
type: WebPage
status: draft
keywords:
  - semantic model
  - entities
  - relations
  - capabilities
  - constraints
related:
  - urn:ssd:toc:v2:foundations:06
  - urn:ssd:toc:v2:semantics:01
  - urn:ssd:toc:v2:graphnav:01
  - urn:ssd:toc:v2:dso:01
  - urn:ssd:toc:v2:jsonld:01
---

# Foundations 07 — The Minimum Viable Semantic Model

You do not need a full ontology to practice Semantic System Design.

You need a **minimum viable semantic model**.

## The four primitives

Every semantic product can be reduced to four primitives:

1. **Entities** — what exists
2. **Relationships** — how things connect
3. **Capabilities** — what can be done
4. **Constraints** — what must not happen

If any of these are missing or implicit, the system will drift.

## Why this is enough

With these four primitives, you can:

- render consistent UIs
- generate safe automations
- enable agentic operation
- govern change
- audit behavior

Everything else is an optimization layer.

## The design litmus test

Ask these questions of any feature:

- What entity does this operate on?
- What relationships does it assume?
- What capability does it expose?
- What constraint does it enforce?

If you cannot answer clearly, the feature is under-designed.

## Why this closes the Foundations cluster

Foundations exist to reset the mental model.

From here on:

- we stop talking about “screens”
- we stop talking about “flows”
- we talk about **meaning**, **graphs**, and **capabilities**

The rest of the book assumes this baseline.

## Continue exploring

- → [Semantics 01 — Entities as Interaction Primitives](urn:ssd:toc:v2:semantics:01)
- → [GraphNav 01 — Graph Thinking for UI/UX](urn:ssd:toc:v2:graphnav:01)
- → [DSO 01 — From Component Libraries to Ontologies](urn:ssd:toc:v2:dso:01)
- → [Foundations entry](urn:ssd:toc:v2:entry:foundations)
