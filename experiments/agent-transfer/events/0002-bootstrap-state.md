# Event 0002 — Runtime bootstrap state advanced

- type: `decision.recorded`
- experiment: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`

## Decision

Treat the ChatGPT coordinator watcher as a degraded autonomous binding and advance the next runtime-binding target to Hermes.

## Reason

The coordinator can now wake and operate without human message routing, but only through hourly polling. Hermes remains the preferred first event-driven participant/runtime candidate because it can host a persistent webhook-facing process.

## Next work

`runtime-hermes-001` becomes the next runtime bootstrap target after this experiment branch is accepted into the shared SOT.
