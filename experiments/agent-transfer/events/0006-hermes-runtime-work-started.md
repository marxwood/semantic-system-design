# Event 0006 — Hermes runtime work started

- id: `0006-hermes-runtime-work-started`
- type: `work.started`
- experiment_id: `ssd-agent-transfer-001`
- actor: `hermes-runtime`
- work_item_id: `runtime-hermes-001`
- observed_state_ref: `experiment-ssd-transfer@17184465c0d2ce72245506d2767a37dd313787ee`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/events/0004-hermes-runtime-work-claimed.md`
  - `experiments/agent-transfer/events/0005-coordinator-admits-hermes-runtime-claim.md`
- authority: `experiment_runtime_binding`
- timestamp: `2026-08-27T14:00:25Z`

## Start validation

The authoritative branch contains the admitted `hermes-runtime` claim, the experiment safe stop is inactive, the required source state remains available, and no newer or conflicting claim owns the work. Runtime-binding execution therefore proceeds within the admitted claim and authority scope.
