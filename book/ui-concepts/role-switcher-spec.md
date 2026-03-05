---
id: urn:ssd:toc:v2:uiconcept:role-switcher-spec
title: "UI Concept — Role Switcher (Behavior Spec)"
type: UIConceptSpec
status: draft
keywords:
  - behavior spec
  - ranking
  - state
  - persistence
  - safety
related:
  - urn:ssd:toc:v2:uiconcept:role-switcher
  - urn:ssd:toc:v2:dual:01
  - urn:ssd:toc:v2:dual:03
  - urn:ssd:toc:v2:ops:02
  - urn:ssd:toc:v2:ops:03
---

# UI Concept — Role Switcher (Behavior Spec)

This page specifies **exact behavior** of Role Switcher for a semantic-graph book.

## State model

Role Switcher state:

- `role`: one of `designer | engineer | product | exec | ai-agent`
- `pinned`: boolean (whether user wants it locked)
- `source`: `user` or `default` (how role was chosen)

## Defaults

Default role selection:

1. if user previously chose a role → restore
2. else infer from entry URL (e.g., visiting a reading path page)
3. else default to `designer`

Inference must be explicit in UI:

- “Role inferred from path: Engineer” (dismissible)

## Persistence

Persist role in:

- local storage (client)
- query param override supported: `?role=engineer`
- server-side profile optional (future)

Priority order:
`query param` > `pinned stored` > `stored` > `inferred` > `default`

## Effects of role change

On role change, the system must:

1. Update “Next” links

- Select from `ReadingPath` for that role if current node is on the path
- Otherwise rank `related` edges using role weights

2. Update “Related” section

- Sort by role relevance
- De-emphasize links outside current cluster unless explicitly marked as bridging nodes

3. Update content density

- Designer/Product/Exec: shorter paragraphs, fewer low-level details
- Engineer/AI Agent: explicit constraints, preconditions, failure modes

4. Update callouts

- Exec: governance, risk, accountability
- Product: decision points, tradeoffs
- Designer: semantics clarity, navigation, explanation UX
- Engineer: contracts, correctness, observability
- AI Agent: actionability, constraints, halting conditions

## Guardrails

Role switch must never:

- hide constraints
- imply capabilities that do not exist
- remove warnings for irreversible actions
- change the semantic assertions of the page

Role switch may:

- reorder information
- change explanation language
- change examples
- collapse or expand sections

## UI requirements

- Role Switcher is a dropdown with role labels + short descriptors
- Switching role is immediate and reversible
- Provide “Reset to default” action
- Provide “Pin role” toggle

## Telemetry (optional, but recommended)

Track:

- role switches
- top traversed edges per role
- time-to-closure per role path
- most frequent “role mismatch” exits

Telemetry must not become dark patterns.
