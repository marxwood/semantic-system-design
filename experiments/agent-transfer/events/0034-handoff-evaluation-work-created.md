# Event 0034 — Handoff evaluation work created

- id: `0034-handoff-evaluation-work-created`
- type: `work.created`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `handoff-evaluation-chatgpt-001`
- observed_state_ref: `experiment-ssd-transfer@e370db69abfcb75d5b3cf369ef18012868d10133`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/events/0033-coordinator-accepts-handoff-participant-run.md`
  - `experiments/agent-transfer/cases/state-handoff-probe-001-evaluation.md`
  - `experiments/agent-transfer/state/experiment.yaml`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:38:11Z`

## Work definition

Created an evaluator-only Stage B work item for exact runtime identity `chatgpt-evaluator`.

The item evaluates repository-state handoff integrity only, requires clean-context reconstruction, and cannot produce SSD transfer-quality conclusions.
