# Event 0029 — Coordinator admits Hermes handoff participant claim

- id: `0029-coordinator-admits-handoff-participant-claim`
- type: `decision.recorded`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `handoff-participant-hermes-001`
- observed_state_ref: `experiment-ssd-transfer@64f5477b850b744420962d92796576b12d1499b4`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `https://github.com/marxwood/semantic-system-design/pull/13`
  - `experiments/agent-transfer/events/0028-handoff-participant-hermes-work-claimed.md`
  - `experiments/agent-transfer/state/experiment.yaml`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:32:10Z`

## Coordinator decision

- current state: experiment active in `handoff_probe`; parent probe running; participant item ready; safe stop inactive;
- evidence considered: authoritative SOT and contracts, PR #13 metadata and patch, claim event 0028, current source marker, assignment, dependencies, parent ownership, and competing open proposals;
- decision: accept `handoff-participant-hermes-001` transition `ready` → `claimed`;
- reason: claimant identity matches `hermes-runtime`, dependency `runtime-hermes-001` is completed, required source state matches, parent ownership remains valid, and no conflicting claim exists;
- next owner: `hermes-runtime`;
- next work: start and complete the deterministic participant handoff, writing the required token plus `run.completed` and `work.completed` evidence;
- blocked conditions: none;
- human authority required: false.

The GitHub delivery was used only as a wake-up signal. This decision follows reconstruction from the current authoritative SOT.
