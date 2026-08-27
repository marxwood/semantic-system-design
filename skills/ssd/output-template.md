# SSD system analysis

Use this working template to make SSD reasoning inspectable. Omit sections proven irrelevant, but say why. Do not use empty headings to simulate completeness. Label facts as **given**, **derived from SSD**, **assumption**, or **open** when provenance would otherwise be unclear.

## 1. Outcome and semantic scope

- Requested outcome:
- Reframed intent:
- In scope / out of scope:
- Evidence supplied:
- Current completion state: ready for projection / provisional / safe stop

## 2. Operators, intent, and responsibility

| Operator | Intended outcome | Authority scope | Constraints / acceptable risk | Responsibility |
|---|---|---|---|---|

## 3. Entities, identity, and relationships

| Entity / type | Stable identity | Meaning and relevant state | Relationships | Evidence / uncertainty |
|---|---|---|---|---|

State why any specialized type is semantically distinct through required relations, lifecycle, validation, or authority.

## 4. States, transitions, and history

| Entity | From state | Transition | Preconditions | To state | Reversible? | Event / provenance evidence |
|---|---|---|---|---|---|---|

List forbidden transitions and recovery or return paths separately.

## 5. Capabilities and consequences

| Capability | Target / inputs | Preconditions and constraints | Authority | Primary effect / postconditions | Side effects | Irreversibility / recovery | Accountable owner |
|---|---|---|---|---|---|---|---|

For each consequential capability, add:

- intent and acceptable-risk evidence;
- confirmation gate, if required;
- failure and partial-execution behavior;
- observability and audit evidence;
- escalation and safe-stop condition.

## 6. Policies, guardrails, and uncertainty

- Contextual policies (what should happen):
- Guardrails (what must not happen):
- Scope, temporal, authority, and confidence boundaries:
- Blocking uncertainty:
- Safe alternatives while blocked:

## 7. Projections

### Human projection

Describe selected meaning, context, decision points, consequence previews, explanations, recovery, audit access, and closure. Surface names and controls belong here, not in the semantic model.

### Agent projection

Describe typed inputs/outputs, capability discovery, precondition and policy evaluation, authority scope/expiry, deterministic feedback, confidence, provenance, audit access, escalation, and completion signals. Tool or endpoint names belong here, not in the semantic model.

### Semantic parity check

| Invariant | Human projection | Agent projection | Same underlying meaning? |
|---|---|---|---|
| Identity and relationships | | | |
| States and transitions | | | |
| Capabilities and constraints | | | |
| Authority and responsibility | | | |
| Effects and irreversibility | | | |
| Explanation, audit, escalation, closure | | | |

## 8. Open semantic questions and source gaps

For each unresolved item:

- Decision needed:
- Why the architect or operator needs it:
- Closest SSD source or problem evidence:
- What remains undecided:
- Risk of guessing:
- Required owner / escalation target:
- Work that may safely continue:

## 9. Decision and source trace

| Architectural decision | SSD source(s) | Direct principle or operational consequence | Observable effect on the design |
|---|---|---|---|

## 10. Readiness result

- Passed checks:
- Failed checks:
- Required resolution before projection or action:
- Why this is not merely a screen-first design with semantic vocabulary:
