# SSD architectural reasoning procedure

This procedure operationalizes the current SSD material. It is not an additional theory layer. Source links for every required behavior are in [source-map.md](source-map.md).

## Skill-local analysis statuses

These labels organize this skill's work. They are not SSD concepts, product states, or additions to the discipline:

- **ready for projection** — the relevant semantic system is explicit enough to derive surfaces;
- **provisional analysis** — analysis or reversible projection exploration may continue only when every remaining unknown is explicitly named and non-material to ontology, safety, accountability, halting, authority, or consequences. This status never authorizes an operator or agent to act on the system;
- **safe stop** — consequential design or execution must not proceed until a named semantic question is resolved or authority is transferred.

The source requires agents not to act when core ontology, constraints/safety, accountability, or halting conditions are missing (`book/reading-paths/path-ai-agent.md`). Any such missing or material uncertainty requires **safe stop**, not provisional analysis. Use that source rule as the terminal readiness test, not as permission to manufacture missing answers.

## Use the phases as a loop

The five phases below are an iterative reasoning loop, not a waterfall. Begin by moving from framing to reconstruction, capability elaboration, projections, and challenge. When a later phase exposes a missing entity, relationship, state, capability, constraint, authority boundary, or consequence, return to the earliest affected phase, revise the model, and repeat the downstream checks.

## 1. Frame intent, operators, and scope

1. Restate the requested outcome without treating its proposed screen, flow, control, endpoint, or tool as architecture.
2. Identify each operator that may read, decide, act, or observe: humans, administrators, scripts, workflows, and agents.
3. For each operator, record declared intent, relevant constraints, acceptable risk, authority scope, and responsibility. Separate evidence supplied by the request from assumptions.
4. Mark scope, temporal, authority, and confidence boundaries. Say what the system cannot currently know or decide.

Do not infer intent solely from a click or API call. If intent is missing for a consequential action, ask for it or stop.

## 2. Reconstruct the semantic system

Work from persistent meaning, not the supplied projection.

### Entities and identity

- Name conceptual anchors that have identity, can be referenced, can change state, participate in relationships, or can be acted upon.
- Do not equate an entity with a database row, JSON object, UI component, or screen.
- Add a specialized type only when it changes required relations, lifecycle, validation, or authority. Otherwise represent the difference orthogonally.

### Relationships

- Name meaningful edges between entities and state their direction or role where it matters.
- Record relationships assumed by a capability, affected by a transition, or required for operator orientation.
- Do not flatten relationships into menus or page hierarchy.

### State, time, and provenance

- Name meaningful entity states and legal transitions. Separate state from presentation variants.
- For each material transition, preserve the event as well as the resulting state: actor, time, reason, and governing authority or rule.
- Mark conditional and irreversible edges and recovery/return paths where supported.
- Record provenance needed to judge trust: who, when, how, and under which authority or rule.

### Constraints and guarantees

- State allowed values, forbidden states, required preconditions, and invariants.
- Distinguish contextual policies (what should happen) from guardrails (what must not happen).
- Mark whether each rule is sourced, supplied by the problem, or still unresolved.

### Relevant capabilities

- Identify the semantic capabilities required by the stated intent at the level of name, target entity, and intended change.
- Keep them independent of buttons, endpoints, tools, or other affordances.
- Treat this as discovery of the minimum model. Phase 3 elaborates each identified capability into a contract.

Do not continue to surface design if the minimum relevant model—entities, relationships, identified capabilities, and constraints—cannot be stated without unsafe invention. Continue to Phase 3 to elaborate the identified capabilities before deciding whether projection is ready.

## 3. Define capability contracts and power

For every capability needed to satisfy the intent, record:

- semantic name and target entity;
- required inputs;
- preconditions and active constraints;
- who may invoke it, on which entities, in what context, and for how long;
- primary effect and postconditions;
- side effects on other entities, permissions, automations, or assumptions;
- reversibility, recovery, and irreversible boundary;
- accountable owner and evidence to preserve;
- blocking uncertainty, failure behavior, escalation, and safe stop.

Treat a capability as a declared possibility to cause change. A button, menu item, endpoint, or tool is only an affordance or projection of it.

Apply least privilege. Privilege use and override must be visible, explicit, logged, scoped, and reversible where possible. For irreversible actions, privilege escalation, effects on others, or action under uncertainty, include a semantic confirmation gate that validates intent, authority, consequence awareness, and absence of blocking uncertainty.

If contract elaboration reveals a previously missing entity, relationship, state, or constraint, return to Phase 2 and revise the minimum model before continuing.

## 4. Derive projections from the model

Only after the semantic system is explicit, derive contextual surfaces.

### Human projection

Select the entities, relationships, states, capabilities, constraints, explanations, and recovery paths needed for comprehension, contextual choice, and trust. Progressive disclosure may change density or order; it must not hide constraints or imply different truth.

### Agent projection

Expose typed entities and relations, declared capabilities, preconditions, constraints, authority scopes, deterministic result semantics, confidence, provenance, failure modes, audit access, escalation, and completion signals. An API alone is not sufficient.

### Parity comparison

Compare the two projections capability by capability. Confirm that they share:

- entity identity and relationship meaning;
- state and transition semantics;
- authority and constraints;
- primary and side effects;
- irreversible boundaries;
- explanations, audit evidence, escalation, and closure.

Presentation may differ. Semantic assertions may not. Anything a human can do must be machine-reasonable; anything a machine can do must be human-understandable.

## 5. Challenge, stop, or complete

Run these checks before declaring the design ready:

1. **Projection removal:** If every proposed surface vanished, could another architect still understand what exists, what may happen, what must not happen, and who is responsible?
2. **Affordance substitution:** Could the human UI and agent tool be replaced without changing the capability contract?
3. **Illegal transition:** Are forbidden transitions prevented by the semantic rules rather than hidden controls?
4. **Consequence sweep:** Have affected entities, permission changes, downstream automation, invalidated assumptions, recovery, and irreversibility been considered?
5. **Authority challenge:** Does every consequential action have explicit scoped authority and accountability, independent of surface visibility?
6. **Uncertainty challenge:** Does any projection imply more certainty than the model? Could an irreversible action occur while blocking uncertainty remains?
7. **Parity challenge:** Can either operator produce an outcome whose meaning the other surface cannot explain?
8. **Audit challenge:** Can an operator answer what happened, why, who/what caused it, under which rules, and with what confidence?
9. **Closure challenge:** Are success, partial success, unresolved issues, escalation requirements, and recovery visible?
10. **Vocabulary-removal test:** If SSD terms are removed from the prose, are the architecture and decisions still meaning-first?

If a check fails, revise the model or record the missing decision. Do not conceal failure with projection changes.
