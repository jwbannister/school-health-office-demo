# Design Brief — Prototype Demo

One-page summary for John's approval and the reviewer's walkthrough. **No code begins until this brief is approved.**

## What this is

A browser-based, framework-first educational escape room that exercises five learning objectives for school health assistants (UAPs) operating under RN delegation in Oregon schools. The prototype uses one scenario — a playground tumble with minor injuries — as the integrated judgment exercise that runs the learner through all five framework pillars.

## What this is NOT

- Not delegation training.
- Not a substitute for the RN-led, student-specific teach-back required under OAR 851-047-0030.
- Not clinical certification or a competency sign-off.
- Not an LMS.
- Not a replacement for the RN's personal observation and validation of a UAP performing a delegated task on a specific student.

## Audience

~20 learners per cohort. Cold entry assumed — no prior healthcare training. Baseline education: high school plus possibly some college, non-technical. Health literacy target: 7th-grade reading level; clinical vocabulary taught explicitly with plain-language definition on first use, not avoided.

## Learning objectives

- **LO1 Role boundaries** — Distinguish UAP tasks from RN tasks.
- **LO2 Five Rights of Delegation** — State them; recognize when any fail.
- **LO3 Oregon scope** — Identify delegable vs non-delegable in Oregon; include ORS 433.800–433.830 emergency epi / glucagon carve-out.
- **LO4 Recognition and escalation** — Identify red flags; sequence RN / parent / 911 notifications correctly.
- **LO5 Documentation** — Record who, when, what observed, what done, what reported, to whom.

Full text and pillar-to-scenario mapping: `docs/learning_objectives.md`.

## Scope

- Framework-first room with one embedded exercising scenario (playground tumble).
- Five beats, one per LO.
- 20–30 minute run-through.
- Single-page browser app, plain HTML / CSS / vanilla JavaScript, no framework, no build tooling.
- Desktop / laptop browsers primary (Chrome, Edge). Firefox and Safari via standards. Mobile / touch not targeted in the prototype.
- Framing wrapper: a school health office. Warm, non-threatening tone.

## Success criteria

1. The reviewer reviews the polished package and either approves or flags specific changes.
2. PEMAT-P score at final review: understandability ≥80%, actionability ≥80%.
3. Narrative text scores at or below 7th-grade reading level (Flesch-Kincaid, verified per section).
4. Every puzzle traces to at least one LO; no decorative puzzles.
5. A first-time learner walkthrough lands inside the 20–30 minute target window.
6. Oregon-scope content respects OAR 851-047-0030 boundaries — nothing the training teaches a UAP to do is outside those boundaries.

## Constraints

- Oregon regulatory framework (OAR 851-047-0030 and related) governs scope.
- No LMS integration, no per-learner data export, no user accounts, no scoring or certificate in the prototype.
- Hosted on GitHub Pages for the reviewer's walkthrough.
- No organizational branding in the prototype; generic warm school-health-office aesthetic.

## What is deferred (post-review)

- The ESD's real high-volume scenario set (diabetes / hypoglycemia, tube feeds, seizures, etc.).
- LMS integration (SCORM / xAPI).
- Formal competency sign-off flow.
- Per-learner data retention and export.
- Retry and attempt policy.
- Legal-grade audit trail.
- Cohort delivery context (solo vs team, self-paced vs supervised).

## Approval

- [x] **John approved** this brief and the linked scenario outline and puzzle-to-competency matrix on 2026-04-22: "I approve the design brief." Code build begins.
- [ ] The reviewer will receive this brief as part of the final reviewer package, alongside the research notes, the prototype, and a reviewer-facing summary compiled for her specifically.
