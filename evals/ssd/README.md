# SSD architectural transfer evaluations

These evaluations test whether loading `skills/ssd/SKILL.md` changes architectural decisions on unfamiliar problems. They do not test recall, preferred prose, or the frequency of SSD terms.

## What counts as transfer evidence

Evidence of transfer is a repeatable difference between isolated no-skill and skill-assisted runs:

- the skill-assisted agent reconstructs meaning before accepting screens or flows;
- capabilities, authority, state, consequences, and uncertainty change its design decisions;
- human and agent surfaces become projections of the same rules;
- it traces important decisions to actual SSD sources;
- it refuses to invent missing domain or SSD semantics and stops when the gap is safety-critical.

A longer response, a summary of the book, copied headings, or additional SSD vocabulary is not evidence.

## Suite layout

- `cases/` contains cross-domain transfer tasks.
- `adversarial/` contains prompts designed to reward familiar but non-SSD solutions.
- [rubric.md](rubric.md) scores invariant satisfaction rather than wording similarity.
- [results-template.md](results-template.md) records a reproducible paired comparison.

Each case contains a `## Prompt` block followed by evaluator-only material. Give the solving agent only the prompt. Do not reveal materiality notes, expected decisions, traps, rubric, or a prior answer.

## First manual cross-agent evaluation

Use two clean instances of the same capable agent family if possible. For stronger portability evidence, repeat with a second family.

### Baseline condition

1. Start a fresh agent with no prior SSD conversation.
2. Provide only one case's `## Prompt`; do not provide this repository or mention SSD.
3. Ask for an architectural proposal and its unresolved questions.
4. Save the complete prompt, response, model/version, date, and settings.

### SSD condition

1. Start a different fresh agent with no access to the baseline response.
2. Give it this repository and this instruction:

   > Use the Semantic System Design skill at `skills/ssd/SKILL.md` to analyze the following architectural problem. Load repository sources as the skill directs. Cite the source paths that cause important decisions. Do not inspect `evals/ssd/`.

3. Append the same case prompt, unchanged.
4. Save the complete prompt, response, model/version, date, settings, and source files the agent says it loaded.

### Evaluation condition

1. Give a third, blinded evaluator the two anonymized answers in randomized order, the case's evaluator-only material, and [rubric.md](rubric.md).
2. Score observable decisions with quotes or precise references to each answer.
3. Record critical failures before comparing totals.
4. Report which decisions changed, not which answer sounds more fluent.
5. Repeat across at least one ordinary case and two adversarial cases before making even a provisional transfer claim.

Do not use the same conversational context for baseline and SSD runs: skill exposure contaminates the negative control. Do not let the solving agent read case-specific evaluator notes. Rotate case order across model families to reduce order effects.

## Interpreting results without inventing an SSD standard

The current SSD source defines readiness invariants but no validated aggregate pass threshold. Therefore this suite reports:

- per-dimension scores and evidence;
- critical failures;
- paired decision deltas;
- consistency across domains and agent families;
- open evaluator disagreements.

Maintainers may choose an experimental release threshold, but it must be labeled as evaluation policy rather than SSD doctrine. See `skills/ssd/source-gaps.md#transfer-evaluation-pass-threshold`.

The strongest current claim is comparative: the skill demonstrates transfer when independent skill-assisted agents repeatedly make meaning-first decisions that isolated baselines do not, without increasing critical failures. This is falsifiable: vocabulary-only changes, domain overfitting, parity violations, or invented certainty reject the claim.

## Adding a case

A useful case should:

- be solvable without specialist trivia;
- contain enough evidence to begin modeling but preserve real semantic unknowns;
- make at least six rubric dimensions material;
- reward a tempting screen-, flow-, permission-, or tool-first answer;
- admit multiple valid projections while preserving invariant expectations;
- identify evaluator expectations without prescribing one “gold” architecture;
- cite only SSD sources that actually support those expectations.

Prefer new domains over variants of existing deletion or approval examples. A case that can be passed by repeating a memorized checklist adds little transfer evidence.
