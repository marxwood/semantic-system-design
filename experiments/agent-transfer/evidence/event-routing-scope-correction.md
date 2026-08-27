# Event Routing Scope Correction

## Finding

The experiment runtime had two different routing layers:

- Hermes push routing was already implemented and probed to accept only `refs/heads/experiment-ssd-transfer`;
- ChatGPT Work Monitoring was configured repository-wide and relied on an in-run base-branch check, so unrelated PR activity such as a merge to `main` could still create a Work execution before becoming a no-op.

This created unnecessary executions and increased the risk of recursive coordinator wake-ups through merged/closed/comment/review events.

No GitHub evidence establishes that the observed `main` PR merge caused a Hermes agent execution. The Hermes binding evidence already records successful rejection of non-authoritative branch payloads.

## Correction

The experiment activation boundary is now explicit:

- Hermes: only push to `refs/heads/experiment-ssd-transfer` may reach agent invocation;
- ChatGPT coordinator: only opened, ready-for-review, or synchronized commits on an open PR whose base is `experiment-ssd-transfer` are actionable;
- merged, closed, comments, reviews, reactions, coordinator side-effects, and PRs targeting any other branch are pre-execution no-ops.

The ChatGPT `SSD Transfer Coordinator` task prompt was updated to apply this hard gate before SOT reconciliation. The separate hourly fallback watcher was disabled while event scope is being stabilized.

## Architectural consequence

Delivery scope and execution authority remain separate:

1. event routing decides whether an agent runtime should be invoked at all;
2. the activation predicate and authoritative SOT decide whether the invoked agent may act.

Filtering must happen at both layers. A broad delivery subscription must never imply broad experiment activation.
