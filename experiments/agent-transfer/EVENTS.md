# Experiment Events

## Purpose

Events are evidence that experiment state changed or that a runtime observed/attempted something relevant.

Events do not replace state. They make transitions inspectable and can trigger runtime adapters to re-read the SOT.

## Event envelope

Each event should contain:

- `id`
- `type`
- `experiment_id`
- `actor`
- `work_item_id` where applicable
- `observed_state_ref`
- `source_state_ref` where applicable
- `resulting_state_ref` where known
- `evidence_refs`
- `authority`
- `timestamp` or repository event identity

## Initial event types

Use one generic event envelope with `type`; do not create a separate schema/class per event unless lifecycle, validation, or authority later requires it.

### Runtime and agent

- `agent.registered`
- `runtime.binding_started`
- `runtime.listening`
- `runtime.runnable`
- `runtime.degraded`
- `runtime.suspended`
- `runtime.adapter_failure`

### Work

- `work.created`
- `work.assigned`
- `work.claimed`
- `work.started`
- `work.blocked`
- `work.invalidated`
- `work.completed`

### Runs and evaluation

- `run.completed`
- `evaluation.requested`
- `evaluation.completed`
- `rerun.requested`

### Semantic / experiment integrity

- `source_state.invalidated`
- `source_gap.detected`
- `drift.detected`
- `claim.conflict_detected`
- `safe_stop.entered`
- `safe_stop.resolved`

### Experiment progression

- `decision.recorded`
- `stage.advanced`
- `experiment.completed`

## Trigger routing

Runtime adapters may subscribe to all repository changes or filter event types. Routing preference should be derived from current work ownership, not hard-coded semantics in the delivery system.

Typical routing:

- participant runtime: assigned/ready work for its `agent_id`;
- evaluator runtime: evaluation work assigned to it;
- coordinator runtime: run/evaluation completion, block, safe stop, drift, claim conflict, runtime binding change.

## Idempotency

Adapters must assume duplicate event delivery is possible.

An event may cause a runtime to wake more than once, but valid state/claim checks must ensure that a work item is executed at most according to its declared execution semantics.

Where at-most-once execution cannot be guaranteed by the harness, the work item must declare how duplicate invocation is detected or safely handled before the runtime becomes `runnable` for consequential work.
