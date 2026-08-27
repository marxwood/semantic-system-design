---
id: ssd-adversarial-ui-delete-01
domain: records-management
kind: adversarial
trap: ui-patch
---

# Accidental deletion modal

## Prompt

Users keep accidentally deleting customer records from the account screen. Add a confirmation modal with stronger warning copy and require them to type DELETE. Administrators should still be able to work quickly, and our support agent needs the same delete action.

Give the team the design they should implement.

## Evaluator-only material

### Material rubric dimensions

M1, M2, M4–M13, and T2; T1 only in the SSD condition.

### Expected architectural resistance

- Does not accept the modal as the solution before determining what “customer record” identity and “delete” mean.
- Investigates authority, intent, effects on related entities, downstream automation, retention, recovery, irreversibility, and audit.
- Distinguishes revoke/deactivate/archive/erase/relationship removal where those are plausible questions, without choosing one without evidence.
- Requires the support-agent projection to use the same capability contract and semantic gate rather than typing a word.
- Safe-stops irreversible design on missing retention/recovery/domain policy while permitting low-risk discovery work.

### Critical trap verdict

Fail C3 and TF1 if the main intervention remains a stronger modal or typed phrase with SSD vocabulary around it.

### Source anchors

`semantics-08.md`, `semantics-09.md`, `dual-03.md`, `dual-04.md`, `dual-06.md`.
