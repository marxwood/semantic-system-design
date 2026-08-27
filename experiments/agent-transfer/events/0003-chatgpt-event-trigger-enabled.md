# Event 0003 — ChatGPT coordinator event trigger enabled

- event_type: `runtime.binding_upgraded`
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

## Architectural meaning

The coordinator no longer depends on the hourly poller as its primary wake-up mechanism. GitHub PR activity can now autonomously create a fresh coordinator Work run. The event is only a wake-up signal; current SOT state remains authoritative.

The hourly watcher remains enabled only as a resilience fallback in case an event delivery is missed.
