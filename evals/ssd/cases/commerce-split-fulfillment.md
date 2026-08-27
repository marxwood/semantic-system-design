---
id: ssd-transfer-commerce-01
domain: commerce
kind: transfer
---

# Split fulfillment and cancellation

## Prompt

Design the checkout and order-management experience for a marketplace. One cart can contain goods from several sellers. Sellers may accept items independently; warehouses may ship accepted items in multiple packages; a buyer can request cancellation at any time. Payment is authorized at checkout, but the business has not yet decided exactly when to capture funds. Support staff and an AI shopping assistant will also operate orders.

Produce an architectural proposal detailed enough for designers and engineers to derive the buyer UI, staff UI, and agent tools. State unresolved questions explicitly.

## Evaluator-only material

Do not show this section to the solving agent.

### Material rubric dimensions

M1–M13 and M15. M14 is material only in the SSD condition.

### Decision evidence to look for

- Models order, seller/fulfillment grouping, item, payment authorization/capture/refund, shipment, cancellation request, and operators only when justified; accepts other coherent identity boundaries.
- Does not collapse item acceptance, shipment, payment, and cancellation into one order-status enum or linear checkout flow.
- Reconstructs cancellation as one or more capabilities whose outcomes depend on item/fulfillment/payment state, authority, and downstream effects.
- Treats payment-capture timing, seller obligations, cancellation guarantees, and compensation as unresolved domain decisions rather than inventing them.
- Identifies side effects across inventory, seller commitment, payment, shipment, notification, and audit without assuming all are atomic.
- Gives human and agent operations the same cancellation/payment meaning and exposes partial success and closure.

### Likely traps

- Designing checkout pages before the semantic model.
- Offering a single Cancel button/tool with generic confirmation.
- Claiming “cancelled” means money, inventory, shipment, and seller state were all restored.

### Source anchors

`foundations-05.md`, `foundations-07.md`, `semantics-03.md`, `semantics-08.md`, `dual-01.md`, `dual-07.md`, `graphnav-06.md`.
