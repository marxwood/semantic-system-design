---
id: urn:ssd:toc:v2:foundations:06
title: "Foundations 06 — Designing for Multiple Operators"
cluster: foundations
type: WebPage
status: draft
keywords:
  - operators
  - humans
  - agents
  - automation
  - multi-operator systems
related:
  - urn:ssd:toc:v2:foundations:05
  - urn:ssd:toc:v2:foundations:07
  - urn:ssd:toc:v2:dual:02
  - urn:ssd:toc:v2:ops:01
  - urn:ssd:toc:v2:jsonld:09
---

# Foundations 06 — Designing for Multiple Operators

Every serious product today has more than one operator.

Some operators are human.  
Some are automated.  
Some are hybrid.

Design that assumes a single human operator is already obsolete.

## Who is an operator

An operator is anything that can:

- read the system
- decide to act
- execute a capability
- observe the result

This includes:

- end users
- administrators
- scripts
- workflows
- agents

Design does not get to choose this. Reality already did.

## Why this breaks traditional UX assumptions

Classic UX assumes:

- intent is local and immediate
- feedback is visual
- errors are handled interactively

Multi-operator systems violate all three.

An agent may:

- act asynchronously
- operate without UI
- require explicit contracts instead of visual hints

If meaning is implicit, operators will diverge.

## The design responsibility

Designers must ensure that:

- capabilities are equally legible to humans and machines
- constraints are not hidden in UI conventions
- irreversible actions are explicitly marked
- permission models are inspectable
- outcomes are traceable

This is not “designing for machines.”  
It is designing **honestly**.

## A simple rule

If an agent can misuse your product more easily than a human can understand it, the design is incomplete.

## Continue exploring

- → [Foundations 07 — The Minimum Viable Semantic Model](urn:ssd:toc:v2:foundations:07)
- → [Dual 02 — Designing for Operators](urn:ssd:toc:v2:dual:02)
- → [Ops 01 — Governance: Who Owns Meaning](urn:ssd:toc:v2:ops:01)
- → [Foundations 05](urn:ssd:toc:v2:foundations:05)
