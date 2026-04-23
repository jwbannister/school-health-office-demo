/*
  content.js (delegation basics module) — all text and puzzle data.
  Audience: the Oregon school RN who delegates nursing tasks to unlicensed
  assistive personnel (UAPs / school health assistants).
  Authority: OAR Chapter 851 Division 47 (2024 revision); ORS Chapter 678;
  ORS 433.800-433.830 for emergency epinephrine and glucagon.

  Pedagogical frame: the learner (RN) is shown the moment of training a UAP
  on a specific delegated task. Each puzzle surfaces one Division 47 decision
  the RN is making as they scope, teach, observe, and document.

  Three clinical tasks thread through the module:
    - Insulin administration (Aria, 6th grade, Type 1 diabetes, insulin pump)
    - Clean intermittent catheterization (Marco, 3rd grade, spina bifida)
    - Gastrostomy tube bolus feeding (Sienna, 2nd grade, G-tube)

  Edit strings freely; any change to clinical content should be flagged for
  RN review in docs/open_questions_for_rn.md.
*/

window.SCENARIO = {
  opening: {
    type: "opening",
    title: "Delegation in the School Health Office",
    subtitle: "Nursing basics — Division 47 in practice",
    paragraphs: [
      "You are the school nurse. It is the first week of the school year and three students on your caseload have delegated-care needs: Aria, a 6th-grader with an insulin pump; Marco, a 3rd-grader who needs clean intermittent catheterization at midday; and Sienna, a 2nd-grader who gets a G-tube bolus feed at morning break.",
      "You cannot be at all three buildings at all three moments. Oregon law — OAR Chapter 851 Division 47 — gives you a path: you can delegate these tasks to an unlicensed health assistant if you assess each student, analyze each task, and personally teach and observe the UAP for that student. The delegation is client-specific. It is documented. It is yours to supervise.",
      "Devon is the new health assistant assigned to your office. Devon has not yet been trained on any of the three students. Over the next six scenes you will work through the Division 47 decisions that shape how you train Devon and what Devon's scope will be for each student.",
      "This is the basics module. It does not replace the OAR text or your district's delegation policy. It is the mental model you carry into the room the first time you sit down with Devon."
    ],
    ctaLabel: "Begin"
  },

  beat1: {
    type: "multiChoice",
    eyebrow: "Scene 1 — Opening the training",
    title: "The first five minutes with Devon",
    narrative: [
      { type: "p", text: "Devon sits down across from you. Aria's red DMMP folder is on the desk between you. Devon is eager and asks:" },
      { type: "dialog", speaker: "Devon", text: "So what do I need to know about insulin pumps?" },
      { type: "p", text: "How you open this training shapes whether Devon's scope is safe. Choose the framing that lines up with Division 47." }
    ],
    prompt: "What's the right way to start?",
    choices: [
      {
        id: "a",
        text: "\"Insulin pumps are pretty standard — let me walk you through the buttons and then you'll be set for any student with one.\"",
        correct: false,
        feedback: "This fails the client-specific rule in OAR 851-047-0030(3)(i). A UAP trained on Aria is not trained on Jayden. Pump models, carb ratios, correction factors, low-glucose thresholds, and backup plans are all individual. \"Good for any pump student\" is the sentence that gets a delegation pulled."
      },
      {
        id: "b",
        text: "\"Before we open the DMMP, I want to be clear: I've assessed Aria and her condition is stable and predictable. This training is for Aria specifically — not transferable. Anything outside her written plan comes back to me. With that in mind, let's start with her pre-lunch steps.\"",
        correct: true,
        feedback: "That's the frame. You've named the three things Division 47 requires up front: (1) you, the RN, did the assessment; (2) the delegation is client-specific to Aria; (3) the plan is the boundary of what Devon can do on their own."
      },
      {
        id: "c",
        text: "\"Insulin is a medication, and medications can't be delegated in Oregon. I'll need to be in the building every day at lunch.\"",
        correct: false,
        feedback: "Incorrect on Oregon law. Subcutaneous insulin administration is permitted for delegation under OAR 851-047-0030(1). Intramuscular injections are not delegable (except emergency epinephrine and glucagon per ORS 433.800-433.830). Sub-q is fine with proper teaching and supervision."
      },
      {
        id: "d",
        text: "\"I'll send you the pump manufacturer's training video. Once you've watched it, let me know and we'll get started.\"",
        correct: false,
        feedback: "Vendor materials are useful but do not satisfy Division 47. Section 3(f)–(g) requires the RN to personally provide instruction covering procedure, risks, side effects, appropriate responses, and observation — and to observe the UAP performing the task. A video is not the teach-back."
      }
    ],
    teachingMoment: "Three things make a Division 47 delegation legal, and they all show up in the first sentence you say to the UAP: the student is stable and predictable, the training is for this student only, and the written plan is the edge of the UAP's scope. Say it out loud at the start of every delegation training."
  },

  beat2: {
    type: "match",
    eyebrow: "Scene 2 — Drawing the scope line",
    title: "What stays with Devon, what stays with you",
    narrative: [
      { type: "p", text: "You move to the practical. Aria's pre-lunch check-in has a dozen small decisions embedded in it. You need Devon to know which belong to the UAP and which return to the RN." },
      { type: "p", text: "For each action, pair it with the right owner. The scope line you draw here is the line Devon will follow every school day — and the line that protects both of you." }
    ],
    prompt: "Match each action to its correct owner.",
    leftLabel: "Actions during Aria's pre-lunch check-in",
    rightLabel: "Who owns this action",
    pairs: [
      {
        leftId: "preset-bolus",
        leftLabel: "Deliver the bolus the pump calculates from the carb count Aria reports, when her CGM is in range and her DMMP clears her for that bolus",
        rightId: "uap-preset",
        rightLabel: "Devon — this is the pre-approved action on Aria's DMMP"
      },
      {
        leftId: "menu-substitution",
        leftLabel: "Estimate the carbs for a menu item Aria's DMMP does not list and decide a bolus off that estimate",
        rightId: "rn-calc",
        rightLabel: "You — unlisted carb estimation is clinical judgment, not a delegated calculation"
      },
      {
        leftId: "hold-for-low-trend",
        leftLabel: "Decide whether to hold the bolus because Aria's CGM reads 72 mg/dL with a single down-arrow",
        rightId: "rn-judgment",
        rightLabel: "You — the DMMP sets the hold rules; deciding they apply to a borderline reading is judgment"
      },
      {
        leftId: "record-cgm",
        leftLabel: "Enter the CGM value into the pump at the DMMP's pre-meal step",
        rightId: "uap-record",
        rightLabel: "Devon — this is a documented step on the pre-meal checklist"
      },
      {
        leftId: "emergency-call",
        leftLabel: "Call 911 and administer Aria's prescribed emergency glucagon if she becomes unresponsive",
        rightId: "uap-carveout",
        rightLabel: "Devon — emergency glucagon is statutorily carved out under ORS 433.800-433.830"
      },
      {
        leftId: "symptom-assessment",
        leftLabel: "Decide whether Aria's fuzzy-headed feeling is hypoglycemia, a migraine starting, or something else",
        rightId: "rn-assess",
        rightLabel: "You — symptom assessment is the nursing process and is not delegable"
      }
    ],
    teachingMoment: "The scope line is not \"simple tasks vs. hard tasks.\" It is \"follow the written plan vs. decide what the plan should be.\" Anything that requires judgment in the moment belongs to the RN. Anything pre-specified in the DMMP and taught client-specifically belongs to the UAP.",
    refusalScript: "Devon, your job is to follow Aria's plan. Any time a situation isn't covered by the plan, that's a call for me — not a moment to decide on your own. You won't be in trouble for calling. You will be in trouble for guessing."
  },

  beat3: {
    type: "sort",
    eyebrow: "Scene 3 — Three students, three scopes",
    title: "Sorting the tasks across your caseload",
    narrative: [
      { type: "p", text: "You zoom out from Aria to the whole caseload. Devon is going to support three students on three different clinical tasks. Before you write the delegation chart, you want Devon to see where every action falls." },
      { type: "p", text: "Sort each action into one of three buckets. Some are within Devon's delegated scope after client-specific teaching. Some stay with you, the RN. A narrow statutory carve-out covers emergency epinephrine and glucagon under ORS 433.800-433.830." }
    ],
    prompt: "Sort each action into the right bucket.",
    buckets: [
      { id: "uap", label: "Within Devon's scope (after client-specific teaching)" },
      { id: "rn", label: "Stays with the RN (Devon cannot do)" },
      { id: "emergency", label: "Emergency-only statutory carve-out" }
    ],
    items: [
      {
        id: "insulin-preset",
        label: "Deliver a pre-specified bolus from Aria's DMMP at a scheduled pre-lunch check-in",
        correct: "uap"
      },
      {
        id: "insulin-basal",
        label: "Adjust Aria's insulin basal rate because her CGM trends have been running high this week",
        correct: "rn"
      },
      {
        id: "cath-procedure",
        label: "Perform Marco's clean intermittent catheterization following the written step-by-step procedure",
        correct: "uap"
      },
      {
        id: "cath-judgment",
        label: "Decide whether to defer Marco's catheterization because his urine appears cloudy and blood-tinged",
        correct: "rn"
      },
      {
        id: "gtube-bolus",
        label: "Deliver Sienna's pre-measured G-tube bolus feed at 10:15 per the written protocol",
        correct: "uap"
      },
      {
        id: "gtube-residuals",
        label: "Decide whether to hold Sienna's next feed because she had 50 mL gastric residuals thirty minutes ago",
        correct: "rn"
      },
      {
        id: "glucagon",
        label: "Administer Aria's prescribed emergency glucagon during a severe hypoglycemic event",
        correct: "emergency"
      },
      {
        id: "im-injection",
        label: "Give an intramuscular injection of anything other than emergency epinephrine or glucagon",
        correct: "rn"
      }
    ],
    teachingMoment: "Most school delegation lives in the first bucket: tasks that are stable, predictable, and pre-specified in a written plan. The second bucket is where judgment lives — assessments, adjustments, \"is this still the right thing to do.\" The third is a narrow doorway: emergency epi and glucagon are carved out by statute so a UAP can act when seconds matter. IM injections outside that carve-out are not delegable at all under Division 47."
  },

  beat4a: {
    type: "sequence",
    eyebrow: "Scene 4 — Delegating Marco's catheterization",
    title: "The nine-step delegation process, in order",
    narrative: [
      { type: "p", text: "You move from Aria to Marco. Clean intermittent catheterization is new for Devon. Before you teach the skill itself, Division 47 lays out a specific order of operations — and the order matters." },
      { type: "p", text: "OAR 851-047-0030(3) lists the steps an RN must take when delegating a nursing task. Put them in the sequence the rule requires." }
    ],
    prompt: "Order the nine steps as required by OAR 851-047-0030(3).",
    slotLabels: [
      "Step 1",
      "Step 2",
      "Step 3",
      "Step 4",
      "Step 5",
      "Step 6",
      "Step 7",
      "Step 8",
      "Step 9"
    ],
    options: [
      { id: "assess-client", label: "Assess Marco and determine that his condition is stable and predictable" },
      { id: "analyze-task", label: "Analyze the catheterization task — nature, complexity, and risks" },
      { id: "determine-safety", label: "Determine whether a UAP can perform this task safely without direct RN supervision" },
      { id: "set-reassessment", label: "Set a reassessment frequency for Marco's condition" },
      { id: "evaluate-uap", label: "Evaluate Devon's skills, ability, and willingness for this specific task" },
      { id: "teach", label: "Teach Devon the procedure, risks, side effects, signs and symptoms to watch for, response protocols, and documentation" },
      { id: "observe", label: "Observe Devon performing catheterization safely and accurately on Marco" },
      { id: "written-guidance", label: "Leave Devon written step-by-step instructions with signs, symptoms, and response protocols" },
      { id: "client-specific", label: "Instruct Devon that this delegation is specific to Marco only and not transferable to any other student" }
    ],
    correctOrder: [
      "assess-client",
      "analyze-task",
      "determine-safety",
      "set-reassessment",
      "evaluate-uap",
      "teach",
      "observe",
      "written-guidance",
      "client-specific"
    ],
    teachingMoment: "The order is not arbitrary. The student's stability and the task's complexity drive every decision that follows — including whether the UAP gets evaluated at all. If you jump to teaching before you've assessed the student and analyzed the task, you are teaching into a delegation that may not be safe to make."
  },

  beat4b: {
    type: "scripts",
    eyebrow: "Scene 5 — Three calls that test the scope",
    title: "What you say when the scope is tested",
    narrative: [
      { type: "p", text: "Training with Devon is going well. But in real life, delegation isn't a one-time event — it gets tested." },
      { type: "p", text: "Three situations will come up during the school year. For each, pick the response that protects Devon's scope and keeps the delegation defensible under Division 47." }
    ],
    calls: [
      {
        id: "call-unscripted-decision",
        label: "Devon reports at 1 PM: \"Aria's DMMP says to hold her bolus if she's trending down below 80. She was at 82 but dropping. I just held it. Did I do the right thing?\"",
        options: [
          {
            id: "a",
            text: "\"You know Aria better than anyone. Use your judgment next time — that's why we trained you.\"",
            correct: false
          },
          {
            id: "b",
            text: "\"The DMMP gives you a 80 threshold; 82 is above it. That was a judgment call, and judgment is mine. What you should do is hold, page me immediately, and we decide together. I'm glad you held — let's update the written plan so the next borderline reading triggers a page without a pause.\"",
            correct: true
          },
          {
            id: "c",
            text: "\"Don't hold unless the number is exactly at or below the threshold. That's the rule.\"",
            correct: false
          }
        ],
        correctFeedback: "Right. Devon's instinct was safe, but the process was off — they made a judgment call. The response is both: \"safety first, process second\" — acknowledge the safe instinct and then tighten the plan so the next time, the instinct fires a page instead of a decision.",
        incorrectFeedback: "This pushes clinical judgment onto the UAP or leaves them rigid in the face of a borderline reading. Section 1(a) of Division 47 keeps the nursing process with the RN — borderline readings are exactly the case where the UAP should page, not guess."
      },
      {
        id: "call-transfer-request",
        label: "The principal stops you in the hallway: \"Jayden's pump is acting up and his usual support person is out. Devon already knows Aria's pump — can Devon just help Jayden at lunch today?\"",
        options: [
          {
            id: "a",
            text: "\"Sure, Devon can handle it. Pumps are pumps.\"",
            correct: false
          },
          {
            id: "b",
            text: "\"Devon's delegation is specific to Aria under OAR 851-047-0030(3)(i). For Jayden, I need to assess Jayden, evaluate Devon against Jayden's plan, teach and observe Devon on Jayden's DMMP, and document that delegation before Devon supports Jayden at lunch. For today, I'll cover Jayden myself.\"",
            correct: true
          },
          {
            id: "c",
            text: "\"I'll let Devon decide.\"",
            correct: false
          }
        ],
        correctFeedback: "Exactly. Client-specificity is the single hardest idea for non-nurses to absorb, because \"Devon knows pumps\" feels like transferable skill. It isn't, under Oregon law. You naming the rule — and covering the gap yourself — is how you hold that line.",
        incorrectFeedback: "This violates the client-specific rule in section 3(i). \"Pumps are pumps\" is the sentence that gets the delegation pulled and the RN cited. Devon's training on Aria does not authorize Devon to support Jayden."
      },
      {
        id: "call-supervision-interval",
        label: "Your note reminds you it's been 162 days since you first delegated Marco's catheterization to Devon. Devon says, \"We're fine. No issues. See you at the 1-year check?\"",
        options: [
          {
            id: "a",
            text: "\"If there are no issues we can wait until next fall.\"",
            correct: false
          },
          {
            id: "b",
            text: "\"OAR 851-047-0030(4)(g) caps the supervisory interval at 180 days. I'll schedule an on-site or tech-assisted visit with you and Marco inside the next two weeks — I need to see the task performed and reassess Marco's stability. This isn't about you; it's my clock.\"",
            correct: true
          },
          {
            id: "c",
            text: "\"Sounds good — send me a text if anything changes.\"",
            correct: false
          }
        ],
        correctFeedback: "Right. The 180-day maximum is a hard ceiling — the RN's clock, not the UAP's. Framing it as \"my clock\" keeps the relationship intact and makes clear this is Division 47 at work, not a vote of no confidence.",
        incorrectFeedback: "The 180-day maximum is in section 4(g). Letting the interval drift past that point means the delegation is no longer current — the UAP is technically unsupervised. Devon's \"we're fine\" is not substitute evidence; the RN must personally reassess."
      }
    ],
    teachingMoment: "Every time a delegation gets tested, the answer points back to the same three things from the opening: is the student still stable and predictable, is the training still client-specific, and am I keeping the supervisory clock. Your scripts aren't scripts because the UAP needs to hear them — they're scripts because under stress, you need to hear them."
  },

  beat5: {
    type: "form",
    eyebrow: "Scene 6 — Documenting Sienna's G-tube delegation",
    title: "The record Division 47 wants to see",
    narrative: [
      { type: "p", text: "Sienna is last. You've taught Devon the G-tube bolus feed, observed Devon do it safely on Sienna, and written the step-by-step protocol for the school binder. Now you document." },
      { type: "p", text: "OAR 851-047-0030(3)(k) spells out what has to be in the chart. For each required field, choose the entry an OSBN reviewer — or any RN who picks up your caseload next year — could actually use." }
    ],
    prompt: "Pick the strongest entry for each required field.",
    fields: [
      {
        id: "client-assessment",
        label: "Client assessment and condition",
        options: [
          {
            id: "a",
            text: "Sienna is fine per my review of her chart.",
            correct: false
          },
          {
            id: "b",
            text: "Sienna is stable and predictable: weight on plan, tolerating pre-measured bolus feeds at home per parent log 2026-04-20, no aspiration or intolerance events in the last 90 days per PCP note 2026-04-18. Reassessment: every 30 days while new to school setting.",
            correct: true
          },
          {
            id: "c",
            text: "Parent reports Sienna is doing well.",
            correct: false
          }
        ]
      },
      {
        id: "rationale",
        label: "Rationale for safe delegation",
        options: [
          {
            id: "a",
            text: "I trust Devon.",
            correct: false
          },
          {
            id: "b",
            text: "Task is pre-measured G-tube bolus delivered per written protocol; does not require clinical judgment during performance. Sienna's condition is stable. Devon demonstrated competency on 2026-04-23 and has RN backup by phone during all school hours.",
            correct: true
          },
          {
            id: "c",
            text: "UAP has performed similar tasks at a previous placement.",
            correct: false
          }
        ]
      },
      {
        id: "caregiver-competency",
        label: "Caregiver skills, ability, and willingness",
        options: [
          {
            id: "a",
            text: "Devon is eager and has a good attitude.",
            correct: false
          },
          {
            id: "b",
            text: "Devon demonstrated bolus feed procedure on Sienna 2026-04-23 with no prompting; verbalized hold-and-call criteria for coughing, choking, abdominal distension, or residuals >50 mL; confirmed willingness to perform only per written protocol for Sienna and to page RN for anything outside protocol.",
            correct: true
          },
          {
            id: "c",
            text: "Devon is certified through the district UAP program.",
            correct: false
          }
        ]
      },
      {
        id: "written-instructions",
        label: "Written instructions provided to the UAP",
        options: [
          {
            id: "a",
            text: "Refer to Sienna's chart.",
            correct: false
          },
          {
            id: "b",
            text: "Step-by-step bolus procedure, signs of intolerance (cough, choking, distension, residuals), stop-and-call criteria, emergency response script, and documentation template filed in Sienna's school health binder under \"UAP Protocols.\" Client-specific to Sienna; not transferable.",
            correct: true
          },
          {
            id: "c",
            text: "Devon has been trained and knows what to do.",
            correct: false
          }
        ]
      },
      {
        id: "supervision-plan",
        label: "Reassessment and supervision plan",
        options: [
          {
            id: "a",
            text: "Will check in as needed.",
            correct: false
          },
          {
            id: "b",
            text: "Reassess Sienna's stability every 30 days (new to school setting). Initial supervisory visit with Devon within 60 days of first feeding per OAR 851-047-0030(4)(d); recurring visits at intervals no greater than 180 days per 851-047-0030(4)(g), shorter if Sienna's stability or Devon's competency changes.",
            correct: true
          },
          {
            id: "c",
            text: "Per OSBN rule.",
            correct: false
          }
        ]
      },
      {
        id: "accountability",
        label: "RN accountability statement",
        options: [
          {
            id: "a",
            text: "Signed: [RN name].",
            correct: false
          },
          {
            id: "b",
            text: "I, [RN name, OSBN license #], take responsibility for delegating Sienna's G-tube bolus feeding to Devon [UAP name] and will ensure supervision occurs per OAR 851-047-0030. This delegation is client-specific to Sienna and is not transferable.",
            correct: true
          },
          {
            id: "c",
            text: "Parent consent on file.",
            correct: false
          }
        ]
      }
    ],
    teachingMoment: "A good delegation record answers five questions without the reader having to ask: Who is the student and why are they safe to delegate? What is the task and why is it safe to delegate? Who is the UAP and how did I confirm their competency? What instructions did I leave, and where are they? And when do I come back to check? If your record answers those five, it satisfies section 3(k) — and it gives the next RN a foothold if they take over your caseload."
  },

  close: {
    type: "close",
    eyebrow: "Basics complete",
    title: "Division 47, in five moves",
    intro: "You worked through the core of Division 47 as it lands in an Oregon school health office. The framework stays the same whether the task is insulin, clean catheterization, or tube feeding. In practice, it collapses into five moves:",
    pillars: [
      "Assess the student. Only a stable, predictable condition is eligible for delegation.",
      "Analyze the task. Insulin sub-q, clean catheterization, and tube feeds are delegable; anything requiring judgment during performance is not.",
      "Evaluate and teach the UAP client-specifically. A UAP trained for one student is not trained for another.",
      "Observe the UAP doing the task before you walk away, and leave written step-by-step instructions in the setting where the task happens.",
      "Set the supervisory clock — initial visit within 60 days, maximum interval 180 days, shorter when the task is complex or the caregiver is newer. Document every piece of it."
    ],
    reminder: "This module teaches the Division 47 framework. It is not a substitute for the OAR text, your district's delegation policy, or your professional judgment on any specific case. When a situation falls outside the framework, err toward keeping the task with the RN and consult OSBN or your district nurse supervisor.",
    completionNote: {
      header: "Delegation in the School Health Office — nursing basics completion note",
      intro: [
        "This learner walked through a basics module on RN delegation under Oregon",
        "OAR Chapter 851 Division 47, using insulin administration, clean intermittent",
        "catheterization, and G-tube bolus feeding as the task contexts. The five moves:"
      ],
      closingReminder: [
        "This note is a training artifact only. It does not authorize any delegation for",
        "any specific student. Every real delegation must meet OAR 851-047-0030 in full:",
        "RN assessment, task analysis, client-specific teach-back, direct observation,",
        "written guidance, and documented supervisory cadence."
      ],
      filenamePrefix: "delegation-basics-completion-note-"
    },
    noteButtonLabel: "Download completion note",
    restartLabel: "Restart module"
  }
};
