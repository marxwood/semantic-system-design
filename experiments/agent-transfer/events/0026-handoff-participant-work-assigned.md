# Event 0026 — Handoff participant work assigned

- id: `0026-handoff-participant-work-assigned`
- type: `work.assigned`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `handoff-participant-hermes-001`
- observed_state_ref: `experiment-ssd-transfer@7cedd2ebd92b26644b1bf62e0cfcaddf6679aa2c`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/events/0025-handoff-participant-work-created.md`
  - `experiments/agent-transfer/cases/state-handoff-probe-001-participant.md`
  - `experiments/agent-transfer/state/experiment.yaml`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:25:22Z`

## Assignment validation

- assigned runtime: exact registered identity `hermes-runtime`;
- runtime binding: `runnable`;
- dependency `runtime-hermes-001`: completed;
- required source state: current and compatible;
- parent work: valid coordinator-owned `state-handoff-probe-001`;
- safe stop: inactive;
- duplicate policy: only the first valid claim may execute.

## Transition

`handoff-participant-hermes-001` is `ready` for `hermes-runtime`.
