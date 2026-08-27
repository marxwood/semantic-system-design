# Connect an Agent Runtime

## Purpose

This is the canonical onboarding entry point for an agent runtime joining the shared-agent SSD transfer experiment.

The experiment SOT is:

- repository: `marxwood/semantic-system-design`
- branch: `experiment-ssd-transfer`
- experiment root: `experiments/agent-transfer/`
- authoritative state: `experiments/agent-transfer/state/experiment.yaml`

`main` is not the experiment state branch.

A runtime may use a webhook, queue, scheduler, poller, or another wake-up mechanism. Delivery is not authority. Every activation must re-read the current SOT before acting.

## Minimum runtime capabilities

A runtime is not `runnable` until it can:

1. read the current `experiment-ssd-transfer` branch;
2. detect that repository state may have changed;
3. identify itself by a registered `agent_id`;
4. evaluate the activation predicate in `ACTIVATION-CONTRACT.md`;
5. claim eligible work without overwriting a newer/conflicting claim;
6. invoke a fresh agent instance with the required repository context;
7. write run artifacts, state changes, and event evidence back to `experiment-ssd-transfer`;
8. recover safely from duplicate delivery, stale state, conflicts, or adapter failure.

Do not make a runtime `runnable` merely because it can receive notifications.

## Bootstrap sequence

### 1. Bind identity

Use the exact `agent_id` registered under `agents` in `state/experiment.yaml`.

Initial identities include:

- `chatgpt-coordinator`
- `codex-architect`
- `claude-architect`
- `hermes-runtime`

Do not silently invent or self-authorize a new identity. A new participant must first be registered in SOT state by the coordinator within the experiment authority boundary.

### 2. Load the coordination contract

At startup, read:

1. `CONNECT.md`
2. `state/experiment.yaml`
3. `ACTIVATION-CONTRACT.md`
4. `PROTOCOL.md`
5. `EVENTS.md`

Then load role/task-specific files referenced by the current work item.

Participants performing SSD architecture also load `skills/ssd/SKILL.md` and the source state required by the work item.

The coordinator additionally loads `COORDINATOR.md`.

### 3. Install a wake-up adapter

Preferred for a persistent external runtime:

- subscribe to GitHub repository changes affecting `refs/heads/experiment-ssd-transfer`;
- on notification, wake the runtime;
- do not pass webhook payload fields directly as execution authority;
- fetch the current branch HEAD and reconstruct SOT state.

Polling is a valid degraded fallback. Poll the branch HEAD/state path, and wake only when the observed state version changes or work may have become runnable.

### 4. Re-read state and evaluate activation

On every wake-up:

1. fetch the latest `experiment-ssd-transfer` HEAD;
2. read `state/experiment.yaml`;
3. verify no experiment-level safe stop blocks the work;
4. find work where `assigned_to` matches the runtime's `agent_id` or role and status is claimable;
5. verify dependencies;
6. verify `required_source_state`;
7. verify authority;
8. check for an existing valid claim.

If any condition is unresolved, do not execute.

### 5. Claim before execution

Before consequential work, persist a `work.claimed` event containing the fields required by `EVENTS.md`, including the observed state/commit and authority scope.

The claim and corresponding work-item state update must be based on the state version the runtime actually observed. If the branch advanced and claim ownership may have changed, re-read and retry from state rather than overwriting.

A notification is never a claim.

### 6. Invoke the agent from SOT context

The invoked instance must reconstruct continuity from repository state rather than hidden session memory.

Provide at least:

- `agent_id` and role;
- repository and branch;
- work-item ID;
- current experiment state reference;
- required source-state marker;
- referenced inputs;
- authority scope;
- explicit instruction to follow `ACTIVATION-CONTRACT.md` and `PROTOCOL.md`.

Do not provide evaluator-only material to a participant solver.

### 7. Persist outcome

The runtime writes all material evidence back to the experiment branch and emits the appropriate event, such as:

- `run.completed`
- `evaluation.completed`
- `work.blocked`
- `safe_stop.entered`
- `runtime.adapter_failure`

Update the work item to the corresponding state only when the evidence required by its completion condition exists.

The resulting repository change is the handoff to the next agent.

## Minimal adapter loop

```text
wake-up signal
      │
      ▼
fetch experiment-ssd-transfer HEAD
      │
      ▼
read experiment.yaml
      │
      ▼
activation predicate true for my agent_id?
      │
   no └────→ stop
      │ yes
      ▼
claim against observed state
      │
      ▼
invoke fresh agent with SOT context
      │
      ▼
write artifact + event + resulting state
      │
      ▼
repository change wakes next eligible runtime
```

## Webhook adapter guidance

For Hermes or another externally hosted runtime with an HTTP endpoint, the preferred first implementation is:

1. GitHub push/change notification for `experiment-ssd-transfer` wakes the endpoint;
2. endpoint deduplicates delivery by GitHub event identity/observed commit;
3. endpoint fetches current SOT state;
4. endpoint evaluates the activation predicate for its registered `agent_id`;
5. endpoint claims work through a GitHub write based on current state;
6. endpoint invokes the agent;
7. endpoint writes outcome/evidence to the same branch.

The webhook secret, credentials, endpoint configuration, retries, and queueing belong to the runtime harness and must not be committed to this repository.

## Polling adapter guidance

If webhook activation is unavailable:

1. remember the last observed experiment branch commit;
2. periodically fetch branch/state;
3. if unchanged and no deferred retry is due, do nothing;
4. if changed, run the same state/claim checks as a webhook adapter.

Polling changes latency, not authority semantics.

## Runtime readiness evidence

Before the coordinator changes a binding to `runnable`, the runtime must demonstrate:

- it observes a branch change without human relay;
- it ignores work assigned to another agent;
- it identifies assigned eligible work;
- it detects a stale/conflicting claim rather than overwriting it;
- it can write an event/evidence artifact back to the branch;
- a fresh invocation can reconstruct the role from SOT state alone.

Record this evidence in the experiment SOT and emit the applicable runtime event.

## First connection target

The current bootstrap target is `hermes-runtime` through work item `runtime-hermes-001`.

After Hermes is runnable, the coordinator binds an independent evaluator runtime and runs `state-handoff-probe-001` to prove participant → coordinator → evaluator coordination without human message routing.
