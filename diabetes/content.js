/*
  content.js (diabetes scenario) — all text and puzzle data.
  Parallels the playground scenario's content.js exactly in shape.
  Edit strings freely; clinical content changes should be flagged for RN review.

  Setting: a school health office on a school day.
  Student: Aria Vega, 6th grader, Type 1 diabetes, Tandem t:slim insulin
  pump, Dexcom G7 continuous glucose monitor. Has a Diabetes Medical
  Management Plan (DMMP) on file. Standard pre-lunch check-in.
*/

window.SCENARIO = {
  opening: {
    type: "opening",
    title: "A Day in the School Health Office",
    subtitle: "Scenario 2 — A pre-lunch check-in with a student on an insulin pump",
    paragraphs: [
      "You work as a school health assistant. You spend your day in the health office — the small room near the main entrance, with a desk, a few chairs, a cot, and some labeled supply cabinets.",
      "Today includes a student you see every school day. Aria Vega is a 6th-grader with Type 1 diabetes. She wears an insulin pump (a Tandem t:slim) and a continuous glucose monitor (a Dexcom G7) that sends her blood sugar readings to the pump and to the office iPad every five minutes.",
      "On the desk in front of you is a red folder labeled \"Aria Vega — Diabetes Medical Management Plan.\" This is her DMMP — the written plan from her doctor and her parent. It lists what you can and can't do for Aria, the steps for her pre-meal check-in, what to do if her blood sugar goes low or high, and how to reach her care team. It is the source of truth for her care at school.",
      "The school nurse, Ms. Reyes, is at another building today. You can reach her by phone. Aria is due for her pre-lunch check-in any moment."
    ],
    ctaLabel: "Begin"
  },

  beat1: {
    type: "multiChoice",
    eyebrow: "Pillar 1 — Role boundaries",
    title: "Following the Plan",
    narrative: [
      { type: "p", text: "Aria comes in at 11:42 AM. She's usually chatty, but today she's a little quiet." },
      { type: "dialog", speaker: "Aria", text: "Hi. My Dex shows 72 and an arrow down. I feel kind of fuzzy." },
      { type: "p", text: "A reading of 72 mg/dL is above the 70 hypoglycemia threshold most DMMPs use, but a single down-arrow means her glucose is trending lower." },
      { type: "dialog", speaker: "Aria", text: "Can you just tell me what to bolus for lunch? My brain's not working." }
    ],
    prompt: "What's your first move?",
    choices: [
      {
        id: "a",
        text: "Look up a carb count for today's lunch and tell Aria what to bolus.",
        correct: false,
        feedback: "Out of scope. Calculating a dose — even based on a menu card — is clinical judgment. That's the RN's territory and Aria's endocrinologist's territory, not yours."
      },
      {
        id: "b",
        text: "Tell Aria to trust her pump and just do what it says.",
        correct: false,
        feedback: "She asked you for help, and her brain isn't working. \"Figure it out yourself\" is the wrong answer — your delegation at mealtime specifically includes supporting her through the DMMP steps."
      },
      {
        id: "c",
        text: "Open her DMMP to the pre-meal section and walk through it with her step by step. Hold off any bolus because her Dex is trending down.",
        correct: true,
        feedback: "Yes. Your role is to follow the plan WITH Aria, not to decide FOR her. The DMMP has a specific instruction for a pre-meal CGM that's trending down — that's exactly where you open the folder."
      },
      {
        id: "d",
        text: "Send her to the cafeteria and let her work it out at the lunch table.",
        correct: false,
        feedback: "That's abandonment. Your delegation says you supervise and assist at mealtimes — and \"Aria can't think straight\" is exactly when supervision matters most."
      }
    ],
    teachingMoment: "When a student with a DMMP asks you to decide for them, you don't. You follow the plan WITH them. The plan is the decision-maker. Your job is to know where the plan is, read it accurately, and make sure the documented steps happen in order."
  },

  beat2: {
    type: "match",
    eyebrow: "Pillar 2 — Five Rights of Delegation",
    title: "The Other Student's Medication",
    narrative: [
      { type: "p", text: "As you're reaching for the DMMP, Ms. Okafor, a 7th-grade teacher, pokes her head in." },
      { type: "dialog", speaker: "Ms. Okafor", text: "Sorry to interrupt. Jake's mom just called — he forgot his Concerta at home. She said you can just give him his midday dose, it's in his backpack. I'll go get him." },
      { type: "p", text: "Run this request through the Five Rights." }
    ],
    prompt: "Match each Right to why this Concerta request fails.",
    leftLabel: "The Five Rights",
    rightLabel: "Why this request fails that Right",
    pairs: [
      {
        leftId: "task",
        leftLabel: "Right task",
        rightId: "task-why",
        rightLabel: "No RN delegation has been established for this specific administration; you haven't seen an order in this moment."
      },
      {
        leftId: "circ",
        leftLabel: "Right circumstance",
        rightId: "circ-why",
        rightLabel: "You are in the middle of a hypoglycemia check-in with Aria; this is not a stable, calm, pre-delegated moment."
      },
      {
        leftId: "person",
        leftLabel: "Right person",
        rightId: "person-why",
        rightLabel: "Neither a teacher nor a parent over the phone can delegate nursing tasks — only an RN can."
      },
      {
        leftId: "dir",
        leftLabel: "Right direction / communication",
        rightId: "dir-why",
        rightLabel: "No RN has given direction for this administration right now."
      },
      {
        leftId: "sup",
        leftLabel: "Right supervision / evaluation",
        rightId: "sup-why",
        rightLabel: "The RN is not here to supervise or evaluate this action."
      }
    ],
    teachingMoment: "The Five Rights isn't just for a teacher asking for Tylenol at the playground. Any request — from any adult, for any student, about any medication — runs through the same five-point check. If all five don't line up, you don't act.",
    refusalScript: "\"Ms. Okafor, I can't give Jake his medication based on this request. I'm also with Aria right now. Have Jake come here himself — I'll get Ms. Reyes on the phone and we'll follow the usual process for his medication.\""
  },

  beat3: {
    type: "sort",
    eyebrow: "Pillar 3 — Oregon scope of practice",
    title: "What's In Your Lane for Aria",
    narrative: [
      { type: "p", text: "Ms. Okafor heads off to find Jake. Back to Aria." },
      { type: "p", text: "Before you do anything else, get clear on which specific actions are in your lane for Aria's care today. She's on a pump, which can trip people up — some things you'd think are risky are actually in scope when they're pre-delegated per her plan, and some things you'd think are fine are out of scope because they require clinical judgment." }
    ],
    prompt: "Sort each action into the right bucket.",
    buckets: [
      { id: "in", label: "In scope for UAP" },
      { id: "out", label: "Out of scope" },
      { id: "escalate", label: "Escalate to RN" }
    ],
    items: [
      { id: "read-cgm",     label: "Read Aria's CGM and record the value in her log.",                                                correct: "in" },
      { id: "read-dmmp",    label: "Open the DMMP and read the pre-meal protocol aloud with Aria.",                                   correct: "in" },
      { id: "observe-bolus",label: "Observe Aria entering her carb count on the pump, following the DMMP.",                           correct: "in" },
      { id: "carbs",        label: "Administer 15g of glucose tabs per Aria's DMMP hypoglycemia protocol.",                           correct: "in" },
      { id: "glucagon",     label: "Administer glucagon in a severe hypoglycemia emergency per the DMMP.",                            correct: "in" },
      { id: "calc-dose",    label: "Calculate a correction dose of insulin for Aria based on her CGM reading.",                       correct: "out" },
      { id: "basal",        label: "Adjust Aria's basal rate on the pump.",                                                           correct: "out" },
      { id: "site",         label: "Change Aria's pump infusion site or cartridge.",                                                  correct: "out" },
      { id: "decide-lunch", label: "Decide whether Aria should eat lunch today based on her reading.",                                correct: "out" },
      { id: "call-rn",      label: "Call Ms. Reyes to report Aria's CGM reading and trend.",                                          correct: "escalate" }
    ],
    teachingMoment: "With a T1D student on a pump, \"in scope\" is wider than many people assume — it includes following the DMMP step by step, observing Aria operate her own pump, and administering pre-measured carbs or glucagon per the plan, including the Oregon emergency epi / glucagon statute (ORS 433.800–433.830). \"Out of scope\" is specific: any calculation, any device management beyond documented steps, any independent clinical judgment. When in doubt, call the nurse."
  },

  beat4a: {
    type: "sequence",
    eyebrow: "Pillar 4 — Recognition and escalation",
    title: "The CGM Alarms",
    narrative: [
      { type: "p", text: "You open the DMMP to Aria's pre-meal section and start reading through it with her. As she's about to enter her carb count on the pump, her CGM alarms." },
      { type: "p", text: "You look. The Dexcom now reads 62 mg/dL, double arrow down." },
      { type: "dialog", speaker: "Aria", text: "I'm kinda sweaty. I think I'm going low." },
      { type: "p", text: "The DMMP's hypoglycemia protocol kicks in. You STOP the bolus. You take the 15g glucose tabs from the DMMP's pouch and hand them to Aria. She chews them. You note the time: 11:45 AM. The DMMP says recheck in 15 minutes — the \"Rule of 15.\"" },
      { type: "p", text: "Now: who else needs to know, and in what order?" }
    ],
    prompt: "Order your three calls.",
    slotLabels: ["First call", "Second call", "Third call"],
    options: [
      { id: "rn",     label: "The school nurse (Ms. Reyes)" },
      { id: "parent", label: "Aria's parent" },
      { id: "911",    label: "911" }
    ],
    correctOrder: ["rn", "parent", "911"],
    teachingMoment: "Aria is responsive — she ate the carbs, she's alert, she's oriented. That is a mild hypoglycemia per the DMMP. The RN comes first (your supervisor, and the one who may direct next steps). Parent next, per the DMMP. 911 is called only if Aria becomes unresponsive, seizes, cannot swallow, or fails to recover per the plan's thresholds — at that point glucagon + 911 happen concurrently, not in sequence."
  },

  beat4b: {
    type: "scripts",
    eyebrow: "Pillar 4 — Recognition and escalation",
    title: "Say the Right Thing",
    narrative: [
      { type: "p", text: "Pick the right opening for each call." }
    ],
    calls: [
      {
        id: "rn-call",
        label: "The call to Ms. Reyes, the school nurse",
        options: [
          {
            id: "rn-A",
            text: "\"Hi Ms. Reyes, this is [your name] at [school]. Aria Vega came in for her pre-lunch check at 11:42 AM. Her Dex was 72 single-arrow-down. As we opened her DMMP, she alarmed to 62 double-down at 11:44. I followed the plan — stopped the bolus, administered 15g glucose tabs at 11:45 AM. She's responsive and alert. We're waiting the 15 minutes to recheck. What would you like me to do next?\"",
            correct: true
          },
          {
            id: "rn-B",
            text: "\"Hey, Aria's having a problem with her sugar. Should I call 911?\"",
            correct: false
          },
          {
            id: "rn-C",
            text: "\"Aria crashed, she needs to go home.\"",
            correct: false
          }
        ],
        correctFeedback: "Factual, named, timestamped, per-DMMP. Tells the RN exactly what happened, what you did, what state Aria is in, and asks what she wants next. That's the job.",
        incorrectFeedback: "Too vague or too diagnostic. The RN needs specifics — time, readings, actions taken per the DMMP, current state — so she can decide what to direct. \"Crashed\" and \"problem with her sugar\" don't give her enough to act on."
      },
      {
        id: "parent-call",
        label: "The call to Aria's parent",
        options: [
          {
            id: "p-A",
            text: "\"Hi, this is [your name] from [school]. Aria had a low at pre-lunch — her Dexcom showed 62 with double arrows down at 11:44 AM. I followed her DMMP and gave her 15g glucose tabs at 11:45 AM. Ms. Reyes is aware. Aria is responsive and we're rechecking in 15 minutes. I'll call you right back with the recheck number.\"",
            correct: true
          },
          {
            id: "p-B",
            text: "\"Aria's sugar dropped really low but I think I fixed it, she seems okay now.\"",
            correct: false
          },
          {
            id: "p-C",
            text: "\"Aria wanted me to calculate her insulin and I wasn't sure what to do, so I gave her some sugar.\"",
            correct: false
          }
        ],
        correctFeedback: "Plain facts, per-plan action, nurse-is-aware, and a promise of the recheck number. That's what a parent of a T1D kid deserves to hear — and expects from a well-run school health office.",
        incorrectFeedback: "Minimizing or self-doubting. Parents of a T1D kid know what 62 with double-downs means. They want times, actions-per-plan, and the recheck number. Anything less erodes trust."
      }
    ],
    teachingMoment: "For a T1D encounter, the facts the RN and parent both need are: pre-event CGM and trend, alarm reading and time, action taken per the DMMP and the time, current state of the student, and your plan for the next check. Sequence and content both matter."
  },

  beat5: {
    type: "form",
    eyebrow: "Pillar 5 — Documentation",
    title: "Write It Down",
    narrative: [
      { type: "p", text: "Fifteen minutes later you recheck Aria. Dex reads 98 mg/dL, single arrow sideways. She reports feeling back to normal. The DMMP says at this point she proceeds with lunch, re-enters her carb count, and boluses with supervision. You walk her through it. Lunch happens." },
      { type: "p", text: "Before you do anything else, complete the glucose log entry. For each field, pick the entry Ms. Reyes and Aria's endocrinologist can actually use." }
    ],
    prompt: "Complete the glucose log entry.",
    fields: [
      {
        id: "time",
        label: "Time of pre-lunch check-in",
        options: [
          { id: "t-A", text: "11:42 AM.",            correct: true },
          { id: "t-B", text: "Before lunch.",         correct: false },
          { id: "t-C", text: "Around lunchtime.",     correct: false }
        ]
      },
      {
        id: "cgm",
        label: "CGM readings and trend",
        options: [
          {
            id: "c-A",
            text: "11:42 AM CGM 72 mg/dL, single arrow down. 11:44 AM CGM 62 mg/dL, double arrow down. 12:00 PM CGM 98 mg/dL, arrow sideways.",
            correct: true
          },
          { id: "c-B", text: "Aria's sugar dropped a lot and then came back up.", correct: false },
          { id: "c-C", text: "Dex alarmed low.",                                   correct: false }
        ]
      },
      {
        id: "actions",
        label: "Actions per DMMP",
        options: [
          {
            id: "a-A",
            text: "Stopped pre-meal bolus. Administered 15g glucose tabs at 11:45 AM per DMMP hypoglycemia protocol. Supervised Aria's bolus and lunch at 12:02 PM after recheck.",
            correct: true
          },
          { id: "a-B", text: "Gave Aria some sugar and she ate lunch.",              correct: false },
          { id: "a-C", text: "Canceled the bolus and gave her juice from the fridge.", correct: false }
        ]
      },
      {
        id: "notifications",
        label: "Notifications",
        options: [
          {
            id: "n-A",
            text: "RN Ms. Reyes notified at 11:46 AM. Parent [name] notified at 11:48 AM. Parent updated with recheck at 12:01 PM.",
            correct: true
          },
          { id: "n-B", text: "Told the nurse and Aria's mom.",    correct: false },
          { id: "n-C", text: "Called for help.",                   correct: false }
        ]
      },
      {
        id: "status",
        label: "Student status at end of encounter",
        options: [
          {
            id: "s-A",
            text: "Aria reported feeling back to normal at 12:00 PM recheck. Alert, oriented, tolerating food. Returned to class at 12:15 PM after lunch supervised per plan.",
            correct: true
          },
          { id: "s-B", text: "She's fine now.",              correct: false },
          { id: "s-C", text: "Recheck fine, back to class.", correct: false }
        ]
      }
    ],
    teachingMoment: "T1D glucose logs become part of the student's medical record. Aria's endocrinologist will look at patterns across weeks. Specific numbers, specific times, specific actions — especially action-per-DMMP language — make the log useful to the whole care team. \"She seemed fine\" tells the endocrinologist nothing."
  },

  close: {
    type: "close",
    eyebrow: "End of the encounter",
    title: "You Ran the DMMP",
    intro: "Here's what you exercised in this scenario:",
    pillars: [
      "Role boundaries — you followed the DMMP with Aria instead of calculating or deciding for her.",
      "The Five Rights — you ran a cross-student medication request through the checklist and declined what didn't meet it, in the middle of managing a live situation.",
      "Oregon scope — you distinguished what a UAP may do for a student on an insulin pump (follow the plan, observe, administer pre-measured carbs or glucagon per DMMP) from what requires the RN (calculation, device management, independent judgment).",
      "Recognition and escalation — you recognized the CGM alarm as the trigger for the hypoglycemia protocol, executed the immediate response per plan, and sequenced your calls correctly.",
      "Documentation — you wrote a glucose log entry the nurse and the endocrinologist can both use."
    ],
    reminder: "This scenario exercised your role in caring for a student on an insulin pump with a CGM. The specifics of Aria's pump, her CGM, and her DMMP are hers alone. Before you care for any student with a pump, CGM, or any diabetes plan, that student's school nurse will teach you their specific plan, watch you execute it, and sign off that you're ready. DMMPs vary significantly between students — never assume one student's protocol applies to another. Always go to the folder.",
    noteButtonLabel: "Download completion note",
    restartLabel: "Start over"
  }
};
