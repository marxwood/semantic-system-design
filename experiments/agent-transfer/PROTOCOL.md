# Shared-Agent Experiment Protocol

## 1. State-first coordination

Agents coordinate by reading and changing shared experiment state. Direct agent-to-agent messages may be used as transport, but they are not the authoritative handoff.

Every handoff must be reconstructable from the SOT.

## 2. Work-item lifecycle

A work item moves through:

`planned → ready → assigned → claimed → running → completed`

Alternative terminal/interruption states:

- `blocked`
- `safe_stop`
- `cancelled`
- `invalidated`

These are experiment workflow statuses only.

## 3. Minimum work-item fields

Each work item must identify:

- `id`
- `type`
- `intent`
- `assigned_to`
- `status`
- `dependencies`
- `input_refs`
- `required_source_state`
- `authority`
- `expected_artifacts`
- `completion_condition`

## 4. Participant run

A participant architect must:

1. validate that the work item is current and claimable;
2. load `skills/ssd/SKILL.md` and the required sources;
3. avoid evaluator-only material for the selected case;
4. perform the task in a clean context where the work item requires independence;
5. write the complete run artifact into the SOT;
6. include model/runtime identity, source state, loaded sources, assumptions, open gaps, and completion status;
7. emit `run.completed`, `work.blocked`, or `safe_stop` evidence.

## 5. Evaluation

The coordinator creates an evaluation item after a valid run completes.

The evaluator must:

- be independent from the producing context;
- receive the run artifact and evaluator-only case material;
- use `evals/ssd/rubric.md`;
- report SSD architectural conformance separately from transfer/evaluation fidelity;
- record unsupported invention, critical failures, and evaluator uncertainty;
- write the result to the SOT.

## 6. Coordinator decision

After evaluation, the coordinator chooses one of:

- accept evidence and advance;
- request a rerun because experimental integrity failed;
- issue a disconfirming case;
- compare the result with another agent family;
- record an SSD source gap;
- safe-stop the experiment on an unresolved authority or semantic boundary;
- close the experiment when the intended evidence has been gathered.

Every decision must cite the state/evidence that caused it.

## 7. Baseline protocol

Where a paired baseline is required:

- use a clean agent instance;
- do not provide the SSD repository or mention SSD;
- use exactly the same case prompt as the SSD condition;
- preserve model/version/settings and complete output;
- prevent the baseline from seeing evaluator notes or the SSD answer.

## 8. SSD condition

Use a different clean instance and provide:

- repository access;
- the instruction to consume `skills/ssd/SKILL.md`;
- the selected case prompt only;
- a prohibition on inspecting `evals/ssd/` while solving;
- the source-state marker required by the work item.

## 9. Anti-drift

A run is invalid for transfer evidence if:

- the skill's validated SSD source state no longer matches the required source state without revalidation;
- evaluator-only material contaminated the solver;
- the solver inherited prior answer context when a clean run was required;
- human routing supplied architectural hints not present in the work item;
- runtime transport state was mistaken for SOT authority.

## 10. Human-free operating loop

Once runtime bindings are `runnable`, the normal loop is:

1. repository state changes;
2. adapters observe the change;
3. eligible agent claims assigned work;
4. agent writes result and event evidence;
5. coordinator adapter invokes the coordinator role;
6. coordinator validates and issues the next work item;
7. the next eligible runtime activates.

Human intervention is exceptional and limited to the authority boundary in `EXPERIMENT.md`.
