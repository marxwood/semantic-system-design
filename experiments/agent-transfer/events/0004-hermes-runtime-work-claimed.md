# Event 0004 — Hermes runtime work claimed

- id: `0004-hermes-runtime-work-claimed`
- type: `work.claimed`
- experiment_id: `ssd-agent-transfer-001`
- actor: `hermes-runtime`
- work_item_id: `runtime-hermes-001`
- observed_state_ref: `experiment-ssd-transfer@1433842c49da34df6d024c8d9cecf8272d3a0a00`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/state/experiment.yaml`
- authority: `experiment_runtime_binding`
- timestamp: `2026-08-27T13:56:07Z`

## Claim validation

- registered identity: `hermes-runtime`, role `participant_architect_and_runtime_candidate`;
- assignment: `runtime-hermes-001` is assigned to `hermes-runtime` and was `ready` at the observed state;
- dependencies: `runtime-chatgpt-coordinator-001` is `completed`;
- required source state: commit `a2b4b53548af68ae2e83959a315a7b07cb67b3a8` is available and is an ancestor of the observed experiment branch state;
- authority: `experiment_runtime_binding` permits the runtime-binding work and does not alter authored SSD semantics or the human-authority boundary;
- safe stop: inactive;
- claim ownership: no prior claim event, state claim, or open PR targeting `experiment-ssd-transfer` existed when the claim was proposed.

## Proposed state transition

`runtime-hermes-001`: `ready` → `claimed`, owned by `hermes-runtime` against the exact observed state above.

This event and transition are proposed through a GitHub PR targeting `experiment-ssd-transfer`. If the authoritative branch advances with a newer or conflicting claim before admission, this proposal must not overwrite it and must be revalidated from the new SOT state.
