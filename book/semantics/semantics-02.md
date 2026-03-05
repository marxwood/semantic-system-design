---
id: urn:ssd:toc:v2:semantics:01
title: "Semantics 01 — Entities as Interaction Primitives"
cluster: semantics
type: WebPage
status: draft
keywords:
  - entities
  - primitives
  - interaction
  - semantic modeling
related:
  - urn:ssd:toc:v2:foundations:07
  - urn:ssd:toc:v2:semantics:02
  - urn:ssd:toc:v2:dso:02
  - urn:ssd:toc:v2:jsonld:01
  - urn:ssd:toc:v2:graphnav:01
---

# Semantics 01 — Entities as Interaction Primitives

Everything you interact with in a product is an entity, whether you name it or not.

Semantic System Design starts by making entities explicit and treating them as **interaction primitives**, not database rows.

## What an entity is (for designers)

An entity is something that:

- has identity
- can be referenced
- can change state
- participates in relationships
- can be acted upon

If something appears in your UI more than once, it is already an entity.

## Why entities matter more than screens

Screens are ephemeral.  
Entities persist.

When design is screen-first:

- identity is duplicated
- state is fragmented
- actions are contextual hacks

When design is entity-first:

- consistency emerges
- reuse is structural
- navigation becomes meaningful

## Entities vs objects vs components

Entities are not:

- UI components
- ORM objects
- JSON blobs

Entities are **conceptual anchors** that survive representation changes.

A button renders an action.  
A card renders an entity.  
The entity exists regardless.

## The designer’s responsibility

Designers must:

- name entities precisely
- define their states
- make relationships visible
- ensure actions map to entities

If designers do not do this work, it will be inferred—and inference is where ambiguity lives.

## Continue exploring

- → [Semantics 02 — Constraints, Not Screens](urn:ssd:toc:v2:semantics:02)
- → [DSO 02 — Typing Entities in Design Systems](urn:ssd:toc:v2:dso:02)
- → [JSON-LD 01 — Modeling Entities for Interaction](urn:ssd:toc:v2:jsonld:01)
- → [GraphNav 01 — Graph Thinking for UI/UX](urn:ssd:toc:v2:graphnav:01)
- → [Foundations 07](urn:ssd:toc:v2:foundations:07)
