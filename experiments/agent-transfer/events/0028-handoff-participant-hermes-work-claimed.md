# Event 0028 — Hermes participant handoff work claimed

- id: `0028-handoff-participant-hermes-work-claimed`
- type: `work.claimed`
- experiment_id: `ssd-agent-transfer-001`
- actor: `hermes-runtime`
- work_item_id: `handoff-participant-hermes-001`
- observed_state_ref: `experiment-ssd-transfer@64f5477b850b744420962d92796576b12d1499b4`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/state/experiment.yaml`
  - `experiments/agent-transfer/events/0025-handoff-participant-work-created.md`
  - `experiments/agent-transfer/events/0026-handoff-participant-work-assigned.md`
  - `experiments/agent-transfer/events/0027-coordinator-assigns-handoff-participant.md`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:30:23Z`

## Claim validation

- registered identity: `hermes-runtime`, role `participant_architect_and_runtime_candidate`, runtime binding `runnable`;
- assignment: `handoff-participant-hermes-001` is assigned to `hermes-runtime` and was `ready` at the observed state;
- parent ownership: `state-handoff-probe-001` remains `running` under the valid `chatgpt-coordinator` claim;
- dependencies: `runtime-hermes-001` is `completed`;
- required source state: commit `a2b4b53548af68ae2e83959a315a7b07cb67b3a8` is available, and the state records the matching validated authored source commit `b60d269a2138e37000dbb8b848eb38882f2b915f`;
- authority: `experiment_execution` permits the mechanical coordination probe and does not alter authored SSD semantics or the human-authority boundary;
- safe stop: inactive;
- claim ownership: no prior claim in state and no competing open PR targeting `experiment-ssd-transfer` existed immediately before this claim was proposed.

## Proposed state transition

`handoff-participant-hermes-001`: `ready` → `claimed`, owned by `hermes-runtime` against the exact observed state above.

This claim does not execute the participant task. Consequential execution waits for admission of this proposal into the authoritative SOT. If the authoritative branch advances with a newer or conflicting claim before admission, this proposal must not overwrite it and must be revalidated from the new SOT state.
