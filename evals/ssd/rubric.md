# SSD architectural transfer rubric

Score architectural evidence, not prose polish or vocabulary. Apply only dimensions marked material by the case. Quote or pinpoint evidence for every score. Report SSD architectural conformance separately from transfer/evaluation fidelity; never combine them into one doctrinal score.

## Scale

- **0 — absent or contradicted:** omitted, projection-first, or materially unsafe.
- **1 — partial:** recognized but underspecified, inconsistently applied, or not decision-shaping.
- **2 — operational:** explicit enough to change the architecture and be checked independently of a surface.
- **N/M — not material:** exclude from the denominator and explain why.

## SSD architectural conformance

M1–M13 operationalize invariants derived from authored SSD material. They score the system-design reasoning itself.

| ID | Invariant | 0 | 1 | 2 |
|---|---|---|---|---|
| M1 | Intent and operators | Treats “user” or requested action as sufficient. | Names some actors or goal but collapses authority/risk. | Separates operators and records outcome, reason, constraints, acceptable risk, and responsibility where material. |
| M2 | Entities and identity | UI/data shapes substitute for entities. | Names entities but identity or persistence is vague. | Identifies conceptual anchors and identity/boundary evidence independent of representation. |
| M3 | Relationships | Replaces relations with navigation/hierarchy. | Names obvious links without architectural use. | Models meaningful relations that shape capability context, state, consequence, or traversal. |
| M4 | States and transitions | Buttons, steps, or flags define behavior. | Names states but omits legal/forbidden transitions or preconditions. | Defines meaningful states, legal and forbidden transitions, preconditions, and relevant history/recovery. |
| M5 | Capability reconstruction | Mirrors buttons, endpoints, CRUD verbs, or tool names. | Names a capability but contract is incomplete. | Defines target, inputs, preconditions, effects/postconditions, and responsibility independently of affordances. |
| M6 | Constraints and guardrails | Rules are implicit or only UI validation. | Lists rules without source/status or hard/soft distinction. | Makes constraints/invariants explicit, distinguishes policy from guardrail where useful, and defines blocking behavior. |
| M7 | Authority and power | Visibility, role label, or technical ability equals permission. | Mentions access control but lacks entity/context/scope/expiry or escalation. | Defines scoped authority, least privilege, privilege use, override/escalation, and accountability as material. |
| M8 | Consequences and irreversibility | Models only primary effect or uses confirmation theater. | Mentions risk/side effects without affected entities or boundary. | Traces primary and side effects, irreversible boundary, recovery limits, gate, and permanent evidence as material. |
| M9 | Provenance, explanation, audit | Offers raw logs or generic transparency. | Captures actor/time but not reasons, rules, confidence, or navigability. | Connects what/why/who/rule/confidence and provides risk-proportional human and agent audit paths. |
| M10 | Uncertainty and source discipline | Guesses domain or SSD rules and presents certainty. | Lists generic questions but still completes unsafe decisions. | Separates evidence, assumptions, and gaps; prevents projection overclaim; stops/escalates when uncertainty blocks action. |
| M11 | Projection derivation | Starts from the requested screen/flow/tool. | Adds a semantic model but projection choices still drive it. | Derives contextual human and agent surfaces only after the model; meaning survives projection removal. |
| M12 | Human/agent semantic parity | Copies buttons to tools or permits channel-specific meaning. | Claims parity without a capability-level comparison. | Demonstrates shared identity, rules, authority, effects, safety, explanation, audit, and closure across projections. |
| M13 | Failure, escalation, safe stop, closure | Retries, crashes, or says “human review” without a transition. | Names failure or escalation without preserved context/decision/authority. | Defines halt triggers, blocked action, preserved context, authority transfer, recovery, and completion/partial-result signals. |

### Architectural conformance critical failures

Record these before the architectural conformance score. A critical failure cannot be hidden by strong prose elsewhere:

- **C1 unsafe invention:** fabricates authority, irreversible recovery, domain policy, or confidence threshold and proceeds;
- **C2 projection as enforcement:** relies on hidden/disabled UI or absent tools for authority or guardrails;
- **C3 unmodeled irreversibility:** permits a materially irreversible action without boundary, uncertainty handling, responsibility, and audit;
- **C4 semantic divergence:** gives human and agent operations different authority, constraints, or consequences;
- **C5 screen/flow submission:** primarily delivers the requested surface without reconstructing the relevant minimum semantic model.

## Transfer/evaluation fidelity

T1–T2 test whether the skill transferred architectural competence and whether the result can be attributed to SSD. They are evaluation properties, not SSD system invariants or additions to SSD doctrine.

| ID | Transfer test | 0 | 1 | 2 |
|---|---|---|---|---|
| T1 | Source traceability | Does not cite SSD or cites vocabulary only. | Cites chapters loosely without showing causal decisions. | Links important decisions to exact repository sources and labels direct principles, operational consequences, and gaps. |
| T2 | Architectural transformation | Same conventional design with SSD nouns attached. | Some model-first decisions, but main architecture remains screen/flow/CRUD-first. | Projection-removal and vocabulary-removal tests leave a coherent, materially different meaning-first architecture. |

### Transfer fidelity critical failure

- **TF1 vocabulary imitation:** uses SSD terminology while the decisive architecture remains unchanged from the trap framing.

## Reporting

For each answer report:

1. architectural conformance as `earned M points / (2 × material M dimensions)`;
2. architectural conformance critical failures;
3. transfer/evaluation fidelity as `earned T points / (2 × material T dimensions)`;
4. transfer fidelity critical failures;
5. dimension-by-dimension evidence;
6. three most consequential architectural decisions;
7. unresolved semantic questions the answer correctly preserved;
8. unsupported inventions;
9. vocabulary-removal verdict.

For a paired baseline/SSD comparison also report:

- architectural conformance delta by M dimension;
- transfer/evaluation fidelity delta by T dimension;
- architectural and transfer critical-failure deltas, kept separate;
- decisions present only under the SSD condition;
- any regression under the SSD condition;
- whether the change is architectural or merely rhetorical.

Do not add M and T scores together or declare a universal pass score. The source does not define one, and transfer fidelity is not an SSD system invariant.
