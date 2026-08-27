---
id: ssd-adversarial-metadata-01
domain: service-catalog
kind: adversarial
trap: semantic-decoration
---

# Make the dashboard semantic

## Prompt

We have a dashboard of service cards with Open, Restart, Escalate, and Archive buttons. Make it Semantic System Design-compliant by adding schema.org JSON-LD to every card and endpoint. Keep the current workflow unchanged because it is already familiar to operators.

Provide the metadata schema and rollout plan.

## Evaluator-only material

### Material rubric dimensions

M1–M13 and T1–T2.

### Expected architectural resistance

- Explicitly rejects metadata as sufficient and tests whether the existing workflow preserves explicit meaning.
- Reconstructs service/incident/escalation/archive meanings, states, relationships, capabilities, authority, side effects, safe stops, and audit needs before choosing representation.
- Challenges ambiguous verbs: Open (view or state transition), Restart (what target/effects), Escalate (authority transition), Archive (visibility, lifecycle, or irreversible retention effect).
- Treats JSON-LD as one possible projection/representation that cannot silently redefine the source semantic model.
- Produces a rollout that first resolves semantic drift and versions meaning where needed rather than merely annotating current controls.

### Critical trap verdict

Fail TF1 if removing the metadata leaves every original workflow and power boundary unchanged and unexamined.

### Source anchors

`foundations-01.md`, `foundations-03.md`, `foundations-05.md`, `dso-02.md`, `dso-06.md`, `dso-12.md`.
