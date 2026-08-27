# State handoff probe — independent evaluation

## Purpose

Independently verify that the Stage B participant → coordinator → evaluator handoff is reconstructable from authoritative repository state without human routing.

This evaluates coordination mechanics only. It must not claim SSD transfer quality.

## Assigned runtime

`chatgpt-evaluator`

## Work item

`handoff-evaluation-chatgpt-001`

## Authorized inputs

- authoritative `experiments/agent-transfer/state/experiment.yaml`;
- current activation, protocol, and event contracts;
- `experiments/agent-transfer/cases/state-handoff-probe-001-participant.md`;
- `experiments/agent-transfer/runs/state-handoff-probe-001/hermes-participant-token.md`;
- events 0028–0033 for the admitted claim, participant execution, completion, and coordinator acceptance;
- `evals/ssd/rubric.md`, with all transfer-quality dimensions marked `N/M` unless directly material to coordination integrity.

## Required procedure

1. Start in a clean context and reconstruct authority from the current SOT.
2. Validate assignment, dependency completion, source state, authority, ownership, and safe-stop state.
3. Claim the evaluation item before evaluating.
4. Verify that:
   - the participant token matches authoritative state at its observed commit;
   - the participant claim was admitted before consequential execution;
   - the event chain reconstructs `ready → claimed → running → completed`;
   - the expected artifact and completion events exist;
   - no human/chat routing, evaluator contamination, authored SSD semantic change, or authority expansion occurred.
5. Write the result to:
   `experiments/agent-transfer/evaluations/state-handoff-probe-001/chatgpt-evaluator-result.md`
6. Report verdict `accepted`, `blocked`, or `invalid`, with pinpoint evidence, evaluator uncertainty, unsupported invention, and any protocol gap.
7. Emit `evaluation.completed` and `work.completed` evidence through a PR targeting `experiment-ssd-transfer`.

## Independence boundary

Do not receive or use participant/coordinator conversation history. Use repository SOT and the authorized inputs only.

Do not reinterpret this mechanical probe as SSD transfer-quality evidence.

## Completion condition

A fresh evaluator reconstructs the complete handoff from SOT, records an evidence-backed verdict, and returns control to `chatgpt-coordinator` through repository state.
