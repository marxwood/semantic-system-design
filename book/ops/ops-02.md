---
id: urn:ssd:toc:v2:ops:02
title: "Ops 02 — Contextual Policies"
cluster: ops
type: WebPage
status: draft
keywords:
  - policies
  - context
  - enforcement
  - adaptive rules
related:
  - urn:ssd:toc:v2:ops:01
  - urn:ssd:toc:v2:ops:03
  - urn:ssd:toc:v2:dual:02
  - urn:ssd:toc:v2:graphnav:08
  - urn:ssd:toc:v2:semantics:06
---

# Ops 02 — Contextual Policies

Rules that ignore context become brittle.  
Rules that adapt without transparency become dangerous.

Contextual policies balance both.

## What a contextual policy is

A contextual policy is a rule whose application depends on:

- actor (who)
- entity (what)
- state (when)
- confidence (how sure)
- environment (where)

Policies are semantic, not infrastructural.

## Why policies must be explicit

Implicit policies:

- surprise operators
- confuse agents
- break audits
- enable abuse

Explicit policies:

- can be reviewed
- can be reasoned about
- can be simulated
- can be enforced consistently

## Designing policy surfaces

Designers should ensure:

- policies are visible at decision points
- consequences of violation are clear
- overrides are explicit
- uncertainty blocks enforcement when needed

Policy design is interaction design.

## For agents

Agents require:

- machine-readable policies
- deterministic evaluation
- clear failure modes
- escalation rules

Policy opacity leads to unsafe autonomy.

## Continue exploring

- → [Ops 03 — Guardrails](urn:ssd:toc:v2:ops:03)
- → [Dual 02 — Designing for Operators](urn:ssd:toc:v2:dual:02)
- → [Semantics 06 — Boundaries of Meaning](urn:ssd:toc:v2:semantics:06)
- → [Ops 01](urn:ssd:toc:v2:ops:01)
