---
id: urn:ssd:toc:v2:graphnav:06
title: "GraphNav 06 — Return Paths and Closure"
cluster: graphnav
type: WebPage
status: draft
keywords:
  - return paths
  - closure
  - navigation loops
  - completion
related:
  - urn:ssd:toc:v2:graphnav:05
  - urn:ssd:toc:v2:graphnav:07
  - urn:ssd:toc:v2:semantics:04
  - urn:ssd:toc:v2:ops:04
  - urn:ssd:toc:v2:foundations:02
---

# GraphNav 06 — Return Paths and Closure

Exploration without closure becomes disorientation.

Graph navigation must deliberately design **return paths** and **closure points**.

## What closure means in a graph

Closure is the moment when:

- intent is satisfied
- risk is resolved
- action completes
- context stabilizes

It is not "going back."  
It is **knowing you are done**.

## Designing return paths

Return paths should:

- preserve context
- respect state changes
- avoid forcing linear backtracking
- acknowledge completed actions

"Back" is rarely the right answer.

## Closure for agents

Agents need explicit signals:

- completion states
- success vs partial success
- unresolved issues
- escalation requirements

Implicit closure leads to loops and retries.

## A design warning

If users ask "What now?" after an action, closure is missing.

## Continue exploring

- → [GraphNav 07 — Discoverability and Progressive Revelation](urn:ssd:toc:v2:graphnav:07)
- → [Semantics 04 — Time, History, and Meaning](urn:ssd:toc:v2:semantics:04)
- → [Ops 04 — Observability](urn:ssd:toc:v2:ops:04)
- → [GraphNav 05](urn:ssd:toc:v2:graphnav:05)
