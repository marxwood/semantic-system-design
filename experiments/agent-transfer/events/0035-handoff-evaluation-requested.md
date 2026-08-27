# Event 0035 — Independent handoff evaluation requested

- id: `0035-handoff-evaluation-requested`
- type: `evaluation.requested`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `handoff-evaluation-chatgpt-001`
- observed_state_ref: `experiment-ssd-transfer@e370db69abfcb75d5b3cf369ef18012868d10133`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/events/0033-coordinator-accepts-handoff-participant-run.md`
  - `experiments/agent-transfer/events/0034-handoff-evaluation-work-created.md`
  - `experiments/agent-transfer/cases/state-handoff-probe-001-evaluation.md`
  - `experiments/agent-transfer/runs/state-handoff-probe-001/hermes-participant-token.md`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:38:12Z`

## Request

Activate exact runtime identity `chatgpt-evaluator` in a clean context from current SOT state.

The evaluator must independently validate the mechanical handoff, keep SSD transfer-quality dimensions out of scope, write its result and completion events through GitHub, and return control to `chatgpt-coordinator`.
