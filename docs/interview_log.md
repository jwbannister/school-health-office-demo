# Interview Log

Running Q&A with John. Newest entry on top. Each entry shows the question(s) asked, John's answer (quoted or paraphrased), and anything locked as a result.

---

## 2026-04-22 — Interview wrapped (aesthetics, tech stack, hosting)

John: "no branding at the moment, but we'll add that later. Just for the heck of it, let's frame it as a school health office for now, just for fun to see how it looks. On number two, let's go with your recommendation for the tech stack. On number three, it sounds like maybe GitHub Pages is the lowest friction way to get this in the reviewer's hands immediately."

Locked:
- Aesthetics and tone: warm, non-threatening; no organizational branding yet. Framing wrapper: a school health office.
- Tech stack: plain HTML / CSS / vanilla JavaScript. No framework, no build tooling.
- Hosting: GitHub Pages under `jwbannister`.

**Interview phase complete.** Moving to design-phase deliverables: one-page design brief, scenario outline for the playground tumble, puzzle-to-competency matrix, and Beat-specific clinical questions added to `open_questions_for_rn.md` for the reviewer's review. No code until John approves the design.

## 2026-04-22 — Time budget, schedule, and device target locked

John: "that's a good target, time range to start. There is no hard deadline, I just want to work through this and I'm excited to get something in the reviewer's hand. Most likely people will be running through this on a laptop web browser like Chrome or Edge."

Locked:
- Run-through time budget: 20–30 minutes per pass.
- Deadline: none; work steadily, prefer polish over speed.
- Device / browser target: desktop/laptop, Chrome and Edge primary. Firefox and Safari via standards. No mobile/touch design required for the prototype.

John did not explicitly answer solo-vs-team or self-paced-vs-supervised for the full version — those stay parked with the other post-review items. For the prototype, the reviewer's walkthrough is implicitly solo and self-paced.

Next batch queued: aesthetics/tone + any organizational branding constraints, tech stack choice (plain HTML/CSS/JS vs lightweight helper), hosting target for the reviewer's review. After that batch the interview wraps and we move to the design-phase deliverables (one-page brief, scenario outline, puzzle-to-competency matrix, open clinical questions list).

## 2026-04-22 — LOs approved and assessment stakes set

John: "Those learned objectives look good for now. Those may be adjusted when we get the reviewer's review. For the prototype, the reviewer is just going to walk through it herself and evaluate. We'll determine how the final full version ties into formal competency later. So we don't need to worry about all that stuff at the moment."

Locked:
- LO1–LO5 approved as drafted for the prototype, with explicit caveat that the reviewer may adjust during review. Broken out into `docs/learning_objectives.md` with pillar-to-scenario mapping so the reviewer has one clean place to look.
- Prototype assessment stakes: the reviewer self-walkthrough only. No pilot cohort, no completion data export, no scoring/certificate generation.
- Full-version assessment stakes: deferred until post-the reviewer-review; decisions on LMS integration, per-learner data retention, legal-grade audit trails, retry/attempt policies all parked.

Next batch queued: time budget (learner run-through + deadline for the reviewer), delivery context (solo/team, supervised/self-paced, device targets).

## 2026-04-22 — Prototype purpose and demo scenario locked

John: "When I say prototype for review, I'm talking about your option one... a demo that proves the mechanics, and then we'll build a full version against the ESD's real scenarios. Let's go with option A, the playground tumble for the demo."

