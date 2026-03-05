---
id: urn:ssd:toc:v2:dual:02
title: "Dual 02 — Designing for Operators"
cluster: dual
type: WebPage
status: draft
keywords:
  - operators
  - roles
  - intent
  - responsibility
related:
  - urn:ssd:toc:v2:dual:01
  - urn:ssd:toc:v2:dual:03
  - urn:ssd:toc:v2:foundations:06
  - urn:ssd:toc:v2:semantics:09
  - urn:ssd:toc:v2:ops:01
---

# Dual 02 — Designing for Operators

Interfaces are not designed for "users."  
They are designed for **operators**.

An operator is any actor—human or machine—that can cause change.

## Why "user" is insufficient

"User" collapses:

- authority
- intent
- responsibility

Operators differ in:

- permissions
- goals
- risk tolerance
- accountability

Design must reflect this.

## Operator-aware design

Operator-aware systems:

- expose authority explicitly
- gate actions by role
- surface responsibility
- adapt projections to intent

This applies equally to humans and agents.

## Intent as a first-class signal

Designers must capture:

- what the operator is trying to achieve
- under which constraints
- with what acceptable risk

Intent shapes projection.

## Avoiding operator confusion

If two operators see the same surface but have different authority, the design is misleading.

Semantic systems prevent this by construction.

## Continue exploring

- → [Dual 03 — Intent Capture](urn:ssd:toc:v2:dual:03)
- → [Semantics 09 — Permissions and Authority](urn:ssd:toc:v2:semantics:09)
- → [Ops 01 — Governance: Who Owns Meaning](urn:ssd:toc:v2:ops:01)
- → [Dual 01](urn:ssd:toc:v2:dual:01)
