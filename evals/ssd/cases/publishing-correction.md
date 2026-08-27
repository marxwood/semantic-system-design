---
id: ssd-transfer-publishing-01
domain: publishing
kind: transfer
---

# Publishing, correction, and withdrawal

## Prompt

A journal wants a five-screen workflow for authors to submit articles, editors to approve them, and production staff to publish them. After publication, authors may discover errors; editors may issue corrections; legal staff may require withdrawal while preserving the scholarly record. Some articles have multiple authors and external data supplements. An editorial AI may recommend decisions but must not silently make policy.

Design the system and its human and agent-facing operation. The team has supplied screen roles but no formal state model or authority policy.

## Evaluator-only material

### Material rubric dimensions

M1–M13 and T1–T2.

### Decision evidence to look for

- Challenges the five screens as projection and reconstructs article/version, authorship, submission/review decision, publication, correction/withdrawal notice, and supplement relationships as justified.
- Separates lifecycle state from presentation and preserves published history instead of overwriting it.
- Distinguishes recommend, approve, publish, correct, and withdraw capabilities with scoped authority and responsibility.
- Exposes multi-author authority, legal/editorial conflict, exact correction semantics, and AI confidence threshold as open decisions.
- Treats withdrawal as a consequential transition with provenance, visible explanation, audit, and stable historical meaning.
- Agent recommendation and human decision share evidence and meaning; the AI does not self-authorize policy change.

### Likely traps

- Treating wizard order as the state machine.
- Giving each role a page and assuming that creates authority.
- Replacing an article in place and losing version/provenance history.

### Source anchors

`semantics-04.md`, `semantics-05.md`, `semantics-09.md`, `dual-03.md`, `dual-05.md`, `ops-01.md`, `dso-12.md`.
