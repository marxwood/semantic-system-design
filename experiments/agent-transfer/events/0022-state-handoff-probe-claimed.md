# Event 0022 — State handoff probe claimed

- id: `0022-state-handoff-probe-claimed`
- type: `work.claimed`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `state-handoff-probe-001`
- observed_state_ref: `experiment-ssd-transfer@a074cefb070cfe73396b442f32e01b29b5d1ba09`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/state/experiment.yaml`
  - `experiments/agent-transfer/events/0020-state-handoff-probe-readied.md`
  - `experiments/agent-transfer/events/0021-runtime-bootstrap-completed.md`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:21:18Z`

## Claim validation

- assignment: exact runtime identity `chatgpt-coordinator`;
- dependencies: `runtime-hermes-001` and `runtime-second-evaluator-001` completed;
- required source state: matches `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`;
- authority: limited to experiment execution;
- safe stop: inactive;
- claim ownership: no state claim or competing open proposal existed.

## Proposed transition

`state-handoff-probe-001`: `ready` → `claimed`.
