---
id: urn:ssd:toc:v2:dual:04
title: "Dual 04 — Confirmation Gates"
cluster: dual
type: WebPage
status: draft
keywords:
  - confirmation
  - irreversible actions
  - safety
  - gates
related:
  - urn:ssd:toc:v2:dual:03
  - urn:ssd:toc:v2:dual:05
  - urn:ssd:toc:v2:semantics:08
  - urn:ssd:toc:v2:ops:03
  - urn:ssd:toc:v2:foundations:04
---

# Dual 04 — Confirmation Gates

Confirmation dialogs are often cosmetic.  
Confirmation gates are **semantic safeguards**.

## What a confirmation gate is

A confirmation gate is a required semantic checkpoint before an action executes.

It verifies:

- declared intent
- authority
- awareness of consequences
- absence of blocking uncertainty

Without all four, the action must not proceed.

## When gates are required

Confirmation gates are mandatory for:

- irreversible actions
- privilege escalation
- actions affecting others
- actions under uncertainty

Skipping gates creates systemic risk.

## Designing gates for humans

Effective human gates:

- restate the action in plain language
- summarize consequences
- highlight irreversibility
- require explicit acknowledgment

"Are you sure?" is insufficient.

## Designing gates for agents

Agent gates enforce:

- constraint validation
- confidence thresholds
- human escalation rules
- logging of rationale

Agents do not "confirm."  
They validate.

## Continue exploring

- → [Dual 05 — Explainability UI](urn:ssd:toc:v2:dual:05)
- → [Semantics 08 — Side Effects and Irreversibility](urn:ssd:toc:v2:semantics:08)
- → [Ops 03 — Guardrails](urn:ssd:toc:v2:ops:03)
- → [Dual 03](urn:ssd:toc:v2:dual:03)
