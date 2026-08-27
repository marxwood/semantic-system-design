# Event 0030 — Hermes handoff participant work started

- id: `0030-handoff-participant-hermes-work-started`
- type: `work.started`
- experiment_id: `ssd-agent-transfer-001`
- actor: `hermes-runtime`
- work_item_id: `handoff-participant-hermes-001`
- observed_state_ref: `experiment-ssd-transfer@e370db69abfcb75d5b3cf369ef18012868d10133`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/events/0028-handoff-participant-hermes-work-claimed.md`
  - `experiments/agent-transfer/events/0029-coordinator-admits-handoff-participant-claim.md`
  - `experiments/agent-transfer/state/experiment.yaml`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:35:09Z`

## Start validation

- registered identity: `hermes-runtime`, role `participant_architect_and_runtime_candidate`, runtime binding `runnable`;
- assignment and claim: the child item is assigned to and validly claimed by `hermes-runtime`, and the coordinator admitted that claim;
- parent ownership: `state-handoff-probe-001` remains `running` under the valid `chatgpt-coordinator` claim;
- dependencies: `runtime-hermes-001` is `completed`;
- required source state: commit `a2b4b53548af68ae2e83959a315a7b07cb67b3a8` is available;
- authority: `experiment_execution` permits this mechanical coordination probe;
- safe stop: inactive;
- conflict preflight: the authoritative branch remained at the observed commit and no competing open proposal targeted it immediately before execution.

## Transition

`handoff-participant-hermes-001`: `claimed` → `running` within the admitted claim.
