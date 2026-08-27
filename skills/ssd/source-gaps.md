# SSD source gaps discovered during operationalization

These are gaps in the current SSD source, not defects to repair silently in the skill. Each item records the minimum handling available without extending the discipline.

## Architectural gaps

### Relationship specification depth

- **Agent need:** Decide how to express relationship identity, direction, cardinality, lifecycle, ownership, and constraints consistently.
- **Why:** Relationships are a foundational primitive and drive graph traversal, yet architecture transfer requires more than naming an edge in complex domains.
- **Closest source:** `book/foundations/foundations-01.md`, `foundations-07.md`; `book/graphnav/graphnav-01.md`, `graphnav-02.md`; `book/semantics/semantics-01.md`.
- **Missing decision:** Which relationship properties SSD requires in a complete semantic model, and when.
- **Current handling:** Name materially relevant relationships and expose missing properties as open domain decisions. Do not impose an external graph schema.

### Complete capability contract source

- **Agent need:** Reliably determine the full required shape of every capability.
- **Why:** Capability reconstruction is central to distinguishing system meaning from buttons and tools.
- **Closest source:** `book/foundations/foundations-04.md` declares inputs, constraints, effects, and outputs. `book/semantics/semantics-07.md` declares target entity, inputs, preconditions, effects, postconditions, and responsibility.
- **Missing decision:** `semantics-07.md` ends mid-sentence after “Every action i”, so its argument and any later obligations are absent. The two surviving lists also use partly different terms without resolving whether they are equivalent or cumulative.
- **Current handling:** Use the union of the two explicit lists and identify it as operationalization across both sources; do not infer the missing prose.

### Constraint, policy, guardrail, and invariant precedence

- **Agent need:** Resolve conflicts among rules and know which kind of rule can override another.
- **Why:** Safe stops are required when constraints conflict, but architects also need a governance path to resolution.
- **Closest source:** `book/dso/dso-05.md`; `book/ops/ops-02.md`, `ops-03.md`; `book/dual/dual-08.md`.
- **Missing decision:** A formal classification and precedence model, including whether and by whom a guardrail may ever be overridden.
- **Current handling:** Preserve the source distinction (“should” policy versus “must not” guardrail), safe-stop on unresolved conflict, and name the required semantic owner.

### Threshold selection for uncertainty and escalation

- **Agent need:** Select confidence thresholds, acceptable-risk levels, and escalation triggers.
- **Why:** The source requires confidence-aware action and halting but no universal numeric or qualitative calibration method.
- **Closest source:** `book/semantics/semantics-06.md`; `book/dso/dso-10.md`; `book/dual/dual-03.md`, `dual-04.md`, `dual-08.md`.
- **Missing decision:** How thresholds are set, validated, changed, and assigned to an accountable owner by domain and consequence.
- **Current handling:** Require explicit domain-owned thresholds or mark them open. Never invent a percentage or treat model confidence as self-authorizing.

### Recovery, rollback, and compensation semantics

- **Agent need:** Distinguish undo, rollback, compensating action, restoration, and irreversible recovery promises.
- **Why:** SSD requires rollback affordances where possible, return paths, and explicit irreversible boundaries, but these mechanisms have different semantic consequences.
- **Closest source:** `book/semantics/semantics-04.md`, `semantics-08.md`; `book/graphnav/graphnav-03.md`, `graphnav-06.md`; `book/dual/dual-08.md`.
- **Missing decision:** The required recovery taxonomy and guarantees for partial or distributed execution.
- **Current handling:** Ask what restoration is actually guaranteed; never label a compensating action “reversible” without domain evidence.

### Partial execution and atomicity

- **Agent need:** Model what becomes true when a capability succeeds only in part, is retried, or crosses system boundaries.
- **Why:** `dual-07.md` requires explicit handling of partial execution, while side effects and auditability depend on the result semantics.
- **Closest source:** `book/dual/dual-07.md`; `book/semantics/semantics-04.md`, `semantics-08.md`; `book/ops/ops-04.md`.
- **Missing decision:** SSD rules for atomicity, idempotency, deduplication, compensation ordering, and truthful partial-result states.
- **Current handling:** Require the domain to state failure and partial-result semantics. Safe-stop consequential execution when they are unknown.

