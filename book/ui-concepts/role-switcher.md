---
id: urn:ssd:toc:v2:uiconcept:role-switcher
title: "UI Concept — Role Switcher"
type: UIConcept
status: draft
keywords:
  - role switcher
  - operator
  - audience
  - projections
related:
  - urn:ssd:toc:v2:dual:02
  - urn:ssd:toc:v2:dso:08
  - urn:ssd:toc:v2:graphnav:09
  - urn:ssd:toc:v2:entry:foundations
  - urn:ssd:toc:v2:readingpath:designer
  - urn:ssd:toc:v2:readingpath:engineer
  - urn:ssd:toc:v2:readingpath:product
  - urn:ssd:toc:v2:readingpath:exec
  - urn:ssd:toc:v2:readingpath:ai-agent
---

# UI Concept — Role Switcher

A semantic book is not read linearly.  
It is **operated**.

Role Switcher is the primary interaction mechanism that allows a reader to switch the **operator perspective** without losing semantic continuity.

## What it is

Role Switcher is a persistent control that changes:

- default entry points
- suggested next links
- explanation density
- risk framing
- examples and vocabulary

It does **not** change the underlying truth of the content.  
It changes the **projection**.

## Why it matters

Without Role Switcher:

- the reader gets one implicit viewpoint
- content becomes either too technical or too abstract
- navigation feels random
- agents and humans diverge in interpretation

Role Switcher keeps the graph coherent across audiences.

## Roles (initial set)

- Designer
- Engineer
- Product
- Executive
- AI Agent

These are not “personas”.  
They are **operator modes** that imply authority, intent, and risk tolerance.

## What changes when role switches

When a role changes, the UI re-ranks edges:

- “Next” links prioritize the path for that role
- “Related” links become role-sensitive
- callouts and warnings become role-appropriate
- glossary tooltips adapt in vocabulary

The graph remains the same.  
The traversal changes.

## Placement

The Role Switcher should be:

- visible globally (top-level header)
- available on every page
- persist across sessions

Switching role is a high-level navigation action.

## Continue exploring

- → [Role Switcher — Behavior Spec](urn:ssd:toc:v2:uiconcept:role-switcher-spec)
- → [Dual 02 — Designing for Operators](urn:ssd:toc:v2:dual:02)
- → [DSO 08 — Surface Layering](urn:ssd:toc:v2:dso:08)
