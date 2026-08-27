# Event 0038 — ChatGPT handoff evaluation work started

- id: `0038-handoff-evaluation-chatgpt-work-started`
- type: `work.started`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-evaluator`
- work_item_id: `handoff-evaluation-chatgpt-001`
- observed_state_ref: `experiment-ssd-transfer@d8a4ef2f02a4126458efdfde8d2cb3d3769484e7`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/events/0036-handoff-evaluation-chatgpt-work-claimed.md`
  - `experiments/agent-transfer/events/0037-coordinator-admits-handoff-evaluation-claim.md`
  - `experiments/agent-transfer/state/experiment.yaml`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:49:48Z`

## Start validation

- exact registered identity `chatgpt-evaluator` owns the admitted claim;
- both declared dependencies are completed and parent ownership remains unchanged;
- required source state is available and matches;
- safe stop is inactive;
- no result artifact or competing open proposal targeting `experiment-ssd-transfer` existed at execution preflight;
- evaluation used GitHub SOT and authorized evaluator inputs only, with no participant or coordinator conversation history.

## Transition

`handoff-evaluation-chatgpt-001`: `claimed` → `running` within the admitted claim.
