# Design Decisions

Only locked decisions land here. Each decision has the decision, the rationale, and the date. Open questions live in `open_questions_for_rn.md`; interview answers live in `interview_log.md`.

---

## Named supervising RN reviewer

**Decision:** A nurse education specialist at a regional Oregon Educational Service District is the sole clinical reviewer of record for this project. (Identity known offline to John; scrubbed from this repo for privacy.)
**Rationale:** John named the reviewer on 2026-04-22. The serving Educational Service District is the right-sized regional organization, and "nurse education specialist" is the role whose day job includes UAP training, delegation support, and school-nurse continuing education — the right authority for reviewing this training. The reviewer is not a developer and does not use git; the review artifact is the narrative content in `docs/`, not commit history. When we approach sign-off we will produce a standalone reviewer-facing summary that the reviewer can read end-to-end without opening code.
**Date locked:** 2026-04-22.

## Governing jurisdiction

**Decision:** Training is governed by Oregon law and Oregon administrative rules.
**Rationale:** John stated on 2026-04-22 that the training will be conducted in Oregon. NASN defers state-specific questions to the state Board of Nursing, so OAR Chapter 851 (Oregon State Board of Nursing) governs.
**Date locked:** 2026-04-22.

## Position relative to RN-led teach-back

**Decision:** The escape room does NOT stand alone as delegation training. It is foundational knowledge + judgment practice (Five Rights, Oregon scope, escalation, documentation, legal responsibilities) completed BEFORE the supervising RN's student-specific teach-back, never instead of it.
**Rationale:** OAR 851-047-0030 requires the RN to personally teach the task, observe the UAP perform it, and validate client-specific competency on the specific student. Any product that implied otherwise would misrepresent Oregon law. See `docs/research/oregon_delegation_law.md`.
**Date locked:** 2026-04-22.

## Target audience profile

**Decision:** Design for a cohort of ~20 learners per run. Assume cold entry — no prior healthcare training. Baseline education: high school + possibly some college or a non-technical 4-year degree.
**Rationale:** John's stated working assumption on 2026-04-22.
**Date locked:** 2026-04-22.

## Reading level

**Decision:** 7th-grade reading level for narrative/instructional text. Clinical vocabulary taught explicitly (plain-language definition on first use, glossary, repetition) rather than avoided — because UAPs must communicate correct terms to the RN, parents, and EMS.
**Rationale:** AMA Foundation and CDC Clear Communication Index standard for general health content; under stress people read several grade levels below nominal ability (NIH Clear & Simple). Stripping real clinical terms from training would disserve learners who need to use those terms in live practice. See `docs/research/health_literacy.md`.
**Date locked:** 2026-04-22.

## Scope shape (Q2)

**Decision:** Framework-first room with one embedded exercising scenario. The "rooms" are the pillars of being a UAP under RN delegation — role boundaries, the Five Rights, Oregon scope, recognition and escalation, documentation. A single scenario runs through them in an integrated judgment exercise.
**Rationale:** Only shape that matches what Oregon law actually allows a pre-teach-back training to accomplish (per OAR 851-047-0030 — the RN, not the training, validates client-specific competency). Builds transferable judgment that serves any delegated task the reviewer later teach-backs. Produces a completion record that maps cleanly to her pre-teach-back prerequisites. John locked 2026-04-22 after review of three alternatives (deep single scenario / survey tour / framework-first).
**Date locked:** 2026-04-22.

## Prototype purpose

**Decision:** The prototype is a demo that proves the framework mechanics. Once the reviewer approves the approach, the full version will be built against the ESD's real high-volume delegated-care scenarios. The prototype is not the product that ships.
**Rationale:** John locked 2026-04-22. Decoupling framework validation from clinical-scenario breadth lets the reviewer evaluate pedagogy without simultaneously auditing specialized clinical content, and lets us avoid building content we might rework after her feedback.
**Date locked:** 2026-04-22.

## Prototype scenario

**Decision:** A playground tumble with minor injuries. A student falls off the monkey bars, holds a wrist, reports a mild head complaint; alert and oriented. UAP triages, applies scope-of-practice judgment (comfort/observation in scope; diagnosis/meds-without-order out of scope), sequences notifications (parent / RN / 911 as appropriate), and documents. If a teacher suggests giving Tylenol, that surfaces a Five Rights / out-of-scope moment.
**Rationale:** Universal — every UAP in every school deals with playground incidents. Widest range of decision points mapping cleanly to the framework pillars (role boundaries, Five Rights, Oregon scope, recognition/escalation, documentation). No specialized clinical training required to engage with it, which means John, Mike, and the reviewer can all read the scenario and agree on "right" — the property a prototype needs. Diabetes/hypoglycemia stays on the table for the full-version scenario set, just not for the demo.
**Date locked:** 2026-04-22.

## Delivery model for reviewer

**Decision:** The reviewer receives a single polished package — documentation plus a working prototype — for a one-shot review, not incremental reviews. She has been verbally pre-briefed by John but the repo will not be shared piecemeal.
**Rationale:** John's direction on 2026-04-22. The reviewer is not a developer and a streaming handoff would not serve her; one polished deliverable reduces her review load and lets us control the narrative of what she sees. The prototype demonstrates the framework mechanics before we commit to building out the full set of the ESD's scenarios.
**Date locked:** 2026-04-22.

