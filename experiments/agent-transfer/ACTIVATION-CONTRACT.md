# Agent Activation Contract

## Purpose

Define how an agent runtime knows that it is its turn to act in the shared-agent SSD transfer experiment.

This contract separates persistent coordination state from any particular agent session.

## Activation predicate

An agent runtime is eligible to act only when all of the following are true:

1. a work item exists in the shared SOT;
2. `status` is `ready` or `assigned`;
3. `assigned_to` matches the runtime's registered `agent_id` or the item is explicitly claimable by that role;
4. all declared dependencies are satisfied;
5. the referenced SSD source state is available and compatible with the work item;
6. no blocking experiment-level safe stop is active.

The runtime must re-read current state immediately before claiming work. Repository notification alone is not authority to execute.

## Event routing boundary

Wake-up delivery must be scoped before the activation predicate is evaluated.

For this experiment, the authoritative branch is `experiment-ssd-transfer`.

A runtime must not begin experiment reconciliation merely because some unrelated part of `marxwood/semantic-system-design` changed.

### Hermes push routing

`hermes-runtime` may be awakened by GitHub `push` only when the pushed ref is exactly:

`refs/heads/experiment-ssd-transfer`

A push to `main`, an agent proposal branch, or any other branch is outside the Hermes experiment activation surface and must be discarded before invoking the agent.

### ChatGPT coordinator PR routing

`chatgpt-coordinator` is eligible for event-driven activation only for an **open pull request whose base branch is `experiment-ssd-transfer`**, and only on one of these proposal-changing events:

- pull request opened;
- pull request marked ready for review;
- new commits synchronized/pushed to the pull request.

The following are not coordinator activation events and must terminate as a no-op before SOT reconciliation:

- pull requests targeting `main` or any other base branch;
- pull request merged or closed;
- comments;
- reviews;
- reactions;
- other observational/post-transition activity.

Coordinator-produced merges, comments, or reviews must not recursively create another coordinator execution cycle.

The delivery system may still technically emit a broader notification. The runtime adapter must apply this routing boundary before reconstructing or mutating experiment state.

## Runtime adapter responsibility

Each participating agent needs a runtime-specific adapter capable of:

- receiving or polling for repository state changes;
- filtering delivery through the experiment event-routing boundary before agent invocation;
- identifying relevant events/work items;
- loading current experiment state;
- atomically claiming eligible work or otherwise proving exclusive ownership;
- invoking the agent with the required context;
- writing run artifacts and event evidence back to the SOT;
- marking completion, blockage, or safe stop;
- triggering or exposing the next state change.

The adapter is harnessing infrastructure. It must not redefine SSD semantics or experiment authority.

## Event delivery is not state truth

Webhooks, notifications, scheduled polling, queues, or other delivery mechanisms only tell a runtime that state may have changed.

Before acting, the agent must resolve the authoritative current state from the SOT.

This prevents duplicate or stale delivery from causing duplicate work.

## Session continuity

A specific chat/session process is not assumed to remain alive.

A newly invoked instance may assume a registered role only after reconstructing:

- current experiment state;
- SSD source state referenced by the work item;
- unresolved decisions and source gaps relevant to the task;
- prior run/evaluation evidence required for continuity;
- its current authority scope.

Continuity belongs to the SOT, not to process memory.

## ChatGPT binding boundary

A ChatGPT coordinator role can be represented and invoked by this contract, but a normal chat instance does not become a resident GitHub listener merely because this file exists.

A persistent external trigger/runtime must invoke a fresh coordinator instance when relevant state changes. That runtime must provide repository access and enough task context for the instance to reconstruct the coordinator role from the SOT.

Until such an adapter is bound, `chatgpt-coordinator` is semantically registered but not autonomously event-reactive.

## Agent state

Recommended runtime binding statuses:

- `unbound` — role exists but no runtime can yet receive activation;
- `binding` — adapter setup is in progress;
- `listening` — runtime can observe relevant state changes;
- `runnable` — runtime can observe, claim, execute, and write back;
- `degraded` — runtime can operate only with named limitations;
- `suspended` — runtime must not claim work.

These are experiment-runtime statuses, not SSD concepts.

## Work claim rule

A runtime must not start consequential work merely because it sees an assignment.

It first records a claim event containing:

- work item ID;
- agent ID;
- observed state version/commit;
- source-state marker;
- claim timestamp or event identity;
- authority scope.

If another valid claim already owns the item, the second runtime must not execute it.

## Failure handling

If activation succeeds but execution cannot proceed, the agent records one of:

- `blocked` with the missing dependency/decision;
- `safe_stop` with the blocking semantic or authority condition;
- `adapter_failure` when the harness failed without changing architectural state.

The coordinator decides the next work item from the resulting SOT state.
