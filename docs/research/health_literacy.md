# Health Literacy — Targets and Scoring Approach

Research pass 2026-04-22. These are working-knowledge norms; the reviewer should verify before design sign-off.

## The distinction that matters

"Score the training for health literacy" collapses three different things. Our design keeps them separate:

1. **Readability** — mechanical grade level of the text. Flesch-Kincaid, SMOG, Fry. Easy to compute, easy to game. Answers only: are sentences short, are words common?
2. **Suitability** — how well the material serves its intended literacy audience as a whole piece of instructional design: layout, graphics, chunking, reinforcement, interaction, cultural appropriateness. Standard instruments are **PEMAT (AHRQ)** and **SAM (Doak, Doak & Root)**.
3. **Learner health literacy** — what the audience actually brings in. Measured with tools like NVS (Newest Vital Sign), REALM, TOFHLA. We do not pre-test our cohort, but the likely distribution shapes the design.

## Targets locked for this project

### Narrative / instructional text: 7th-grade reading level

- AMA Foundation guidance recommends 6th-grade for general patient-facing health material.
- CDC Clear Communication Index and NIH "Clear & Simple" align.
- Rationale for 6th–8th grade (not just pitching to the audience's nominal education level): under stress or cognitive load, people read several grade levels below their nominal ability. For a cohort of high-school-plus, non-technical adults who will be using this information in emergencies, 7th grade is a reasonable pitch.
- Locked by John on 2026-04-22.

### Clinical vocabulary: taught, not avoided

- UAPs must communicate accurate terms to the RN, parents, and EMS — e.g., "blood glucose of 52," "postictal," "anaphylaxis."
- Approach: plain-language definition on first use, glossary, spaced repetition.
- Stripping real clinical terminology out of the training would disserve learners who have to use those terms live.
- Locked by John on 2026-04-22.

### Final-product scoring: PEMAT-P

- AHRQ's Patient Education Materials Assessment Tool — Print (PEMAT-P) covers print/web content. (There is also a PEMAT-A for audiovisual, which we may need if audio segments land in the final build.)
- Targets: **understandability ≥80%, actionability ≥80%** — AHRQ's suitability thresholds.
- Gives us a concrete, defensible number the RN reviewer can audit against.
- Locked by John on 2026-04-22.

## Design rules this implies

1. **Run readability checks continuously during drafting**, not just at the end. Flesch-Kincaid on every block of narrative text; flag anything above 8th grade for rewrite.
2. **Every clinical term gets a plain-language gloss on first use**, and recurs with the gloss available via on-hover or on-tap so a reader never has to guess.
3. **Numeracy scaffolding.** Dosing, glucose values, insulin units, vitals — readability scores don't measure numeracy failures. Visual anchors (color-coded thresholds, number lines), interpretation tasks ("is 52 low or high?"), not recitation.
4. **Chunk and reinforce.** PEMAT-P rewards chunking, bullet points, and "teach one idea per screen." Our puzzle-per-objective structure should fit that naturally.
5. **Avoid instructional anti-patterns flagged by the brief.** No trivia puzzles, no puzzles that test memorization of irrelevant details, no gameplay that overshadows the content.
6. **Accessibility overlap.** Many WCAG 2.1 AA requirements (clear language, sufficient color contrast, alt text, keyboard navigability) also improve PEMAT scores. Design both at once rather than retrofitting.

## Open items for reviewer verification

- Verify PEMAT-P thresholds (80/80) are current AHRQ guidance.
- Confirm AMA Foundation's 6th-grade recommendation is still the current standard (it is long-standing, but should be checked).
- Check whether NASN or OSNA has published any school-health-assistant-specific health literacy standard; our search did not surface one but the reviewer may know.
- Decide at draft time whether we use PEMAT-A alongside PEMAT-P (if audio/video appears).

## Sources

See `docs/sources.md` — health literacy section.
