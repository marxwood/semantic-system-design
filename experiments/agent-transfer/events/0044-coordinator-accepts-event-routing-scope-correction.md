# Event 0044 — Coordinator accepts event-routing scope correction

- id: `0044-coordinator-accepts-event-routing-scope-correction`
- type: `decision.recorded`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `runtime-chatgpt-event-trigger-002`
- observed_state_ref: `experiment-ssd-transfer@1f729d718e5194bcce24cc5755d12cc27fdf5803`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `https://github.com/marxwood/semantic-system-design/pull/19`
  - `experiments/agent-transfer/ACTIVATION-CONTRACT.md`
  - `experiments/agent-transfer/evidence/event-routing-scope-correction.md`
  - `experiments/agent-transfer/state/runtime-bindings.yaml`
  - `experiments/agent-transfer/state/experiment.yaml`
- authority: `experiment_runtime_binding`
- timestamp: `2026-08-27T15:23:26Z`

## Coordinator decision

- current state: experiment active in `first_ssd_transfer_pair`; coordinator, Hermes, and evaluator runtimes runnable; safe stop inactive;
- evidence considered: freshly read authoritative SOT and contracts, PR #19 metadata and complete patch, current runtime-binding evidence, source marker, ownership, and competing proposals;
- decision: accept the event-routing boundary correction after aligning current SOT runtime state and removing the stale next-runtime binding target;
- reason: the proposal narrows delivery scope without changing experiment authority or authored SSD semantics, preserves SOT-based authorization, and prevents unrelated or coordinator-produced repository activity from recursively invoking experiment work;
- retained boundary: delivery filtering decides whether a runtime wakes; the activation predicate and fresh SOT still decide whether it may act;
- next owner: `chatgpt-coordinator`;
- next work: continue Stage C by selecting an ordinary case and creating an isolated baseline/SSD-condition pair;
- blocked conditions: none;
- human authority required: false.

This decision changes experiment harness routing only. It makes no SSD transfer-quality claim and changes no authored SSD semantics.
