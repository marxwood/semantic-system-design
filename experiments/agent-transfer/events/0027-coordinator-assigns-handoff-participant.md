# Event 0027 — Coordinator assigns handoff participant

- id: `0027-coordinator-assigns-handoff-participant`
- type: `decision.recorded`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `state-handoff-probe-001`
- observed_state_ref: `experiment-ssd-transfer@7cedd2ebd92b26644b1bf62e0cfcaddf6679aa2c`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/state/experiment.yaml`
  - `experiments/agent-transfer/cases/state-handoff-probe-001-participant.md`
  - `experiments/agent-transfer/events/0024-state-handoff-probe-started.md`
  - `experiments/agent-transfer/events/0025-handoff-participant-work-created.md`
  - `experiments/agent-transfer/events/0026-handoff-participant-work-assigned.md`
- authority: `experiment_execution`
- timestamp: `2026-08-27T14:25:23Z`

## Coordinator decision

- current state: experiment active in `handoff_probe`; coordinator owns the valid parent claim; safe stop inactive;
- evidence considered: authoritative SOT/contracts, completed runtime dependencies, current source marker, claim ownership, and participant case specification;
- decision: start the parent probe and create `handoff-participant-hermes-001` as ready for `hermes-runtime`;
- reason: this is the minimal authorized transition that tests participant → coordinator handoff through repository state;
- next owner: `hermes-runtime`;
- next work: claim and complete `handoff-participant-hermes-001` from freshly read SOT state;
- blocked conditions: none;
- human authority required: false.
