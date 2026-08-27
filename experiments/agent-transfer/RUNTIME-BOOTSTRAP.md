# Runtime Bootstrap Plan

## Current coordinator binding

`chatgpt-coordinator` is bound through an hourly condition-watch poller.

This is autonomous but not event-immediate, so the binding is marked `degraded` rather than fully `runnable` for latency-sensitive work.

## Next binding: Hermes

Hermes is the preferred first event-driven participant/runtime candidate because it can host or consume a GitHub webhook and can maintain a persistent process outside a chat session.

The Hermes adapter should:

1. subscribe to repository push / PR / relevant state-change events;
2. treat webhook delivery only as a wake-up signal;
3. fetch `experiments/agent-transfer/state/experiment.yaml`;
4. identify work assigned to `hermes-runtime`;
5. validate dependencies, source state, authority, and claim ownership;
6. record a work claim in the SOT;
7. invoke Hermes with the work item plus referenced SSD context;
8. write run artifacts and completion/block/safe-stop evidence back to the repository;
9. make the resulting repository change available to the coordinator watcher.

## Second independent runtime

After Hermes is runnable, bind one independent evaluator runtime. Prefer a different agent family from the participant for the first evaluation loop.

Candidates:

- Codex participant + Claude evaluator;
- Hermes participant + Codex evaluator;
- Claude participant + ChatGPT evaluator instance.

The coordinator chooses based on actual available bindings, not preference alone.

## Bootstrap completion condition

Runtime bootstrap is complete when:

- coordinator can wake autonomously;
- one participant runtime can wake from SOT state, claim work, execute, and write back;
- one independent evaluator runtime can do the same;
- all three operate without human message relay.
