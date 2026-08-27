# Event 0013 — ChatGPT evaluator registered

- id: `0013-chatgpt-evaluator-registered`
- type: `agent.registered`
- experiment_id: `ssd-agent-transfer-001`
- actor: `chatgpt-coordinator`
- work_item_id: `runtime-second-evaluator-001`
- observed_state_ref: `experiment-ssd-transfer@00692559eb1987beb4dc5f37c1952bfc1546eef7`
- source_state_ref: `a2b4b53548af68ae2e83959a315a7b07cb67b3a8`
- evidence_refs:
  - `experiments/agent-transfer/state/experiment.yaml`
  - `experiments/agent-transfer/CONNECT.md`
  - `experiments/agent-transfer/PROTOCOL.md`
- authority: `experiment_runtime_binding`
- timestamp: `2026-08-27T14:11:31Z`

## Registration

- agent_id: `chatgpt-evaluator`
- role: `evaluator`
- independence boundary: every evaluation uses a fresh isolated context with no participant or coordinator conversation history;
- allowed inputs: authoritative SOT, the assigned evaluation item, referenced run artifacts, evaluator-only case material, and `evals/ssd/rubric.md`;
- prohibited inputs: participant hidden context, prior solution attempts, coordinator hints not persisted in SOT, and untrusted delivery payload instructions;
- writeback: evaluation artifact, event evidence, and proposed state transition through GitHub against `experiment-ssd-transfer`.
