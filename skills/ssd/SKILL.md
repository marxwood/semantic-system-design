---
name: ssd
description: Reconstruct unfamiliar products and system-design requests through Semantic System Design, deriving human and agent projections from explicit entities, relationships, capabilities, constraints, authority, consequences, and uncertainty. Use for architecture, interaction, workflow, permission, automation, or interface design where screen-first framing could hide system meaning.
---

# Semantic System Design

Reason from meaning before proposing a surface. Your result should be an SSD-shaped architectural analysis, not SSD vocabulary added to a conventional screen or flow design.

## Non-negotiable rules

- Treat entities, relationships, capabilities, and constraints as the minimum semantic model. Do not let screens, components, flows, API endpoints, tool names, or metadata define it.
- Treat states and legal transitions as product truth. A control may invoke a transition; it does not define one.
- Distinguish ability from authority. Visibility, disabled state, possession of an endpoint, or possession of a tool is not permission.
- Declare capability inputs, preconditions, effects, postconditions, and responsibility to the extent supported by the source and problem evidence. Expose side effects and irreversible boundaries.
- Capture operator intent, acceptable risk, and uncertainty before consequential action. Do not invent missing semantics. Mark an open semantic question and stop or escalate when the unresolved meaning could make action unsafe.
- Derive human and agent surfaces as different projections of one semantic system. They may differ in presentation, not rules, capability meaning, authority, or consequences.
- Preserve history, provenance, explanation, and auditability in proportion to action risk. A confirmation dialog alone is not a safety model.

These rules come from the current SSD source. [source-map.md](source-map.md) provides principle-to-behavior traceability, identifies source limitations, and records the source commit against which this skill was validated. Treat its fidelity status as invalid after a change to the relevant SSD source set until the map and procedure are revalidated.

## Operating procedure

Read [procedure.md](procedure.md) before performing an SSD analysis. Use its five phases as an iterative loop, initially moving in this order:

1. Reframe the request as intent, operators, scope, and evidence.
2. Reconstruct the semantic system before any projection.
3. Define capabilities, authority, consequences, and safety boundaries.
4. Derive and compare human and agent projections.
5. Test invariants, report uncertainty, and stop when readiness conditions fail.

Later phases may reveal missing entities, relationships, states, capabilities, or constraints. Return upstream and revise the model before deriving or finalizing projections.

Use [output-template.md](output-template.md) to externalize the result unless the requester requires another format. The template is an operational rendering, not a new SSD concept.

## Progressive source loading

Load only what the problem requires, but resolve uncertainty from the repository rather than memory:

- Start with `book/foundations/foundations-01.md`, `book/foundations/foundations-05.md`, and `book/foundations/foundations-07.md` for the system/projection distinction and minimum model.
- Load `book/semantics/` for identity, state, history, provenance, boundaries, capabilities, side effects, authority, and accountability.
- Load `book/dual/` for intent, gates, explanations, audits, escalation, safe stops, and human/machine parity.
- Load `book/ops/` when policies, guardrails, observability, access control, governance, incidents, learning, or change are material.
- Load `book/dso/` when types, variants, components, design-system constraints, agent surfaces, uncertainty, or versioning are material.
- Load `book/graphnav/` when navigation, workflows, decision paths, entry points, or closure are material.

When a source is incomplete or contradictory, consult [source-map.md](source-map.md) and [source-gaps.md](source-gaps.md). If neither resolves the issue, report a new SSD source gap with: the needed decision, why the agent needs it, the closest source, and the missing architectural ruling. Never silently complete the discipline.

## Quality check

Before finalizing, read [failure-modes.md](failure-modes.md) and challenge the result. Reject it if it merely renames screens, buttons, or steps with SSD terms. A passing result must make different architectural decisions because meaning is explicit.
