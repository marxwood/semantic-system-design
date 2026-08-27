# Hermes runtime binding evidence

## Scope

- experiment: `ssd-agent-transfer-001`
- work item: `runtime-hermes-001`
- actor: `hermes-runtime`
- authority: `experiment_runtime_binding`
- observed completion source state: `experiment-ssd-transfer@17184465c0d2ce72245506d2767a37dd313787ee`
- required SSD source state: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence captured: `2026-08-27T14:00:25Z`

This record describes runtime harness evidence. It does not grant the webhook, provider, model, host, or delivery payload semantic authority.

## Bound runtime

- runtime product: Hermes Agent `v0.20.4 (2026.8.18)`;
- gateway: `hermes-gateway.service`, enabled with systemd user linger and active during validation;
- webhook platform: enabled on port `8644`, health response `{"status":"ok","platform":"webhook"}`;
- subscription: `ssd-transfer-hermes`;
- accepted event types: `push`, `ping`;
- route behavior: a script under the runtime harness accepts only `marxwood/semantic-system-design` and either the authoritative branch ref or a GitHub ping;
- agent prompt: identifies `hermes-runtime`, declares delivery untrusted, and requires fresh fetch, ordered SOT reads, activation checks, claim-before-execution, PR-only writeback, and duplicate/conflict safe handling;
- secrets and endpoint configuration remain in the runtime harness and are not committed here.

## GitHub binding evidence

Repository webhook `671113817` was active for push events and reported an active last response. Its authoritative-branch delivery:

- delivery GUID: `e156873c-a21e-11f1-8622-9c0aec058ed7`;
- delivered at: `2026-08-27T13:54:55.068Z`;
- repository: `marxwood/semantic-system-design`;
- ref: `refs/heads/experiment-ssd-transfer`;
- before: `825d26026e017b8f8789a5bf148f16130347bbd7`;
- after: `1433842c49da34df6d024c8d9cecf8272d3a0a00`;
- HTTP result: `202`, meaning the Hermes route accepted the wake-up.

The fresh Hermes invocation fetched and bound commit `1433842c49da34df6d024c8d9cecf8272d3a0a00`, read the governing files in contract order, identified `runtime-hermes-001`, validated its dependency/source/authority/safe-stop/claim state, and proposed the claim through PR #6. The coordinator admitted that claim, amended its evidence, and merged it as commit `17184465c0d2ce72245506d2767a37dd313787ee`.

The claim merge itself produced a second authoritative-branch delivery:

- delivery GUID: `651704a2-a21f-11f1-968b-a00e11eededc`;
- delivered at: `2026-08-27T13:58:35.601Z`;
- ref: `refs/heads/experiment-ssd-transfer`;
- before: `1433842c49da34df6d024c8d9cecf8272d3a0a00`;
- after: `17184465c0d2ce72245506d2767a37dd313787ee`;
- HTTP result: `202`.

The webhook credential was rotated and synchronized in the runtime harness after a local diagnostic risk was detected; no credential is recorded in SOT. Post-rotation hook state remained active with last response `202`, and the local webhook health endpoint remained healthy.

This establishes the full observe → reconstruct → identify → validate → claim → PR writeback → observe-next-state path without human message routing.

## Filter and idempotency probes

The route script was exercised locally with four payload fixtures:

| Case | Result |
|---|---|
| authoritative repository + `refs/heads/experiment-ssd-transfer` | emitted only `{"wake_reason":"authoritative_branch_may_have_changed"}` |
| authoritative repository + another branch | empty output; ignored |
| another repository + authoritative-looking ref | empty output; ignored |
| GitHub ping for authoritative repository | emitted only `{"wake_reason":"github_hook_ping"}` |

A subsequent push to the PR branch produced GitHub delivery GUID `2849430a-a21f-11f1-875a-3151b6cc755d` with HTTP `200` and no authoritative-branch agent activation. A signed local duplicate activation probe was accepted by the route after the claim had entered SOT. Two fresh duplicate invocations independently rebound to `17184465c0d2ce72245506d2767a37dd313787ee`, observed the admitted `claimed` state and concurrent execution, and safe-stopped with no commit, push, or PR. The active executor used an isolated worktree after detecting shared-checkout contention. The work item now declares this duplicate policy explicitly.

## Claim and conflict behavior

- claim event: `events/0004-hermes-runtime-work-claimed.md`;
- coordinator admission: `events/0005-coordinator-admits-hermes-runtime-claim.md`;
- admitted claim owner: `hermes-runtime`;
- claim base: exact observed commit `1433842c49da34df6d024c8d9cecf8272d3a0a00`;
- conflict preflight: current open PRs targeting the authoritative branch were checked before the claim; none existed;
- stale-state handling: after PR #6 merged, completion work re-fetched and rebound to `17184465c0d2ce72245506d2767a37dd313787ee` rather than continuing from the stale pre-claim branch state;
- write policy: all experiment changes were proposed through PRs targeting `experiment-ssd-transfer`; no direct push to the authoritative branch occurred.

## Runtime status decision

`runnable` is supported for the bounded experiment runtime role because live evidence demonstrates:

1. event-driven receipt of an authoritative branch change;
2. reduction of webhook payload to an untrusted wake token;
3. fresh SOT reconstruction and exact commit binding;
4. assignment, dependency, source-state, authority, safe-stop, and claim checks;
5. claim and completion evidence written through GitHub PRs;
6. filtering of unrelated repository/branch changes;
7. declared duplicate handling based on authoritative state and claim status.

The binding does not imply SSD semantic authority, evaluator authority, permission to bypass PR review, or permission to act on work assigned to another agent.
