---
id: urn:ssd:toc:v2:ops:07
title: "Ops 07 — Access Control Models"
cluster: ops
type: WebPage
status: draft
keywords:
  - access control
  - permissions
  - roles
  - authority models
related:
  - urn:ssd:toc:v2:ops:06
  - urn:ssd:toc:v2:ops:08
  - urn:ssd:toc:v2:semantics:09
  - urn:ssd:toc:v2:dual:06
  - urn:ssd:toc:v2:dso:12
---

# Ops 07 — Access Control Models

Access control is not about security alone.  
It is about **power distribution** inside a semantic system.

Poorly designed access control distorts meaning.

## Why access control is semantic

Permissions define:

- who may assert truth
- who may change state
- who may override constraints
- who is accountable

Changing permissions changes the meaning of the system.

## Common access control models

Semantic systems often combine:

- role-based access (RBAC)
- attribute-based access (ABAC)
- context-based constraints
- temporal limits

Designers must understand the tradeoffs, not just engineers.

## Designing visible authority

Good access control design:

- makes authority visible at action points
- explains why something is allowed or blocked
- avoids "mystery denials"
- logs privilege use explicitly

Invisible power erodes trust.

## Access control for agents

Agents require:

- explicit authority scopes
- expiration rules
- escalation-only privileges
- auditability

Long-lived, unbounded agent authority is a critical risk.

## Continue exploring

- → [Ops 08 — Change Management](urn:ssd:toc:v2:ops:08)
- → [Semantics 09 — Permissions and Authority](urn:ssd:toc:v2:semantics:09)
- → [Dual 06 — Audit Surfaces](urn:ssd:toc:v2:dual:06)
- → [Ops 06](urn:ssd:toc:v2:ops:06)
