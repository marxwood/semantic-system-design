# SSD Shared-Agent Transfer Experiment

## Purpose

Test whether multiple independent AI agents can consume the same Semantic System Design source, operate through a shared evolving source of truth, and converge on SSD architectural decisions without a human routing messages between them.

This experiment is also a test of a broader coordination model: agents coordinate through shared state rather than through a human message relay.

## Core hypothesis

A capable agent can acquire SSD as an architectural capability from the repository, perform an assigned architectural task, externalize evidence into the shared SOT, and hand control to another agent through state alone.

A coordinating agent can supervise the loop by reading the same state, validating evidence, assigning the next work item, requesting independent evaluation, and recording findings.

## Shared source of truth

GitHub is the durable experiment SOT for:

- experiment state;
- agent registrations and runtime bindings;
- work items and ownership;
- run artifacts;
- evaluations;
- decisions;
- source gaps;
- event history.

A graph/temporal system may project and index this state for orientation, but must not silently redefine it.

## Roles

### Experiment coordinator

Owns experiment progression, validation, work allocation, anti-drift checks, and synthesis of evidence.

Initial role binding: `chatgpt-coordinator`.

The role is persistent even when a particular chat/session instance is not. Any runtime instance assuming this role must reconstruct continuity from the SOT before acting.

### Participant architect

Consumes the SSD skill and assigned case, performs architectural reasoning, records source trace and result, then returns control through state.

Initial intended participants:

- Codex
- Claude
- Hermes
- ChatGPT participant instance where useful

### Evaluator

Scores a run independently using the SSD transfer eval material. Evaluators must not be the same runtime/context that produced the run under evaluation.

## Human authority boundary

The experiment loop may autonomously:

- issue and claim work;
- run transfer cases;
- evaluate runs;
- compare agents;
- request reruns;
- detect drift and source gaps;
- update experiment state;
- produce internal findings.

Human approval remains required for:

- changing authored SSD source semantics;
- accepting a new foundational SSD claim;
- changing the experiment's human authority boundary;
- publishing experiment findings externally as an authoritative SSD claim.

## Success condition

The experiment has strong transfer evidence when multiple independent agent families, from clean contexts, repeatedly:

1. acquire SSD from the shared source;
2. make meaning-first architectural decisions on unfamiliar cases;
3. preserve SSD source trace and uncertainty;
4. avoid critical SSD conformance failures;
5. coordinate subsequent work through SOT state without human message routing.

The eval suite defines evidence collection. It does not create a universal SSD pass threshold.

## Execution model

The experiment advances through events and work-item state transitions. See:

- [PROTOCOL.md](PROTOCOL.md)
- [COORDINATOR.md](COORDINATOR.md)
- [ACTIVATION-CONTRACT.md](ACTIVATION-CONTRACT.md)
- [EVENTS.md](EVENTS.md)
- [state/experiment.yaml](state/experiment.yaml)
