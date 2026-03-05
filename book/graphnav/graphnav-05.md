---
id: urn:ssd:toc:v2:graphnav:05
title: "GraphNav 05 — Orientation Without Breadcrumbs"
cluster: graphnav
type: WebPage
status: draft
keywords:
  - orientation
  - breadcrumbs
  - context
  - wayfinding
related:
  - urn:ssd:toc:v2:graphnav:04
  - urn:ssd:toc:v2:graphnav:06
  - urn:ssd:toc:v2:foundations:05
  - urn:ssd:toc:v2:dso:07
  - urn:ssd:toc:v2:dual:01
---

# GraphNav 05 — Orientation Without Breadcrumbs

Breadcrumbs assume a path.  
Graphs do not.

In graph navigation, orientation comes from **context**, not from retracing steps.

## Why breadcrumbs break in graphs

Breadcrumbs fail when:

- there are multiple valid paths
- users arrive from different entry points
- state affects availability
- traversal is non-linear

They imply a single "correct" hierarchy that does not exist.

## Contextual orientation

Graph orientation answers:

- What is this about?
- How is it connected?
- What state am I in?
- What can I do next?

This information should be visible **at every node**.

## Designing contextual anchors

Designers should surface:

- the primary entity
- relevant relationships
- current state
- active constraints

These anchors replace the need for breadcrumb trails.

## Orientation for agents

Agents do not need breadcrumbs.  
They need:

- node identity
- edge semantics
- constraints
- objectives

Contextual orientation serves both.

## Continue exploring

- → [GraphNav 06 — Return Paths and Closure](urn:ssd:toc:v2:graphnav:06)
- → [Foundations 05 — The Product Surface Is a Projection](urn:ssd:toc:v2:foundations:05)
- → [DSO 07 — Components as Typed Projections](urn:ssd:toc:v2:dso:07)
- → [GraphNav 04](urn:ssd:toc:v2:graphnav:04)
