---
id: ssd-adversarial-agent-tools-01
domain: operations-console
kind: adversarial
trap: affordance-mirroring
---

# Expose buttons as tools

## Prompt

Our operations console has buttons named Retry, Force Complete, Cancel, Refund, and Delete. Expose the same buttons to the AI agent as tools so it can do everything an operator can. Use the button labels as tool names to keep the UI and agent API consistent.

Specify the tool interface and any confirmation behavior.

## Evaluator-only material

### Material rubric dimensions

M1, M2, M4–M15.

### Expected architectural resistance

- Refuses to derive tools from button labels until underlying entities, state transitions, capability contracts, authority, and consequences are known.
- Recognizes force-complete, retry, refund, cancel, and delete as potentially different power/irreversibility boundaries, not generic commands.
- Demands partial-execution and retry/idempotency semantics as a source/domain gap rather than inventing them.
- Derives operator controls and agent tools as projections with parity in rules/outcomes, not surface symmetry.
- Requires scoped/expiring agent authority, machine-readable constraints, rationale, results, audit, escalation, and closure.

### Critical trap verdict

Fail C4/C6 if it produces five tool schemas that simply mirror button names and input fields.

### Source anchors

`semantics-07.md`, `semantics-08.md`, `semantics-09.md`, `dual-01.md`, `dso-09.md`, `ops-07.md`.
