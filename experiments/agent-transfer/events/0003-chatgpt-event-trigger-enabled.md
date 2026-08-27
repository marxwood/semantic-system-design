# Event 0003 — ChatGPT coordinator event trigger enabled

- id: `0003-chatgpt-event-trigger-enabled`
- type: `runtime.runnable`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `runtime-chatgpt-event-trigger-002`
- observed_state_ref: `experiment-ssd-transfer@825d26026e017b8f8789a5bf148f16130347bbd7`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `https://github.com/marxwood/semantic-system-design/pull/5`
  - GitHub delivery `ab2f7b10-a213-11f1-9175-1912bcfb104e`
- authority: `experiment_runtime_binding`
- timestamp: `2026-08-27T12:34:54Z`

## Runtime binding

- agent_id: `chatgpt-coordinator`
- runtime: ChatGPT Work Monitoring
- activation: GitHub pull request activity
- repository: `marxwood/semantic-system-design`
- authoritative experiment branch: `experiment-ssd-transfer`
- fallback: hourly condition-watch polling

## Evidence

The Work monitoring task was created and enabled with these behaviors:

- triggers on PR opened/ready/closed/merged, commits, comments, and reviews in `marxwood/semantic-system-design`;
- verifies the PR currently targets `experiment-ssd-transfer`;
- re-reads the authoritative SOT and coordinator contracts on every activation;
- validates authority, assignment, dependencies, claims, and safe-stop state;
- advances only valid transitions through GitHub;
- records blockers for invalid or conflicting proposals;
- routes to a human only when `experiment.yaml` explicitly requires human authority.

PR #5 opening autonomously activated a fresh coordinator run. That run re-read the SOT from `experiment-ssd-transfer`, validated the proposed runtime-binding transition, normalized this event to the generic envelope in `EVENTS.md`, and wrote the correction back to the PR branch. This supplies direct evidence for observe, reconstruct, decide, and write-back capability.

## Coordinator validation

- current state: experiment active at `runtime_bootstrap`; coordinator binding `degraded`; safe stop inactive;
- assignment: the proposed binding-upgrade record belongs to `chatgpt-coordinator`;
- dependencies: `runtime-chatgpt-coordinator-001` is completed;
- required source state: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8` matches the authoritative SOT;
- authority: `experiment_runtime_binding` is within coordinator authority and changes no authored SSD semantics or human-authority boundary;
- claim ownership: no competing claim, review, or coordinator decision exists for PR #5; this item records an already-established runtime binding and its first successful activation rather than claiming participant work;
- decision: accept the proposed SOT transition after event-envelope normalization;
- next owner: `hermes-runtime` for `runtime-hermes-001`, then the coordinator for independent evaluator binding;
- blocked conditions: none;
- human authority required: false.

## Architectural meaning

The coordinator no longer depends on the hourly poller as its primary wake-up mechanism. GitHub PR activity can now autonomously create a fresh coordinator Work run. The event is only a wake-up signal; current SOT state remains authoritative.

The hourly watcher remains enabled only as a resilience fallback in case an event delivery is missed.
