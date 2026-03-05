---
id: urn:ssd:toc:v2:foundations:04
title: "Foundations 04 — Design as Contract, Not Decoration"
cluster: foundations
type: WebPage
status: draft
keywords:
  - contract
  - capabilities
  - constraints
  - interaction design
related:
  - urn:ssd:toc:v2:foundations:03
  - urn:ssd:toc:v2:foundations:05
  - urn:ssd:toc:v2:semantics:07
  - urn:ssd:toc:v2:jsonld:02
  - urn:ssd:toc:v2:dual:01
---

# Foundations 04 — Design as Contract, Not Decoration

Design used to be evaluated as a layer placed on top of software.  
That model breaks the moment software becomes callable by non-humans.

In a semantic product, design is not a skin.  
Design is a **contract**.

## What a “contract” means in product terms

A contract is a set of enforceable statements about:

- what exists
- what can be done
- what must not happen
- what is guaranteed after an action
- what evidence can be inspected

A screen cannot guarantee any of this.  
A semantic system can.

## Contracts are already in your UI (just undocumented)

You already design contracts, but they are encoded indirectly:

- “Are you sure?” dialogs signal irreversibility.
- Disabled controls signal permissions.
- Error states signal invalid constraints.
- Empty states signal missing prerequisites.

In most products, these signals are visual—meaning is implicit.  
Semantic System Design makes the contract explicit and reusable.

## The contract is the product

The product is not the UI.  
The UI is a projection of the contract.

Once you accept this, several things follow:

- UI can vary without losing coherence
- multiple UIs can exist without duplication
- automation becomes safe because constraints are explicit
- governance becomes possible because meaning is reviewable

## Capabilities are contract clauses

Capabilities are not buttons.  
Buttons are one way to render a capability.

A capability declares:

- inputs (what it needs)
- constraints (what is allowed)
- effects (what changes)
- outputs (what becomes true)

If you cannot express those, you are designing interaction theater.

## Continue exploring

- → [Foundations 05 — The Product Surface Is a Projection](urn:ssd:toc:v2:foundations:05)
- → [Semantics 07 — Capabilities as Actions](urn:ssd:toc:v2:semantics:07)
- → [JSON-LD 02 — Modeling Capabilities as Actions](urn:ssd:toc:v2:jsonld:02)
- → [Dual 01 — Dual-Channel UX](urn:ssd:toc:v2:dual:01)
- → [Foundations 03](urn:ssd:toc:v2:foundations:03)
