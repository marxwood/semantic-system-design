# Event 0007 — Hermes runtime runnable

- id: `0007-hermes-runtime-runnable`
- type: `runtime.runnable`
- experiment_id: `ssd-agent-transfer-001`
- actor: `hermes-runtime`
- work_item_id: `runtime-hermes-001`
- observed_state_ref: `experiment-ssd-transfer@17184465c0d2ce72245506d2767a37dd313787ee`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/evidence/runtime-hermes-001-binding.md`
  - `https://github.com/marxwood/semantic-system-design/pull/6`
  - GitHub delivery `e156873c-a21e-11f1-8622-9c0aec058ed7`
- authority: `experiment_runtime_binding`
- timestamp: `2026-08-27T14:00:25Z`

## Result

The Hermes gateway is event-immediate for authoritative repository pushes and can observe, reconstruct current SOT, identify and claim assigned eligible work, invoke a fresh agent context, and write evidence through a PR. Payload fields remain untrusted transport data and cannot override repository authority.

The runtime is bounded by current work assignment, admitted claim state, source-state compatibility, safe-stop state, experiment authority, and PR-only write policy.
