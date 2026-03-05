---
id: urn:ssd:toc:v2:ops:03
title: "Ops 03 — Guardrails"
cluster: ops
type: WebPage
status: draft
keywords:
  - guardrails
  - safety
  - constraints
  - enforcement
related:
  - urn:ssd:toc:v2:ops:02
  - urn:ssd:toc:v2:ops:04
  - urn:ssd:toc:v2:semantics:06
  - urn:ssd:toc:v2:dual:04
  - urn:ssd:toc:v2:dual:07
---

# Ops 03 — Guardrails

Guardrails are not restrictions.  
They are **conditions for safe motion**.

Semantic systems without guardrails accelerate toward failure.

## What a guardrail is

A guardrail is a non-negotiable rule that:

- blocks unsafe actions
- forces escalation
- requires additional certainty
- preserves system integrity

Guardrails sit _before_ damage, not after.

## Designing guardrails deliberately

Effective guardrails:

- are explicit and named
- trigger early
- explain why they activate
- offer safe alternatives

Silent guardrails feel like bugs.  
Transparent guardrails feel like competence.

## Guardrails vs policies

Policies decide _what should happen_.  
Guardrails decide _what must not happen_.

Both are required.

## Guardrails for agents

Agents must:

- detect guardrail conditions
- halt or escalate deterministically
- log activation context
- avoid repeated retries

Retrying past a guardrail is a design defect.

## Continue exploring

- → [Ops 04 — Observability](urn:ssd:toc:v2:ops:04)
- → [Dual 04 — Confirmation Gates](urn:ssd:toc:v2:dual:04)
- → [Dual 07 — Failure and Escalation](urn:ssd:toc:v2:dual:07)
- → [Ops 02](urn:ssd:toc:v2:ops:02)
