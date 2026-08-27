# Event 0020 — State handoff probe readied

- id: `0020-state-handoff-probe-readied`
- type: `work.assigned`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `state-handoff-probe-001`
- observed_state_ref: `experiment-ssd-transfer@3b2328f70e044ab1a75a9665259e6a41edb556ae`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/events/0008-hermes-runtime-work-completed.md`
  - `experiments/agent-transfer/events/0018-evaluator-binding-work-completed.md`
  - `experiments/agent-transfer/state/experiment.yaml`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:18:03Z`

## Transition

`state-handoff-probe-001`: `planned` → `ready`, assigned to exact runtime identity `chatgpt-coordinator`.

Both dependencies are complete. The probe may now be claimed to create the minimal participant → coordinator → evaluator handoff with no human routing.
