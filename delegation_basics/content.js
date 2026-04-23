/*
  content.js (delegation basics module) — all text and puzzle data.
  Audience: the Oregon school RN who delegates nursing procedures to
  unlicensed assistive persons (UAPs / school health assistants).
  Authority: Oregon Nurse Practice Act, OAR Chapter 851 Divisions 45 and 47
  (Div 47 revised 2024); ORS Chapter 678; ORS 433.800-433.830 for emergency
  epinephrine and glucagon. District-level alignment: MESD School Health
  Services "Delegating to Unregulated Persons" (rev. 5/2025) and the MESD
  "Guide to Division 47 Delegation in Schools" (rev. 8/14/2025).

  Pedagogical frame: the learner (RN) is shown the moment of training a UAP
  on a specific delegated nursing procedure. Each puzzle surfaces one
  Division 47 decision the RN is making as they scope, teach, observe, and
  document.

  Three nursing procedures thread through the module — the three commonly
  delegated in SHS school settings:
    - Diabetes management (Aria, 6th grade, Type 1, insulin pump)
    - Clean intermittent catheterization, CIC (Marco, 3rd grade)
    - Gastrostomy tube bolus feeding (Sienna, 2nd grade)

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
      "You cannot be at all three buildings at all three moments. Oregon law — the Nurse Practice Act, OAR 851 Division 47 — and MESD's SHS delegation policy give you a path: you can delegate these nursing procedures to an unlicensed assistive person (UAP) if you assess each student, analyze each procedure, and personally teach and observe the UAP for that student. The delegation is student-specific. It is documented. It is yours to review.",
      "Devon, an educational assistant, has been selected to support your office. Devon has not yet been trained on any of the three students. Over the next six scenes you will work through the Division 47 decisions that shape how you train Devon and what Devon's scope will be for each student."
    ],
    ctaLabel: "Begin"
  },

  beat1: {
    type: "multiChoice",
    eyebrow: "Scene 1 — Opening the training",
    title: "The first five minutes with Devon",
    narrative: [
      { type: "p", text: "Devon sits down across from you. Aria's diabetic action plan is on the desk between you. Devon is eager and asks:" },
      { type: "dialog", speaker: "Devon", text: "So what do I need to know about insulin pumps?" },
      { type: "p", text: "How you open this training shapes whether Devon's scope is safe. Choose the framing that lines up with Division 47." }
    ],
    prompt: "What's the right way to start?",
    choices: [
      {
        id: "a",
        text: "\"Insulin pumps are pretty standard — let me walk you through the buttons and then you'll be set for any student with one.\"",
        correct: false,
        feedback: "This fails the student-specific rule in OAR 851-047-0030(3)(i). A UAP trained on Aria is not trained on Jayden. Pump models, carb ratios, correction factors, low-glucose thresholds, and backup plans are all individual. \"Good for any pump student\" is the sentence that gets a delegation pulled."
      },
      {
        id: "b",
        text: "\"Before we open Aria's diabetic action plan, I want to set the frame: I've assessed Aria and her condition is stable and predictable. The plan spells out which skills you'll be trained to do for her — carb counting, insulin via pump, low and high BG response, emergency glucagon — and the thresholds that decide when you act, when you hold, and when you call me. This training is specific to Aria. Let's start with her pre-lunch steps.\"",
        correct: true,
        feedback: "That's the frame. You've named the three things Division 47 requires up front: (1) you, the RN, did the assessment; (2) the delegation is specific to Aria and not transferable; (3) the plan is the boundary — everything the plan trains Devon in, Devon does; anything outside the plan comes back to you."
      },
      {
        id: "c",
        text: "\"Insulin is a medication, and medications can't be delegated in Oregon. I'll need to be in the building every day at lunch.\"",
        correct: false,
        feedback: "Incorrect on Oregon law. Subcutaneous insulin administration is permitted for delegation under OAR 851-047-0030(1) and is a standard school delegation when the UAP has been trained per the diabetic action plan. IM injections are not delegable except for emergency epinephrine and glucagon per ORS 433.800-433.830."
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
      { type: "p", text: "You move to the practical. Aria's diabetic action plan specifies the skills Devon will be trained in: carb counting, insulin via pump, low BG treatment, emergency glucagon, and the thresholds that govern each. Most of Aria's school-day diabetes care will be Devon's to execute." },
      { type: "p", text: "That still leaves a line. Some actions belong to you — not because Devon can't be trusted, but because they're outside what the plan authorizes a trained UAP to do. Pair each action with its correct owner." }
    ],
    prompt: "Match each action to its correct owner.",
    leftLabel: "Actions in Aria's day-to-day diabetic care",
    rightLabel: "Who owns this action",
    pairs: [
      {
        leftId: "carb-count",
        leftLabel: "Count the carbs in a home-packed lunch Aria brings from home and enter them as the pre-meal step",
        rightId: "uap-carb",
        rightLabel: "Devon — carb counting is a trained skill on Aria's diabetic action plan"
      },
      {
        leftId: "preset-bolus",
        leftLabel: "Deliver the bolus the pump calculates once the carbs and CGM are entered, when the plan clears that dose",
        rightId: "uap-bolus",
        rightLabel: "Devon — insulin via pump per the plan is a delegated skill, trained in the insulin delegation procedure"
      },
      {
        leftId: "follow-hold-rule",
        leftLabel: "Hold the pre-lunch bolus because Aria's CGM reads 72 mg/dL — below the plan's 80 threshold — and begin the low BG protocol",
        rightId: "uap-rule",
        rightLabel: "Devon — the plan sets an 80 threshold; 72 is below it, so Devon follows the written hold-and-treat rule"
      },
      {
        leftId: "change-threshold",
        leftLabel: "Raise Aria's low-glucose threshold from 80 to 90 in the diabetic action plan after two unexplained lows this month",
        rightId: "rn-change",
        rightLabel: "You — changing the plan's thresholds is reassessment, not delegation"
      },
      {
        leftId: "emergency-call",
        leftLabel: "Call EMS and administer Aria's prescribed emergency glucagon if she becomes unresponsive",
        rightId: "uap-carveout",
        rightLabel: "Devon — emergency glucagon is statutorily carved out under ORS 433.800-433.830"
      },
      {
        leftId: "symptom-assessment",
        leftLabel: "Decide whether Aria's fuzzy-headed feeling is hypoglycemia, dehydration, or the start of a migraine, and choose the response",
        rightId: "rn-assess",
        rightLabel: "You — differential assessment is the nursing process and is not delegable"
      }
    ],
    teachingMoment: "The scope line is not \"simple tasks vs. hard tasks.\" It is \"follow the plan vs. change the plan.\" A trained UAP can count carbs, run the pump, treat lows, treat highs, give emergency glucagon — everything the diabetic action plan trains them in is theirs to execute. What stays with you is writing the plan: assessing the student, setting and changing thresholds, interpreting new or unclear symptoms, and deciding when the plan itself needs to change.",
    refusalScript: "Devon, your job is to follow Aria's plan. Any time a situation isn't covered by the plan, that's a call for me — not a moment to decide on your own. You won't be in trouble for calling. You will be in trouble for guessing."
  },

  beat3: {
    type: "sort",
    eyebrow: "Scene 3 — Three students, three scopes",
    title: "Sorting the tasks across your caseload",
    narrative: [
      { type: "p", text: "You zoom out from Aria to the whole caseload. Devon is going to support three students on three different clinical tasks. Before you write the delegation chart, you want Devon to see where every action falls." },
      { type: "p", text: "Sort each action into one of three buckets. Some are within Devon's delegated scope after student-specific teaching. Some stay with you, the RN. A narrow statutory carve-out covers emergency epinephrine and glucagon under ORS 433.800-433.830." }
    ],
    prompt: "Sort each action into the right bucket.",
    buckets: [
      { id: "uap", label: "Within Devon's scope (after student-specific teaching)" },
      { id: "rn", label: "Stays with the RN (Devon cannot do)" },
      { id: "emergency", label: "Emergency-only statutory carve-out" }
    ],
    items: [
      {
        id: "insulin-preset",
        label: "Deliver a pre-specified bolus from Aria's diabetic action plan at a scheduled pre-lunch check-in",
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
      { type: "p", text: "OAR 851-047-0030(3) lists the steps an RN must take when delegating a nursing procedure. Put them in the sequence the rule requires." }
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
      { id: "student-specific", label: "Instruct Devon that this delegation is specific to Marco only and not transferable to any other student" }
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
      "student-specific"
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
        label: "Devon reports at 1 PM: \"Aria's CGM was 82 with a strong down-arrow at lunch. The plan says hold below 80. I held the bolus anyway because the arrow made me nervous. Did I do the right thing?\"",
        options: [
          {
            id: "a",
            text: "\"You know Aria better than anyone. Trust your gut on those borderline calls in the future.\"",
            correct: false
          },
          {
            id: "b",
            text: "\"Your instinct was safe, but the action wasn't in the plan — 82 is above the 80 threshold, so by the plan you deliver the bolus. When the situation sits between the plan's rules, the move is to page me first and hold second, so we act together. Let me update the plan so a strong down-arrow near the low threshold has its own written rule — then next time, it's not a judgment call for either of us.\"",
            correct: true
          },
          {
            id: "c",
            text: "\"No, when CGM is 82 you bolus. Thresholds are strict and I don't want you deviating.\"",
            correct: false
          }
        ],
        correctFeedback: "Right. A trained UAP follows the plan, they don't interpret it. Devon's safety instinct was correct, but they acted outside the plan — the right sequence is call-then-act, not act-then-report. Your job in this moment is to honor the instinct, draw the line, and tighten the plan so next time the instinct is written into the rules.",
        incorrectFeedback: "Option (a) authorizes deviation — a trained UAP's scope is what the plan trains them in, not what feels right in the moment. Option (c) is too rigid given Aria's safety risk, and misses the teaching opportunity. The correct response does both: honor the safety call, and tighten the plan so the rule covers this case next time."
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
            text: "\"Devon's delegation is specific to Aria under OAR 851-047-0030(3)(i). For Jayden, I need to assess Jayden, evaluate Devon against Jayden's plan, teach and observe Devon on Jayden's diabetic action plan, and document that delegation before Devon supports Jayden at lunch. For today, I'll cover Jayden myself.\"",
            correct: true
          },
          {
            id: "c",
            text: "\"I'll let Devon decide.\"",
            correct: false
          }
        ],
        correctFeedback: "Exactly. Client-specificity is the single hardest idea for non-nurses to absorb, because \"Devon knows pumps\" feels like transferable skill. It isn't, under Oregon law. You naming the rule — and covering the gap yourself — is how you hold that line.",
        incorrectFeedback: "This violates the student-specific rule in section 3(i). \"Pumps are pumps\" is the sentence that gets the delegation pulled and the RN cited. Devon's training on Aria does not authorize Devon to support Jayden."
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
            text: "\"MESD policy and OAR 851-047-0030 cap subsequent delegation-review intervals at 180 days — miss it and the delegation automatically expires and we'd have to restart. I'll schedule a delegation review with you and Marco inside the next two weeks — I need to observe the procedure, reassess Marco, and document reauthorization. This isn't about you; it's my clock.\"",
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
    teachingMoment: "Every time a delegation gets tested, the answer points back to the same three things from the opening: is the student still stable and predictable, is the training still student-specific, and am I keeping the delegation-review clock. Your scripts aren't scripts because the UAP needs to hear them — they're scripts because under stress, you need to hear them."
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
        id: "student-assessment",
        label: "Student assessment and condition",
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
            text: "Reassess Sienna's stability every 30 days (new to school setting). Initial authorization period not to exceed 90 days per MESD policy; subsequent delegation reviews and reauthorization not to exceed 180 days per OAR 851-047-0030 and MESD policy — shorter if Sienna's stability or Devon's competency changes. If a review is missed the delegation automatically expires and restarts. Delegation also expires at end of school year unless documented otherwise.",
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
            text: "I, [RN name, OSBN license #], take responsibility for delegating Sienna's G-tube bolus feeding to Devon [UAP name] and will ensure supervision occurs per OAR 851-047-0030. This delegation is specific to Sienna and is not transferable to any other student.",
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
      "Analyze the task. Tasks written into the student's plan — carb counting, insulin via pump, clean catheterization, tube feeding, emergency glucagon — are delegable to a trained UAP. Writing, changing, or interpreting the plan stays with the RN.",
      "Evaluate and teach the UAP student-specifically. A UAP trained for one student is not trained for another.",
      "Observe the UAP doing the task before you walk away, and leave written step-by-step instructions in the setting where the task happens.",
      "Set the delegation-review clock — initial authorization period up to 90 days, subsequent reauthorization periods up to 180 days per MESD policy and OAR. Miss a review and the delegation automatically expires and must be restarted. Document every piece of it."
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
        "RN assessment, task analysis, student-specific teach-back, direct observation,",
        "written guidance, and documented delegation-review cadence."
      ],
      filenamePrefix: "delegation-basics-completion-note-"
    },
    noteButtonLabel: "Download completion note",
    restartLabel: "Restart module"
  }
};
