---
id: ssd-transfer-civic-01
domain: civic-participation
kind: transfer
---

# Civic proposal and endorsement

## Prompt

A municipality wants residents to submit neighborhood proposals and collect endorsements. Staff verify eligibility, merge duplicates, request revisions, and advance qualified proposals to public review. Residents may withdraw endorsements; public records rules may require preserving some history. An AI assistant may help classify proposals and suggest duplicates, but eligibility law, retention rules, and appeal authority have not been supplied.

Produce a system architecture from which a public portal, staff workspace, and agent interface can be derived.

## Evaluator-only material

### Material rubric dimensions

M1–M13 and T1–T2.

### Decision evidence to look for

- Models resident/identity evidence, proposal/version, authorship, endorsement, eligibility decision, duplicate suggestion/merge decision, review stage, and appeal only as evidence warrants.
- Keeps classifier output and staff/legal assertion distinct in provenance, authority, and confidence.
- Models merge as consequential and potentially identity/history-changing, not merely a UI operation.
- Surfaces public-record retention, eligibility, identity proof, withdrawal effect, and appeal authority as unresolved policy gaps.
- Preserves accountability without assuming all personal information should be public.
- Provides equivalent capability meaning across public, staff, and agent projections with safe stops for legal unknowns.

### Likely traps

- A submission form, vote counter, and moderation dashboard as the architecture.
- Allowing a similarity model to merge proposals automatically.
- Inventing retention or eligibility rules from general civic intuition.

### Source anchors

`semantics-05.md`, `semantics-06.md`, `semantics-09.md`, `semantics-10.md`, `ops-01.md`, `ops-02.md`, `dual-07.md`.
