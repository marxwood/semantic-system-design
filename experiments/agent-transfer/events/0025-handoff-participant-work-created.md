# Event 0025 — Handoff participant work created

- id: `0025-handoff-participant-work-created`
- type: `work.created`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `handoff-participant-hermes-001`
- observed_state_ref: `experiment-ssd-transfer@7cedd2ebd92b26644b1bf62e0cfcaddf6679aa2c`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/state/experiment.yaml`
  - `experiments/agent-transfer/cases/state-handoff-probe-001-participant.md`
  - `experiments/agent-transfer/events/0024-state-handoff-probe-started.md`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:25:21Z`

## Work definition

Created minimal participant work under `state-handoff-probe-001` for a deterministic repository-state handoff token.

The item changes no authored SSD semantics, exposes no evaluator-only material, and requires Hermes to reconstruct authority from the SOT before claiming or executing.