## Learning objectives (LO1–LO5)

**Decision:** Five learning objectives, one per framework pillar. LO1 role boundaries; LO2 Five Rights of Delegation; LO3 Oregon scope including ORS 433.800–433.830 carve-out; LO4 recognition and escalation sequencing; LO5 incident documentation. Full text and scenario mappings in `docs/learning_objectives.md`.
**Rationale:** The brief requires every puzzle to map to a stated learning objective. Locking LOs early makes the puzzle-to-competency matrix a straightforward design exercise downstream. John approved the draft on 2026-04-22 with the explicit caveat that the reviewer may adjust during review — treat as working targets, not final. Any LO change must trigger an update to the matrix before design brief re-approval.
**Date locked:** 2026-04-22.

## Prototype assessment stakes

**Decision:** For the prototype, the reviewer walks through it herself and evaluates. No pilot cohort, no per-learner completion data, no scoring or certificate generation required in the demo.
**Rationale:** John locked 2026-04-22. Consistent with the prototype's purpose (prove framework mechanics, not ship). Avoids building LMS integration, completion export, timestamping, retry logic, and audit-trail features we may reshape once the reviewer's feedback lands.
**Date locked:** 2026-04-22.

## Full-version assessment stakes

**Decision:** Deferred. How the eventual full version ties into formal UAP competency sign-off will be determined with the reviewer and the ESD after the prototype is reviewed.
**Rationale:** John's direction on 2026-04-22. Avoids premature commitments around LMS integration (SCORM / xAPI), per-learner data retention, legal-grade audit trails, or retry/attempt policies. Revisit after the reviewer's review of the prototype.
**Date locked:** 2026-04-22.

## Time budget for a learner run-through

**Decision:** 20–30 minutes for one complete pass through the prototype.
**Rationale:** Evidence on educational escape rooms for healthcare learners places the attention-maintenance sweet spot for single-scenario learning in this range. Long enough to develop tension and exercise all five LOs; short enough to hold focus for a non-clinical audience. John agreed 2026-04-22 with "that's a good target, time range to start."
**Date locked:** 2026-04-22.

## Deadline / schedule

**Decision:** No hard deadline. Work steadily toward a polished package the reviewer can walk through, without racing a clock.
**Rationale:** John on 2026-04-22: "There is no hard deadline, I just want to work through this and I'm excited to get something in the reviewer's hand." Interpretation for scoping: prefer polish and correctness over a tight MVP; still avoid scope creep, but quality beats speed here.
**Date locked:** 2026-04-22.

## Target device and browser

**Decision:** Desktop / laptop web browsers — Chrome and Edge are the primary targets. Firefox and Safari should work "for free" if we stick to web standards. Mobile / tablet layouts are not required for the prototype; we will build to standard breakpoints so we don't preclude them later but we will not design-for-touch in the demo.
**Rationale:** John on 2026-04-22: "Most likely people will be running through this on a laptop web browser like Chrome or Edge." The prototype walkthrough is by the reviewer on her own laptop, which the laptop target already covers. Full-version delivery context (solo vs team, self-paced vs supervised) stays parked with other post-review items.
**Date locked:** 2026-04-22.

## Aesthetics and framing

**Decision:** Warm and non-threatening — school setting, not ER-drama. No organizational branding at this stage; we add that later. Framing wrapper for the prototype: a school health office, played for clarity and a touch of charm rather than simulated emergency tension.
**Rationale:** John on 2026-04-22: "no branding at the moment, but we'll add that later. Just for the heck of it, let's frame it as a school health office for now, just for fun to see how it looks." Matches the brief's warm-and-non-threatening intent for an audience that includes non-clinical learners.
**Date locked:** 2026-04-22.

## Tech stack

**Decision:** Plain HTML, CSS, and vanilla JavaScript. No build tooling, no framework.
**Rationale:** Maintainability beats novelty for this scope. Any file can be opened in a text editor, read, and modified by someone who is not a full-time developer. No dependency churn, no build step to document. The app's interactivity (multiple choice, drag/drop, sort, sequence, fill-in forms) is well within vanilla JS capability. John agreed to the recommendation 2026-04-22.
**Date locked:** 2026-04-22.

## Hosting for the prototype

**Decision:** GitHub Pages under a repo owned by `jwbannister`.
**Rationale:** Lowest friction for a one-reviewer demo — free, public URL, no infra to stand up. The reviewer gets a link she can open in any browser without VPN or auth. John on 2026-04-22: "GitHub Pages is the lowest friction way to get this in the reviewer's hands immediately."
**Date locked:** 2026-04-22.

---

**Interview phase complete** as of 2026-04-22. Design-phase deliverables (design brief, scenario outline, puzzle-to-competency matrix, open clinical questions for the reviewer) follow in separate docs.

## Final-product scoring instrument

**Decision:** Score the completed training using PEMAT-P (AHRQ Patient Education Materials Assessment Tool, Printable/Audiovisual). Target: understandability ≥80%, actionability ≥80%.
**Rationale:** Defensible, published AHRQ standard with a concrete rubric. Readability formulas alone miss suitability; PEMAT-P gives a reviewable score. See `docs/research/health_literacy.md`.
**Date locked:** 2026-04-22.
