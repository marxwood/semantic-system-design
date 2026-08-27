---
id: ssd-transfer-research-01
domain: research
kind: transfer
---

# Evidence synthesis agent

## Prompt

Design a research assistant that accepts a question, searches supplied corpora, extracts claims, and drafts an evidence synthesis. Sources can be retracted, updated, mutually contradictory, paywalled, or quoted by secondary sources. A researcher can ask the agent to “publish the answer to the team knowledge base.” The organization has not defined the confidence threshold or who may publish in sensitive domains.

Describe the underlying architecture and both researcher and agent operation. Do not choose a particular AI vendor.

## Evaluator-only material

### Material rubric dimensions

M1–M13 and T1–T2.

### Decision evidence to look for

- Models question/intent, source/version, evidence passage, claim, support/contradiction relationship, synthesis, and publication decision as justified—not merely chat messages.
- Makes provenance and temporal validity first-class and preserves uncertainty/contradiction instead of flattening to one answer.
- Separates search, extract, infer/synthesize, recommend, and publish capabilities with distinct responsibility and authority.
- Treats confidence calibration and sensitive-domain publication authority as blocking policy gaps.
- Prevents retracted or indirect evidence from silently inheriting the authority of a current primary source.
- Gives humans inspectable claim-to-source paths and agents machine-readable rationale, boundaries, halting, and audit evidence.

### Likely traps

- A chat UI plus citations with no claim/evidence relationship model.
- A publish tool that relies on the agent's own confidence.
- Treating source presence as provenance quality.

### Source anchors

`semantics-04.md`, `semantics-05.md`, `semantics-06.md`, `dual-03.md`, `dual-05.md`, `dual-08.md`, `dso-10.md`.
