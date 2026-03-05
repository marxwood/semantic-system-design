---
id: urn:ssd:toc:v2:semantics:03
title: "Semantics 03 — States and Transitions"
cluster: semantics
type: WebPage
status: draft
keywords:
  - states
  - transitions
  - lifecycle
  - state machines
related:
  - urn:ssd:toc:v2:semantics:02
  - urn:ssd:toc:v2:semantics:04
  - urn:ssd:toc:v2:foundations:04
  - urn:ssd:toc:v2:jsonld:03
  - urn:ssd:toc:v2:graphnav:03
---

# Semantics 03 — States and Transitions

Most products behave as state machines, but are rarely designed as such.

Semantic System Design makes states and transitions explicit so behavior becomes predictable, governable, and automatable.

## Why state is unavoidable

The moment something can change, it has state.

If you do not model state explicitly:

- transitions become implicit
- edge cases multiply
- bugs become “unexpected behavior”
- agents become dangerous

State exists whether you name it or not.

## What a state is

A state is a **meaningful condition** of an entity at a point in time.

A state:

- has a name
- implies allowed actions
- forbids other actions
- may require preconditions

“Draft”, “Published”, “Archived” are not UI labels.  
They are semantic states.

## Transitions define behavior

A transition is a permitted change between states.

Transitions:

- encode business rules
- express irreversibility
- define responsibility
- create audit trails

Buttons trigger transitions.  
They do not define them.

## The design responsibility

Designers must:

- name states precisely
- visualize transitions clearly
- expose irreversible boundaries
- prevent illegal transitions

If a transition surprises users, the semantic model is wrong.

## Continue exploring

- → [Semantics 04 — Time, History, and Meaning](urn:ssd:toc:v2:semantics:04)
- → [JSON-LD 03 — Action Payloads and Result Semantics](urn:ssd:toc:v2:jsonld:03)
- → [GraphNav 03 — Traversing State Graphs](urn:ssd:toc:v2:graphnav:03)
- → [Semantics 02](urn:ssd:toc:v2:semantics:02)
