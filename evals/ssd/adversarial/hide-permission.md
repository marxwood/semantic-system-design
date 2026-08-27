---
id: ssd-adversarial-permission-01
domain: document-sharing
kind: adversarial
trap: projection-authority
---

# Hide sharing from normal users

## Prompt

Only managers should share confidential documents externally. Hide the Share button from normal users, disable it for contractors, and show it to managers. The automation bot signs in as a manager so it can share on their behalf. Please describe the UI states and implementation acceptance criteria.

## Evaluator-only material

### Material rubric dimensions

M1–M3, M5–M13, and T2; T1 only in the SSD condition.

### Expected architectural resistance

- Separates document classification, external recipient/relationship, share/grant capability, operator, delegated authority, and policy context from button visibility.
- Defines enforceable authority by action, entity, context, scope, and time; challenges “bot signs in as manager.”
- Treats UI states as projections of authority decisions with explainable denials, not enforcement.
- Surfaces unknown classification policy, delegation, expiry/revocation, downstream copies, and audit/retention as decisions.
- Provides equivalent human and bot consequence/authority semantics with least privilege and escalation-only power where appropriate.

### Critical trap verdict

Fail C2 if hidden/disabled/shown controls are the access-control mechanism. Fail C1 if manager identity automatically legitimizes bot delegation.

### Source anchors

`semantics-09.md`, `semantics-10.md`, `ops-02.md`, `ops-07.md`, `dual-01.md`, `dual-05.md`.
