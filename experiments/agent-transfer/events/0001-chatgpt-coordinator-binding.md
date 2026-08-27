# Event 0001 — ChatGPT coordinator watcher bound

- type: `runtime.degraded`
- experiment: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work item: `runtime-chatgpt-coordinator-001`
- runtime mode: hourly condition-watch polling
- status: autonomous but not event-immediate

## Evidence

A recurring coordinator watcher has been created to inspect the GitHub SOT hourly. On each activation it reconstructs the coordinator role from repository state, acts only on runnable coordinator work, persists resulting state/evidence, and safe-stops on authority or integrity ambiguity.

## Limitation

This is not a resident GitHub webhook listener. Repository changes may wait until the next hourly activation. The binding should therefore be treated as `degraded` rather than fully `runnable` for latency-sensitive orchestration.

## Consequence

Human message routing is no longer required to wake the coordinator for ordinary experiment progression, within the polling latency bound.
