---
id: urn:ssd:toc:v2:dso:04
title: "DSO 04 — State Machines Belong in Design Systems"
cluster: dso
type: WebPage
status: draft
keywords:
  - state machines
  - lifecycle
  - design systems
  - governance
related:
  - urn:ssd:toc:v2:dso:03
  - urn:ssd:toc:v2:dso:05
  - urn:ssd:toc:v2:semantics:03
  - urn:ssd:toc:v2:ops:01
  - urn:ssd:toc:v2:jsonld:03
---

# DSO 04 — State Machines Belong in Design Systems

State machines are usually treated as implementation details.  
This is a mistake.

They belong in the design system.

## Why designers must own state machines

If designers do not define states and transitions:

- engineers infer them
- agents guess them
- inconsistencies proliferate

State machines encode product truth.

## What it means to design a state machine

Designing a state machine means:

- naming states explicitly
- defining legal transitions
- marking irreversible edges
- assigning responsibility

This is design work, not engineering overhead.

## Design systems as behavioral contracts

When state machines live in the design system:

- UI becomes consistent by construction
- automation respects rules
- governance becomes reviewable
- change impact is visible

The system gains behavioral integrity.

## A practical guideline

If a transition requires a meeting to explain, it should be in the design system.

## Continue exploring

- → [DSO 05 — Constraints as Design Tokens](urn:ssd:toc:v2:dso:05)
- → [Semantics 03 — States and Transitions](urn:ssd:toc:v2:semantics:03)
- → [Ops 01 — Governance: Who Owns Meaning](urn:ssd:toc:v2:ops:01)
- → [DSO 03](urn:ssd:toc:v2:dso:03)