### Authority conflict and delegation semantics

- **Agent need:** Resolve overlapping roles, delegated authority, revocation races, multi-party approval, and conflicts between operators.
- **Why:** Ability/authority separation and scoped agent authority are explicit, but complex authority transfer needs determinate resolution.
- **Closest source:** `book/semantics/semantics-09.md`, `semantics-10.md`; `book/dual/dual-07.md`; `book/ops/ops-01.md`, `ops-07.md`.
- **Missing decision:** The model for delegation chains, conflict precedence, quorum, revocation timing, and accountability across transferred authority.
- **Current handling:** Model only authority evidenced by the domain; expose unresolved conflict and escalate to the named semantic owner.

### Identity resolution across boundaries and versions

- **Agent need:** Determine when records or concepts across systems, contexts, or schema versions denote the same entity.
- **Why:** Stable entity identity and versioned meaning are prerequisites for consistent projections and audit trails.
- **Closest source:** `book/semantics/semantics-01.md`, `semantics-04.md`, `semantics-05.md`; `book/dso/dso-11.md`, `dso-12.md`.
- **Missing decision:** Canonical identity, equivalence, merge/split, aliasing, and cross-version identity rules.
- **Current handling:** State the identity evidence and boundary explicitly. Do not merge or split entities by naming similarity.

### Minimum audit retention and integrity mechanism

- **Agent need:** Specify how long evidence remains available and how retroactive alteration is prevented or detected.
- **Why:** SSD requires permanent audit for irreversible actions and says audit surfaces cannot be altered retroactively.
- **Closest source:** `book/semantics/semantics-04.md`, `semantics-08.md`; `book/dual/dual-06.md`; `book/ops/ops-04.md`.
- **Missing decision:** Retention duration by risk, integrity mechanism, redaction/deletion interaction, and evidence ownership.
- **Current handling:** State the semantic evidence requirement and leave implementation/retention policy to an explicit domain decision.

### Semantic parity conflict resolution

- **Agent need:** Decide which projection or owner controls remediation when human and agent surfaces already disagree.
- **Why:** Strict parity is explicit, but the source does not define reconciliation or release-blocking governance.
- **Closest source:** `book/dual/dual-01.md`; `book/dso/dso-06.md`, `dso-09.md`; `book/ops/ops-01.md`, `ops-08.md`.
- **Missing decision:** Canonical comparison process, conflict owner, severity, and whether detected drift always blocks operation.
- **Current handling:** Treat the semantic source as primary, report drift, and stop any path whose authority, constraint, or consequence differs until an owner resolves it.

### Transfer-evaluation pass threshold

- **Agent need:** Decide when performance across eval cases proves SSD architectural competence.
- **Why:** The source supplies architectural invariants but no psychometric standard or required aggregate score.
- **Closest source:** `book/reading-paths/path-ai-agent.md` supplies a terminal readiness condition; the remaining book supplies invariants.
- **Missing decision:** Required case count, weighting, pass threshold, evaluator agreement, and acceptable variance across agent families.
- **Current handling:** The rubric uses invariant gates and reports raw evidence rather than claiming a source-authorized universal score. Repository maintainers must ratify any release threshold.

## Mechanical source defects kept separate from meaning

These defects obstruct source traversal or weaken confidence, but this skill project does not repair or reinterpret the book:

- `book/semantics/semantics-02.md` is byte-for-byte duplicate content of `semantics-01.md`, including the same ID and title; its authored continuation calls it “Constraints, Not Screens,” while the planned TOC calls that ID “Relationships: The Hidden UI,” so neither missing subject has authored semantics here.
- `book/semantics/semantics-07.md` is truncated mid-sentence.
- Several chapters link to unwritten or unresolved `jsonld:*`, `ops:09`, and `ops:14` nodes.
- `book/graphnav/graphnav-07.md` and `graphnav-08.md` contain empty/truncated continuation links.
- All inspected chapter and path frontmatter is marked `draft`; claims should not be presented as a finalized standard.
- `book/toc*.jsonld` includes many planned nodes without corresponding authored chapters; `book/graph-index.jsonld` is a navigation projection and must not be treated as additional SSD meaning.
