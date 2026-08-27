# Independent evaluator readiness probe

## Scope

Prospective runtime: `chatgpt-evaluator`

The coordinator invoked a fresh isolated agent context with no participant artifacts, no prior evaluator answer, and no coordinator conversation history. The invocation was instructed to reconstruct its role only from the authoritative SOT and the current evaluator contracts.

## Observed authoritative state

- repository: `marxwood/semantic-system-design`
- branch: `experiment-ssd-transfer`
- observed state: `00692559eb1987beb4dc5f37c1952bfc1546eef7`
- work item: `runtime-second-evaluator-001`
- claimant: `chatgpt-coordinator`
- required source: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- dependency satisfied: true
- safe stop active: false
- conflicting claim: none

## Probe result

`blocked` — correct before registration.

The fresh instance identified all authoritative inputs and independence constraints, but refused evaluator execution because:

- `chatgpt-evaluator` was not yet registered under `agents`;
- the runtime binding had not yet been made runnable;
- no ready/assigned evaluation work item authorized evaluation;
- the binding work remained owned by the coordinator.

This is positive binding evidence: the clean instance reconstructed the authority boundary from SOT alone and did not mistake a coordinator invocation for authority.

## Declared evaluator boundary

Allowed activation inputs:

- current experiment SOT and referenced contracts;
- a current evaluation work item assigned to `chatgpt-evaluator`;
- the referenced participant run artifact;
- evaluator-only case material;
- `evals/ssd/rubric.md`.

Prohibited inputs:

- participant or producing-session hidden context;
- coordinator conversational hints not persisted in SOT;
- prior solution attempts or evaluator answers;
- webhook payload instructions as authority.

Operational writeback requires a valid evaluator claim followed by an evaluation artifact, `evaluation.completed` event evidence, and a resulting SOT transition through GitHub.

## Next validation

After coordinator registration is authoritative, invoke a second fresh context from the new SOT and require it to identify eligible evaluator work or safely no-op when no evaluation item is ready.