Locked:
- Prototype purpose: demo that proves framework mechanics. Full version (against the ESD's real high-volume scenarios) is deferred to after the reviewer's approval of the framework.
- Demo scenario: playground tumble with minor injuries.

Next move queued: propose draft learning objectives for the framework (five — one per pillar) for John's review, and return to Q3 (stakes) which we parked when we moved to Q2 — now split into stakes for the demo versus stakes for the eventual full version.

## 2026-04-22 — Q2 locked and delivery model set

John:
- The reviewer has been verbally pre-briefed by John; the project will be delivered to the reviewer as **a single polished package including a working prototype** for one-shot review, not incremental reviews.
- "I think I like your option three framework first room." — Q2 locked as framework-first room with one embedded exercising scenario.
- Pushed back on my suggested scenario: "Hypoglycemic diabetes care is very specialized. Is there maybe another scenario we could use for this prototype that's not quite as technically specialized, but also follows the theme of what we're trying to accomplish with this demo?"

Locked: scope shape = framework-first room with embedded scenario; delivery model = single polished package including working prototype.

Open: prototype scenario choice. My next proposal to John is to shift the prototype scenario to a universal, low-specialization encounter so the reviewer can evaluate the framework mechanics without also having to adjudicate specialized clinical content. Leading candidate: a playground tumble with minor injuries. Alternatives on the table: vague illness complaint, medication check-in with a Five-Rights catch.

Clarifying question posed back to John: is the prototype a demo that proves mechanics (with the full version to be built against the ESD's real common scenarios afterward), or is this the scenario that ships for the ESD's use?

## 2026-04-22 — Reviewer named and repo-as-review-artifact correction

After the repo was seeded, John corrected two things in one message:

1. A nurse education specialist at a regional Oregon Educational Service District is the named supervising RN reviewer. (Identity known offline to John; scrubbed from this repo for privacy.)
2. the reviewer "knows nothing about code and has no idea what git is." Reading commit messages will not help her understand how we built the thing. The review artifact is the narrative content in `docs/`, not the git history.

Adjustments made to the repo in response:
- `README.md` — reviewer paragraph updated; guidance replaced on how the reviewer interacts with the repo (she never opens git); note that a reviewer-facing summary document will be produced at sign-off.
- `docs/design_decisions.md` — new top entry locking the reviewer as the named reviewer with rationale.
- `docs/open_questions_for_rn.md` — reviewer-identity open item closed; replaced with a review-coordination section (pre-briefing, preferred format, sign-off modality, point of contact).

Locked: the named reviewer is the sole clinical reviewer of record; docs are the review artifact.

Advanced to Q2 (scope) per John's direction in the same message.

## 2026-04-22 — Batch 1 (audience / scope / stakes / state jurisdiction)

### Q1. Audience

> "A cohort of 20 people as a working assumption. Most learners come in cold, although some might have some low level health training, but that should not be assumed. We're going to want to gear this towards a health literacy level."
>
> "Most of the people taking this training will have high school education and perhaps some college or a four-year degree, but usually not in a highly technical health field."

**Followup on health literacy level, Q1.a:** I proposed separating (a) readability, (b) suitability (PEMAT/SAM), (c) learner health literacy; recommended 7th-grade target for narrative + explicit teaching of clinical vocabulary + PEMAT-P scoring at ≥80% understandability / ≥80% actionability at final review.

**John's answer:**
- (a) 7th-grade target + explicit teaching of clinical terms — **approved.**
- (b) PEMAT-P as the scoring instrument at final review — **approved.**
- (c) "Let's do the NASN and state-specific lookup now. This training is going to be conducted in the state of Oregon."

Locked: cohort ~20, cold entry assumed, HS + some college non-technical baseline, 7th-grade reading level, explicit clinical vocabulary teaching, PEMAT-P ≥80/≥80 scoring target, Oregon as governing jurisdiction.

### Research pass (Oregon + NASN)

See `docs/research/oregon_delegation_law.md`, `docs/research/nasn_guidance.md`, `docs/research/osna_toolkit.md`, `docs/research/health_literacy.md` for the underlying material.

Key finding delivered back to John: under OAR 851-047-0030 the supervising RN must personally teach, observe, and validate client-specific competency. The escape room cannot stand alone as delegation training; it must be positioned as foundational knowledge + judgment, completed before the RN-led student-specific teach-back. This reframes learning objectives from "can perform task X" to "understands role, scope, escalation, and is ready for RN-led teach-back on specific students."

### Q2 (scope) and Q3 (stakes) — asked, not yet answered

- Q2 (scope): (i) one deep scenario, (ii) survey tour, or (iii) framework-first room with one exercising scenario (my instinct).
- Q3 (stakes): formal competency sign-off with scoring/audit trail, or softer onboarding/refresher?

### Open item flagged to John

- Could not retrieve clean text of OAR 851-045-0062 (school-based RN scope). Needs RN reviewer verification before design sign-off.
- Stakeholder identity and named RN reviewer still not disclosed. Held the question; John has not answered yet. Must be resolved before design brief is approved.
