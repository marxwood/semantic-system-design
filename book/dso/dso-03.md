---
id: urn:ssd:toc:v2:dso:03
title: "DSO 03 — States and Variants Are Not the Same"
cluster: dso
type: WebPage
status: draft
keywords:
  - states
  - variants
  - design systems
  - semantics
related:
  - urn:ssd:toc:v2:dso:02
  - urn:ssd:toc:v2:dso:04
  - urn:ssd:toc:v2:semantics:03
  - urn:ssd:toc:v2:foundations:03
  - urn:ssd:toc:v2:graphnav:03
---

# DSO 03 — States and Variants Are Not the Same

Design systems often collapse **states** and **variants** into a single concept.  
This creates semantic confusion that scales badly.

Semantic System Design separates them deliberately.

## What a state is

A state describes a **meaningful condition** of an entity.

States:

- affect allowed actions
- encode lifecycle
- imply rules and constraints
- are often irreversible

“Published”, “Locked”, “Archived” are states.

## What a variant is

A variant describes a **presentation choice**.

Variants:

- change appearance
- adapt to context
- do not change meaning
- should never affect rules

“Compact”, “Primary”, “Inline” are variants.

## Why mixing them is dangerous

When variants encode state:

- behavior becomes implicit
- rules leak into styling
- agents cannot reason
- refactors break meaning

If changing a color changes behavior, the system is broken.

## The design rule

> If it changes what is allowed, it is a state.  
> If it changes how it looks, it is a variant.

This rule prevents an entire class of bugs.

## Continue exploring

- → [DSO 04 — State Machines Belong in Design Systems](urn:ssd:toc:v2:dso:04)
- → [Semantics 03 — States and Transitions](urn:ssd:toc:v2:semantics:03)
- → [GraphNav 03 — Traversing State Graphs](urn:ssd:toc:v2:graphnav:03)
- → [DSO 02](urn:ssd:toc:v2:dso:02)
