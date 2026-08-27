# Event 0014 — ChatGPT evaluator binding started

- id: `0014-chatgpt-evaluator-binding-started`
- type: `runtime.binding_started`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `runtime-second-evaluator-001`
- observed_state_ref: `experiment-ssd-transfer@00692559eb1987beb4dc5f37c1952bfc1546eef7`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/state/experiment.yaml`
  - `experiments/agent-transfer/events/0013-chatgpt-evaluator-registered.md`
- authority: `experiment_runtime_binding`
- timestamp: `2026-08-27T14:11:32Z`

## Binding contract

A coordinator invocation creates a new isolated evaluator instance from SOT pointers only. The instance must re-read current state, verify an evaluation assignment for `chatgpt-evaluator`, verify dependencies/source/authority/safe-stop/claim ownership, load only the permitted evaluation inputs, and write its result through GitHub.

Duplicate or stale wake-ups are no-ops unless the current SOT exposes eligible evaluator work. A conflicting claim blocks execution and must be recorded.
