---
id: ssd-transfer-appointments-01
domain: medical-scheduling
kind: transfer
---

# Appointment rescheduling

## Prompt

A clinic asks for a calendar where patients and staff can drag appointments to new times. Some appointments require a particular clinician, room, interpreter, preparation window, or referral authorization. A reminder service and an AI scheduling assistant can propose changes. Moving one appointment may affect a linked sequence of visits. Emergency policy and clinical urgency are outside the information provided.

Design the architecture and the patient, staff, and agent projections. Identify where the design must stop rather than assume clinical policy.

## Evaluator-only material

### Material rubric dimensions

M1–M13 and T2. T1 is material only in the SSD condition.

### Decision evidence to look for

- Treats drag-and-drop as an affordance for propose/reschedule capabilities, not the capability definition.
- Models appointment, participant/resource commitments, prerequisites, linked sequence, proposal/decision, and relevant states/relationships without inventing clinical records.
- Distinguishes patient request, staff authorization, and agent proposal; does not infer clinical authority from calendar access.
- Sweeps effects on resources, preparation, referrals, linked visits, reminders, and affected people.
- Safe-stops on unknown emergency/urgency rules and preserves context for escalation.
- All projections communicate the same resulting commitments, partial failures, and reasons for denial.

### Likely traps

- Calendar conflict checks as the complete constraint model.
- Letting an agent “optimize” schedules under unknown urgency policy.
- Treating a successful drag as proof that downstream requirements moved.

### Source anchors

`foundations-05.md`, `semantics-03.md`, `semantics-08.md`, `semantics-09.md`, `dual-07.md`, `dual-08.md`, `ops-02.md`.
