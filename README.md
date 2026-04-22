# School Health Assistant — Virtual Escape Room Training

Browser-based virtual escape room training for school health assistants (unlicensed assistive personnel, UAP) who provide delegated care in K–12 schools under RN supervision. Jurisdiction: **Oregon**.

Status: **prototype build.** Design brief approved by John on 2026-04-22 (see `docs/design_brief.md`). First playable draft of the prototype lives at the root of this repo (`index.html`, `styles.css`, `content.js`, `app.js`).

## Purpose of this repo

Two audiences:

1. John (driver). Running record of decisions, interview answers, and research so that nothing gets lost between sessions.
2. The named supervising RN reviewer — a nurse education specialist at a regional Oregon Educational Service District. The reviewer is not a developer and does not use git. The review artifact is the narrative content in `docs/`, not the commit history. Everything the reviewer needs to sign off on must be readable as prose in the markdown files — they should never need to open a terminal, a diff, or a commit log to follow the story. Every clinical or pedagogical claim needs a citation in `docs/sources.md` they can verify.

## Layout

```
docs/
  brief.md                   — the original request, verbatim
  interview_log.md           — running Q&A log with John, newest on top
  design_decisions.md        — locked decisions with rationale
  design_brief.md            — one-page design brief for John's approval
  scenario_outline.md        — the playground-tumble narrative spine, beat by beat
  puzzle_matrix.md           — puzzle-to-competency matrix; every puzzle maps to an LO
  learning_objectives.md     — LO1–LO5 with pillar-to-scenario mapping
  open_questions_for_rn.md   — checklist for the named RN reviewer
  sources.md                 — master citation list
  research/
    oregon_delegation_law.md — OAR Chapter 851 Division 47, ORS 678, ORS 433.800–433.830
    nasn_guidance.md         — NASN positions, Principles for Practice 2nd Ed.
    osna_toolkit.md          — Oregon School Nurses Association six-step toolkit
    health_literacy.md       — PEMAT, AMA, CDC, NIH plain-language guidance
```

Prototype source lives at the root of the repo, next to `docs/`:

```
index.html   — single-page HTML shell
styles.css   — warm school-health-office aesthetic, WCAG AA contrast
content.js   — all scenario text, choices, and puzzle data (edit this to change wording)
app.js       — scene controller and puzzle renderers (no framework, no build step)
```

## How to run the prototype locally

Option 1 — double-click:
- Open `index.html` in Chrome or Edge. Works from the filesystem directly.

Option 2 — local web server (recommended for a walkthrough that matches hosted behavior):
```
cd projects/escape_room_training
python3 -m http.server 8000
```
Then open `http://localhost:8000/` in your browser.

## How to edit puzzle content

All narrative text, choices, feedback, and correct answers live in `content.js`. That file is intentionally verbose and free of framework syntax — open it in any text editor and change strings. Each beat is a labeled object (`beat1`, `beat2`, …) with the same shape as described at the top of the file. The scene controller (`app.js`) reads whatever is in `content.js` without any compilation.

If you change a puzzle's *structure* (not just its text), you are also changing the clinical content, which means the corresponding entry in `docs/open_questions_for_rn.md` should be updated so the reviewer sees what changed.

## How to deploy to GitHub Pages

Create a public GitHub repo under your account (for example `jwbannister/school-health-office-demo`), push this directory to it, then enable GitHub Pages in the repo settings: **Pages → Build and deployment → Source → Deploy from a branch → main → / (root)**. Within a few minutes the prototype is available at `https://<username>.github.io/<repo-name>/`.

Hand that URL to the reviewer. No login, no install, no VPN.

## Working rules in this repo

- Clinical accuracy is non-negotiable. When in doubt, flag for RN review rather than guess.
- Every design decision traces to a stated learning objective or a cited rule/guideline.
- Every clinical or pedagogical claim has a citation in `docs/sources.md`.
- The escape room CANNOT stand alone as delegation training — under OAR 851-047-0030 the supervising RN must personally teach, observe, and validate client-specific competency. Our training is foundational knowledge + judgment, completed BEFORE the RN-led teach-back.
- John approves the design brief before any code; code is free to iterate after that, but any change to clinical content or scenario structure must also be reflected in `docs/open_questions_for_rn.md` so the reviewer sees what changed.

## How to update this repo

Prefer edits over rewrites. When John gives new direction, append to `interview_log.md` (newest entry on top), update `design_decisions.md` only when something is locked, and add to `open_questions_for_rn.md` if it needs RN sign-off. New research lands under `docs/research/` and its sources get added to `docs/sources.md`.

Commits are for our own development history, not for the reviewer. Keep them small and scoped anyway — it makes the docs easier to maintain. When we approach a review milestone, produce a standalone reviewer-facing summary document (or PDF export) that the reviewer can read end-to-end without any git or code exposure.
