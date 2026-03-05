---
id: urn:ssd:toc:v2:dso:07
title: "DSO 07 — Components as Typed Projections"
cluster: dso
type: WebPage
status: draft
keywords:
  - projections
  - components
  - typing
  - surface abstraction
related:
  - urn:ssd:toc:v2:dso:06
  - urn:ssd:toc:v2:dso:08
  - urn:ssd:toc:v2:foundations:05
  - urn:ssd:toc:v2:graphnav:02
  - urn:ssd:toc:v2:dual:01
---

# DSO 07 — Components as Typed Projections

A component is not a thing.  
A component is a **projection**.

Semantic System Design treats components as **typed projections of meaning**, not as primitives.

## What a projection really is

A projection:

- selects which aspects of an entity are visible
- chooses which relationships to surface
- exposes a subset of capabilities
- enforces constraints contextually

The same entity can have many valid projections.

## Why typing projections matters

Without typing:

- projections become ad hoc
- reuse becomes superficial
- agents cannot reason
- consistency erodes

Typed projections declare:

- which entity they project
- for which context
- with which guarantees

This makes projections composable.

## Components stop being “reusable UI”

Instead of:

> “Can we reuse this component?”

You ask:

> “Is this a valid projection of this entity in this context?”

Reuse becomes semantic, not cosmetic.

## Design implication

Designers should:

- define projection types explicitly
- document what is hidden as well as shown
- align projections with operator intent

UI becomes honest about its limits.

## Continue exploring

- → [DSO 08 — Surface Layering and Context](urn:ssd:toc:v2:dso:08)
- → [Foundations 05 — The Product Surface Is a Projection](urn:ssd:toc:v2:foundations:05)
- → [GraphNav 02 — Edges, Not Menus](urn:ssd:toc:v2:graphnav:02)
- → [DSO 06](urn:ssd:toc:v2:dso:06)
