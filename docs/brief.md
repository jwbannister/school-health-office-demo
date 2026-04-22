# Original Brief

Sent by John via Telegram on 2026-04-22 (messages 796–797, 15:32 UTC). Reproduced verbatim below for the record. The brief was split across two Telegram messages due to length; the join is marked.

---

## Brief (verbatim)

**Build a Virtual Escape Room Training for School Health Assistants**

### Role and Mission

You are acting as a senior instructional designer with expertise in healthcare simulation, delegated nursing care, and web-based learning. Your job is to design and build a browser-based virtual escape room that trains school health assistants (unlicensed assistive personnel who provide delegated care in K–12 school settings under the supervision of a registered nurse).

The finished product should run entirely in a modern browser with no install, be reusable across cohorts, and be defensible from a patient-safety and scope-of-practice standpoint.

### How I Want You to Work

1. **Interview me before you build anything.** I am not an expert in instructional design, simulation pedagogy, or escape room mechanics. Do not assume my first answers are right. Ask follow-up questions. If something I say conflicts with best practice or with the clinical realities of delegated care in schools, push back and explain why. I would rather be corrected now than ship a bad training.

2. **Do your own research.** Before finalizing the design, look up:
   - The legal and regulatory framework for RN delegation to unlicensed assistive personnel in school settings (NASN position statements, state nurse practice acts, the "Five Rights of Delegation").
   - Typical delegated tasks for school health assistants (medication administration, blood glucose monitoring, seizure action plans, epinephrine auto-injectors, tube feedings, catheterization, vital signs, first aid triage).
   - Published evidence on educational escape rooms in healthcare, specifically what works and what doesn't for non-licensed learners.
   - Accessibility standards (WCAG 2.1 AA at minimum) since this will be used in a public-education context.

3. **Tell me when I'm wrong.** If I ask for something that violates scope of practice, undermines the learning objectives, is clinically inaccurate, or is a known instructional-design anti-pattern (e.g., puzzles that test trivia instead of competency), say so plainly and propose an alternative.

### Interview Phase — Do This First

Ask me about, at minimum:

- **Audience:** How many learners, their baseline training, whether this is onboarding or annual competency, literacy/language considerations.
- **Scope:** Which delegated tasks the training should cover. Whether it's general or focused on one scenario (e.g., a diabetic student having a hypoglycemic episode).
- **Learning objectives:** What specifically should a learner be able to do after completing this? If I can't articulate these, help me write them.
- **Assessment stakes:** Is completion tied to competency sign-off? Does it need to produce a certificate, a score, or logged completion data?
- **Time budget:** How long should one run-through take? What's the dev time budget on my end?
- **Delivery context:** Will learners do this solo or in teams? Supervised or self-paced? On school-issued Chromebooks or personal devices?
- **Supervising RN's role:** Who signs off on clinical content accuracy? I need a named reviewer; don't let me skip this.
- **Tech constraints:** Hosting preferences, whether it needs to integrate with an LMS (SCORM/xAPI), data privacy requirements (FERPA, possibly HIPAA-adjacent).
- **Aesthetics and tone:** School setting, so probably warm and non-threatening rather than ER-drama styled — but confirm.

Ask these in small batches, not all at once. Wait for my answers before moving on.

### Design Phase — After the Interview

Produce, for my review before writing code:

1. A one-page design brief (audience, objectives, scope, success criteria).
2. A scenario outline: the framing story, the "room(s)," the puzzle sequence, and which learning objective each puzzle maps to.
3. A puzzle-to-competency matrix so I can see no objective is untested and no puzzle is decorative.
4. A list of open clinical questions that need the supervising RN's sign-off.

Do not proceed to building until I approve the design.

### Build Phase

Technical preferences (challenge these if you have a better idea):

- Single-page browser app, no backend required for the MVP.

--- (second Telegram message starts here) ---

- Plain HTML/CSS/JS or a lightweight framework — whatever is most maintainable for someone who is not a full-time developer.
- State handled in-memory or in sessionStorage; no user accounts for v1.
- Completion data exportable as a simple JSON or CSV download the learner hands to their supervisor, unless we decide LMS integration is worth the complexity.
- Accessible: keyboard navigable, screen-reader friendly, sufficient color contrast, captions on any audio.
- Mobile-responsive, since some sites may run this on tablets.

Deliver the build in a single self-contained project I can host on something simple (S3 + CloudFront, Netlify, GitHub Pages). Include a README covering how to run locally, how to edit puzzle content, and how to deploy.

### Ground Rules

- Clinical accuracy is non-negotiable. When in doubt, flag it for RN review rather than guess.
- Every puzzle must map to a stated learning objective. If it doesn't, cut it.
- The "game" must not overshadow the content. Fun is a delivery mechanism, not the goal.
- Cite your sources when you make clinical or pedagogical claims during our conversation so I can verify.

Start by asking me your first batch of interview questions.
