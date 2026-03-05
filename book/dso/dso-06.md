---
id: urn:ssd:toc:v2:dso:06
title: "DSO 06 — Drift: When Components Mean Different Things"
cluster: dso
type: WebPage
status: draft
keywords:
  - drift
  - semantic consistency
  - scaling
  - governance
related:
  - urn:ssd:toc:v2:dso:05
  - urn:ssd:toc:v2:dso:07
  - urn:ssd:toc:v2:foundations:03
  - urn:ssd:toc:v2:ops:01
  - urn:ssd:toc:v2:graphnav:02
---

# DSO 06 — Drift: When Components Mean Different Things

Semantic drift is the silent failure mode of large design systems.

It happens when components remain visually consistent while their meaning diverges.

## How drift starts

Drift usually begins innocently:

- small exceptions
- urgent overrides
- undocumented assumptions
- “just this once” logic

Over time, meaning fragments.

## Why drift is hard to detect

Drift:

- does not break builds
- does not fail tests
- looks correct visually
- only appears in edge cases

By the time users notice, the system is already incoherent.

## Design systems as drift detectors

When meaning is explicit:

- differences are visible
- changes are reviewable
- violations are catchable
- governance is possible

Semantic systems surface drift early.

## The design mandate

Designers must:

- insist on explicit meaning
- reject silent exceptions
- review semantic changes
- treat drift as a defect

Visual consistency without semantic consistency is technical debt.

## Continue exploring

- → [DSO 07 — Components as Typed Projections](urn:ssd:toc:v2:dso:07)
- → [Foundations 03 — Explicit Meaning Beats Visual Consistency](urn:ssd:toc:v2:foundations:03)
- → [Ops 01 — Governance: Who Owns Meaning](urn:ssd:toc:v2:ops:01)
- → [DSO 05](urn:ssd:toc:v2:dso:05)
