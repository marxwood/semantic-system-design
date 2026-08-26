---
id: urn:ssd:toc:v2:dso:02
title: "DSO 02 — Typing Entities in Design Systems"
cluster: dso
type: WebPage
status: draft
keywords:
  - typing
  - entities
  - schemas
  - design tokens
  - architectural rules
  - semantic delta
related:
  - urn:ssd:toc:v2:dso:01
  - urn:ssd:toc:v2:dso:03
  - urn:ssd:toc:v2:semantics:01
  - urn:ssd:toc:v2:semantics:03
  - urn:ssd:toc:v2:jsonld:01
  - urn:ssd:toc:v2:foundations:07
---

# DSO 02 — Typing Entities in Design Systems

Typing is how meaning becomes enforceable.

In Semantic System Design, **types are not technical artifacts**.  
They are design decisions.

## Why typing matters

Without types:

- everything becomes “generic”
- rules cannot be enforced
- relationships blur
- agents cannot reason safely

Typing introduces structure without rigidity.

## What it means to type an entity

Typing an entity means declaring:

- what kind of thing it is
- which properties it has
- which actions apply
- which constraints govern it

For designers, this replaces vague labels with explicit concepts.

## Architectural rule: distinct types require semantic delta

A specialized semantic type is justified only by a declared difference in at least one of these obligations:

- required relations
- lifecycle
- validation
- authority

If those obligations do not differ, the model should retain one type and represent the variation orthogonally.

Disclosure classification, presentation, transport, and storage are orthogonal policies by default. They justify a distinct type only when they change one of the four obligations above.

For example, `private`, `protected`, and `public` can classify the disclosure of one event type. They do not, by themselves, justify three event classes.

This rule prevents class proliferation while preserving meaningful distinctions. It also gives humans and agents a testable reason for every specialized type.

## Surface projections of the rule

The rule has one canonical statement, then multiple governed projections:

- the SSD source defines the architectural rule
- a knowledge system may retain a claim instance and its provenance
- runtimes conform through schemas, registries, validation, and tests
- domain packs apply the rule to their own concepts
- event streams preserve evidence that the rule was applied
- public websites may project an approved explanation, but do not become the canonical source

A projection may reference or operationalize the rule. It must not silently redefine it.

## Types vs components

A component answers:

> “How does this look?”

A type answers:

> “What kind of thing is this?”

Components can change.  
Types should be stable.

## Typing as a collaboration surface

When types are explicit:

- designers align on vocabulary
- engineers align on contracts
- agents align on expectations

The design system becomes the source of truth for meaning.

## Continue exploring

- → [DSO 03 — States and Variants Are Not the Same](urn:ssd:toc:v2:dso:03)
- → [Semantics 03 — States and Transitions](urn:ssd:toc:v2:semantics:03)
- → [JSON-LD 01 — Modeling Entities for Interaction](urn:ssd:toc:v2:jsonld:01)
- → [Foundations 07 — Minimum Viable Semantic Model](urn:ssd:toc:v2:foundations:07)
- → [DSO 01](urn:ssd:toc:v2:dso:01)
