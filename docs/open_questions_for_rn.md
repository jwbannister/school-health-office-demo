# Open Questions for the Supervising RN Reviewer

Everything here needs the named reviewer's eyes before the design brief is approved.

**Reviewer of record:** A nurse education specialist at a regional Oregon Educational Service District. Identity known offline to John; scrubbed from this repo for privacy. Named by John on 2026-04-22.

## Review coordination (to confirm with John)

- [ ] Has the reviewer been pre-briefed on this project, or will the review request be cold? Matters for pacing — design-phase sign-off shouldn't be our first contact with her.
- [ ] Preferred review format for the reviewer — markdown in a browser, a PDF compile, a printed packet, or a walk-through meeting? She does not use git; we need a format she can work with directly.
- [ ] How does the reviewer want to record her sign-off? A signed attestation file added to the repo, an email of record, or a more formal document?
- [ ] Confirm we can reach the reviewer when the time comes — contact details, availability, and whether John or Mike is the point of contact.

## Regulatory gaps I could not close

- [ ] **OAR 851-045-0062** — school-employed RN scope of practice. I could not retrieve clean text of this rule during the initial research pass (the chapter index loaded, not the rule body). May contain additional school-specific requirements that affect training design. Reviewer please pull current text and flag anything that changes our assumptions.
- [ ] **Oregon School Nurse Manual (ODE)** — PDF was unreadable on remote fetch. Reviewer please confirm whether the ODE manual prescribes any specific training format, competency checklist template, or annual re-training cadence that we must align with.
- [ ] **Five Rights of Delegation** — I cited the NCSBN/ANA framework generally but did not retrieve the current 2019 National Guidelines for Nursing Delegation text directly (OSNA toolkit references it). Reviewer please verify that the Five Rights phrasing we teach matches the current NCSBN/ANA 2019 wording.

## Clinical content — playground tumble prototype

All specifics below come from `docs/scenario_outline.md` and `docs/puzzle_matrix.md`. Each item is a separate ask of the reviewer.

### Beat 1 — first action choice
- [ ] Is "ask Mia to sit down, ask what happened, dismiss the teacher" the correct first action under Oregon / NASN guidance? Specifically: is "gather facts a nurse would want" framed correctly as non-assessment, or does that phrasing slip over a scope line?
- [ ] Any of the three distractor options (get Tylenol / send her back / immediately call parent) that we should replace with a more realistic wrong answer?

### Beat 2 — Five Rights for the Tylenol request
- [ ] Are the Five Rights phrased to current NCSBN / ANA 2019 wording? We have "right task, right circumstance, right person, right direction/communication, right supervision/evaluation." Please correct if off.
- [ ] For each Right, is our "why it fails for this request" phrasing clinically and legally accurate? In particular: "Right task — no RN delegation on file for Tylenol" and "Right person — a teacher cannot delegate" — phrasing OK?
- [ ] Is the refusal script ("Mr. Delgado, I can't give any medication without an order from our nurse…") the right tone for an Oregon school setting? Soften, sharpen, or keep?

### Beat 3 — scope sort
- [ ] Review the ten items in `scenario_outline.md` "Beat 3" and confirm each bucket assignment. Particular flags:
  - "Give Mia ibuprofen she has in her backpack" — we have this as Out of scope. Some schools allow self-administration of student-supplied OTCs with parental and RN authorization on file. We may need to nuance this; your call.
  - "Clear Mia to go back to class because she seems fine" — we have this as Out of scope (implies assessment). Is that right for Oregon, or is a UAP allowed to release a student to class in some circumstances?
  - "Administer emergency epinephrine if Mia has a known allergy action plan on file" — we have this as In scope per ORS 433.800–433.830. Confirm it's the right framing for the Oregon carve-out and that a student-specific allergy action plan is indeed the trigger condition.
- [ ] Any additional items you'd add to make the sort stronger?

### Beat 4a — escalation sequence
- [ ] For the described concussion-adjacent cue (increased headache, "feels weird," drowsiness after a head bump), is RN → parent → 911 the correct default sequence?
- [ ] Under what change-of-condition should a UAP call 911 BEFORE the RN? We should teach that as an explicit exception if it applies.
- [ ] Is the cue itself (increasing headache + "feels weird" + drowsiness) a correct canonical example of a concussion red flag at the UAP's level of recognition? Better alternatives?

### Beat 4b — scripts
- [ ] Review the RN, parent scripts in `scenario_outline.md` "Beat 4 — Step B" for accuracy, tone, and completeness. Specifically: do we have the right facts, named in the right order, without crossing into diagnostic language?
- [ ] Should there be a 911 script example, or is that beyond prototype scope?

### Beat 5 — incident form
- [ ] Review the field list (time, what the student reported, observations, actions taken, escalations) — add or remove fields to match a realistic Oregon school incident report.
- [ ] Review each correct example for objectivity and completeness.
- [ ] Review each incorrect example for plausibility — a good distractor is wrong in a way a real UAP might actually be wrong, not a cartoonishly obvious error.

### Cross-cutting
- [ ] The closing reminder to the learner ("this training covers the role you play. It does not authorize you to perform any specific delegated task for any specific student…"). Phrasing OK for the audience, or tune?
- [ ] Anywhere in the prototype where we have softened or simplified clinical detail for accessibility and the reviewer would prefer we tighten it.
- [ ] Anywhere in the prototype where the reviewer thinks we're teaching something that is technically correct but would mislead a new UAP in practice.

## Pedagogical choices to be reviewed

- [ ] Framing story / aesthetic — once drafted, confirm it is warm and non-threatening rather than dramatic, and does not trivialize emergencies.
- [ ] Puzzle-to-competency matrix — confirm each stated learning objective is exercised by at least one puzzle and no puzzle is decorative.
- [ ] Health-literacy grading — review against PEMAT-P independently.

## Process confirmations

- [ ] Confirm reviewer sees evidence that the training will be positioned as pre-teach-back foundational content, NOT as substitute delegation training.
- [ ] Confirm reviewer is willing to sign off in writing (attach to this repo) before any cohort runs the training.
