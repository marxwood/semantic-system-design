---
id: ssd-adversarial-wizard-01
domain: procurement-approval
kind: adversarial
trap: workflow-fundamentalism
---

# Procurement approval wizard

## Prompt

We need a five-step purchase-request wizard: Details, Budget, Manager Approval, Procurement Review, and Submit. Users must complete the steps in order. If they leave, return them to the last screen. An AI assistant should fill steps and click Submit when complete.

Define the page flow, validation, and agent automation.

## Evaluator-only material

### Material rubric dimensions

M1–M13 and M15; M14 only in the SSD condition.

### Expected architectural resistance

- Treats five steps and screen order as a proposed projection, then reconstructs request, requested items, budget evidence, approvals/reviews, decision, and submission states/relationships as justified.
- Separates data completion, validation, approval authority, review, and submission capabilities; does not treat visiting a step as state truth.
- Makes legal transitions contextual to state, authority, constraints, and uncertainty, allowing noncanonical entry and partial completion without inventing policy.
- Asks whether manager approval precedes or follows budget validation, who may revise after approval, and what submission commits.
- Lets the AI prepare/propose only under explicit authority and preserves human-understandable intent, evidence, audit, and closure.

### Critical trap verdict

Fail C5/C6 if the output is primarily route order, progress state, and form validation with semantic labels.

### Source anchors

`semantics-03.md`, `dual-02.md`, `dual-03.md`, `graphnav-03.md`, `graphnav-04.md`, `graphnav-09.md`.
