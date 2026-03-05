---
id: urn:ssd:toc:v2:dual:03
title: "Dual 03 — Intent Capture"
cluster: dual
type: WebPage
status: draft
keywords:
  - intent
  - intent capture
  - decision modeling
  - responsibility
related:
  - urn:ssd:toc:v2:dual:02
  - urn:ssd:toc:v2:dual:04
  - urn:ssd:toc:v2:semantics:07
  - urn:ssd:toc:v2:graphnav:04
  - urn:ssd:toc:v2:ops:05
---

# Dual 03 — Intent Capture

Actions without declared intent are dangerous.

Semantic System Design requires systems to **capture intent explicitly**, not infer it from clicks or API calls.

## What intent capture means

Intent capture is the act of declaring:

- what outcome is desired
- why this action is being taken
- under which constraints
- with what acceptable risk

This declaration becomes part of the semantic record.

## Why intent matters

Without intent:

- errors look identical to misuse
- automation cannot explain itself
- audits lack context
- recovery is guesswork

Intent turns action into accountable decision-making.

## Designing intent capture for humans

Human intent capture may include:

- structured choices ("approve", "publish", "override")
- justification fields
- previews of consequences
- explicit acknowledgment of risk

The goal is clarity, not friction.

## Designing intent capture for agents

Agents must provide:

- declared objectives
- confidence levels
- constraint awareness
- fallback conditions

If an agent cannot explain its intent, it should not act.

## Continue exploring

- → [Dual 04 — Confirmation Gates](urn:ssd:toc:v2:dual:04)
- → [Semantics 07 — Capabilities as Actions](urn:ssd:toc:v2:semantics:07)
- → [GraphNav 04 — Decision Points](urn:ssd:toc:v2:graphnav:04)
- → [Dual 02](urn:ssd:toc:v2:dual:02)
