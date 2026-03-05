---
id: urn:ssd:toc:v2:dso:08
title: "DSO 08 — Surface Layering and Context"
cluster: dso
type: WebPage
status: draft
keywords:
  - surface layering
  - context
  - multi-surface
  - ui architecture
related:
  - urn:ssd:toc:v2:dso:07
  - urn:ssd:toc:v2:dso:09
  - urn:ssd:toc:v2:foundations:05
  - urn:ssd:toc:v2:dual:01
  - urn:ssd:toc:v2:ops:02
---

# DSO 08 — Surface Layering and Context

Not all surfaces are equal.  
Not all contexts deserve the same projection.

Semantic System Design introduces **surface layering**.

## What surface layering means

Surface layering is the deliberate separation of:

- core meaning
- contextual projections
- operator-specific views

This prevents:

- overloading UIs
- leaking power
- accidental misuse
- agent confusion

## Designing context explicitly

Context must be declared, not inferred.

Examples:

- read-only vs operational
- exploratory vs transactional
- human vs agent
- local vs global

Each context justifies a different projection.

## Why UI should not be the primary layer

UI is:

- contextual
- partial
- opinionated

Treating UI as primary forces meaning to conform to a single perspective.

Surface layering frees the system.

## The payoff

With layered surfaces:

- complexity is contained
- automation is safer
- evolution is possible
- UX becomes coherent across channels

## Continue exploring

- → [DSO 09 — Designing for Agent Surfaces](urn:ssd:toc:v2:dso:09)
- → [Dual 01 — Human Surface + Machine Surface](urn:ssd:toc:v2:dual:01)
- → [Ops 02 — Contextual Policies](urn:ssd:toc:v2:ops:02)
- → [DSO 07](urn:ssd:toc:v2:dso:07)
