---
id: urn:ssd:toc:v2:dso:05
title: "DSO 05 — Constraints as Design Tokens"
cluster: dso
type: WebPage
status: draft
keywords:
  - constraints
  - design tokens
  - rules
  - enforcement
related:
  - urn:ssd:toc:v2:dso:04
  - urn:ssd:toc:v2:dso:06
  - urn:ssd:toc:v2:semantics:02
  - urn:ssd:toc:v2:jsonld:04
  - urn:ssd:toc:v2:ops:03
---

# DSO 05 — Constraints as Design Tokens

Design tokens traditionally encode **appearance**.  
Semantic System Design extends them to encode **rules**.

Constraints are design tokens for behavior.

## Why constraints belong in the design system

If constraints live only in code:

- designers cannot reason about behavior
- inconsistencies emerge across surfaces
- automation becomes unsafe
- reviews become cosmetic

Making constraints explicit is a design responsibility.

## What a constraint-token is

A constraint-token declares:

- allowed values
- forbidden states
- required preconditions
- invariants that must hold

Examples:

- “This action requires approval”
- “This state cannot be reverted”
- “This value must be unique”

These are not implementation details.  
They are interaction guarantees.

## How constraint-tokens are used

Constraint-tokens can:

- drive form validation
- gate actions
- inform confirmations
- guide agent behavior
- enable audits

One rule, many surfaces.

## The payoff

When constraints are tokens:

- UI becomes thinner
- logic becomes consistent
- behavior becomes inspectable
- meaning becomes stable

## Continue exploring

- → [DSO 06 — Drift: When Components Mean Different Things](urn:ssd:toc:v2:dso:06)
- → [Semantics 02 — Constraints, Not Screens](urn:ssd:toc:v2:semantics:02)
- → [JSON-LD 04 — Forms as Contracts](urn:ssd:toc:v2:jsonld:04)
- → [DSO 04](urn:ssd:toc:v2:dso:04)
