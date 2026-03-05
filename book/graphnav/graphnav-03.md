---
id: urn:ssd:toc:v2:graphnav:03
title: "GraphNav 03 — Traversing State Graphs"
cluster: graphnav
type: WebPage
status: draft
keywords:
  - state graphs
  - traversal
  - lifecycle navigation
  - transitions
related:
  - urn:ssd:toc:v2:graphnav:02
  - urn:ssd:toc:v2:graphnav:04
  - urn:ssd:toc:v2:semantics:03
  - urn:ssd:toc:v2:dso:04
  - urn:ssd:toc:v2:foundations:05
---

# GraphNav 03 — Traversing State Graphs

When entities have state, navigation becomes **temporal**.

You are not only moving across concepts.  
You are moving **through time and permission boundaries**.

## What a state graph is

A state graph models:

- states as nodes
- legal transitions as edges
- irreversible boundaries
- conditional paths

Navigation across states is navigation across meaning.

## Why state traversal must be explicit

If state transitions are implicit:

- users are surprised
- agents misfire
- audits fail
- recovery is unclear

Explicit traversal:

- makes consequences visible
- enforces constraints consistently
- supports rollback where possible

## Designing traversal affordances

Designers should:

- label transitions clearly
- show current state context
- mark irreversible edges
- preview effects of traversal

Traversal is an action, not a link.

## Human vs agent traversal

Humans need:

- explanation
- confirmation
- context

Agents need:

- preconditions
- postconditions
- determinism

Both traverse the same graph.

## Continue exploring

- → [GraphNav 04 — Decision Points and Contextual Flow](urn:ssd:toc:v2:graphnav:04)
- → [Semantics 03 — States and Transitions](urn:ssd:toc:v2:semantics:03)
- → [DSO 04 — State Machines Belong in Design Systems](urn:ssd:toc:v2:dso:04)
- → [GraphNav 02](urn:ssd:toc:v2:graphnav:02)
