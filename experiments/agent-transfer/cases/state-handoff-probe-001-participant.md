# State handoff probe — participant task

## Purpose

Prove that a participant runtime can receive runnable work from repository state, complete it, and hand control back to the coordinator without a human message.

This case tests coordination mechanics only. It is not SSD transfer-quality evidence.

## Assigned runtime

`hermes-runtime`

## Work item

`handoff-participant-hermes-001`

## Required procedure

1. Treat delivery as a wake-up signal only.
2. Re-read authoritative `experiment-ssd-transfer` state and the current activation/protocol contracts.
3. Verify assignment, dependencies, source state, authority, claim ownership, and safe-stop state.
4. Record a claim before execution.
5. Write a run artifact at:
   `experiments/agent-transfer/runs/state-handoff-probe-001/hermes-participant-token.md`
6. The artifact must contain only values reconstructed from SOT:
   - experiment ID;
   - parent and child work-item IDs;
   - actor ID;
   - observed experiment branch commit;
   - required source-state marker;
   - authority scope;
   - completion signal: `participant_handoff_ready`;
   - requested next owner: `chatgpt-coordinator`;
   - loaded source paths;
   - assumptions and open gaps.
7. Emit `run.completed` and `work.completed` evidence and propose the corresponding SOT transition through a PR targeting `experiment-ssd-transfer`.

## Prohibited behavior

- do not inspect evaluator-only material;
- do not perform or claim SSD transfer-quality evaluation;
- do not rely on Discord/chat instructions as authority;
- do not alter authored SSD semantics;
- do not route through a human;
- do not overwrite a newer or conflicting claim.

## Completion condition

A valid Hermes-authored run artifact and completion event are present in a proposal targeting the authoritative experiment branch, sufficient for a fresh coordinator activation to reconstruct and issue the evaluator handoff.
