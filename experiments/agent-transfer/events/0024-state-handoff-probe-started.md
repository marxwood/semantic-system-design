# Event 0024 — State handoff probe started

- id: `0024-state-handoff-probe-started`
- type: `work.started`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `state-handoff-probe-001`
- observed_state_ref: `experiment-ssd-transfer@7cedd2ebd92b26644b1bf62e0cfcaddf6679aa2c`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/events/0022-state-handoff-probe-claimed.md`
  - `experiments/agent-transfer/events/0023-coordinator-admits-handoff-probe-claim.md`
  - `experiments/agent-transfer/state/experiment.yaml`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:25:20Z`

## Start validation

- assignment: exact runtime identity `chatgpt-coordinator`;
- dependencies: `runtime-hermes-001` and `runtime-second-evaluator-001` completed;
- required source state: matches `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`;
- authority: limited to experiment execution;
- claim ownership: current valid claim belongs to `chatgpt-coordinator`;
- safe stop: inactive.

## Transition

`state-handoff-probe-001`: `claimed` → `running`.
