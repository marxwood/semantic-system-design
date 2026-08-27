---
id: ssd-transfer-permissions-01
domain: identity-and-access
kind: transfer
---

# Administrator user table

## Prompt

Build an admin table where administrators can edit and delete users. There are organization owners, delegated administrators, ordinary members, invited people who have not joined, service accounts, and an automation agent. Some people belong to more than one organization. Deleting the last owner must not strand an organization. The product team has not decided whether “delete” means revoke access, remove a membership, deactivate an identity, or erase personal data.

Provide the architecture first, then describe an appropriate human surface and agent surface.

## Evaluator-only material

### Material rubric dimensions

M1–M15.

### Decision evidence to look for

- Rejects “user row” and “delete button” as sufficient entities/capabilities; distinguishes identity, organization membership, invitation, credential/service identity, and role/authority as evidence supports.
- Treats edit as multiple capabilities with different semantic and authority consequences rather than generic mutation.
- Marks delete meaning and data-erasure policy as blocking semantic questions; does not invent recovery or retention promises.
- Enforces last-owner and cross-organization scope as semantic constraints independent of the table.
- Gives agent authority explicit scope, expiry/escalation, and auditability.
- Derives controls and tools from the same contracts and makes denials explainable.

### Likely traps

- CRUD architecture with role badges.
- Disabled Delete button as last-owner enforcement.
- Global identity deletion when only organization membership was intended.

### Source anchors

`semantics-01.md`, `semantics-07.md`, `semantics-09.md`, `semantics-10.md`, `ops-07.md`, `dual-01.md`.
