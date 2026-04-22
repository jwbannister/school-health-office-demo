/*
  content.js — all text and puzzle data for the prototype.
  Edit this file to adjust wording, choices, feedback, or clinical content.
  The shape of each scene is:

    opening / close   : free text with CTA
    multiChoice       : narrative + one correct option + per-option feedback
    match             : two columns, learner pairs them
    sort              : items are dropped into named buckets
    sequence          : learner orders N options into N slots
    scripts           : per-call pick-one-from-pool
    form              : labeled fields, each field is pick-one-from-pool

  All keys are intentionally verbose so a non-developer can read and edit.
*/

window.SCENARIO = {
  opening: {
    type: "opening",
    title: "A Day in the School Health Office",
    subtitle: "A training scenario for school health assistants",
    paragraphs: [
      "You work as a school health assistant. You spend your day in the health office — the small room near the main entrance, with a desk, a few chairs, a cot, and some labeled supply cabinets.",
      "You don't diagnose. You don't prescribe. You don't give medications without an order from your school nurse. But you do welcome students who don't feel well, observe them with care, and help the nurse take good care of everyone on the roster.",
      "This morning, a student you know by name is about to come through the door."
    ],
    ctaLabel: "Begin"
  },

  beat1: {
    type: "multiChoice",
    eyebrow: "Pillar 1 — Role boundaries",
    title: "The First Move",
    narrative: [
      { type: "p", text: "Mr. Delgado, one of the 4th-grade teachers, walks into your office. Mia, a 4th-grader you've seen in the office before, is with him. She's holding her left wrist and is a little pink in the cheeks." },
      { type: "dialog", speaker: "Mr. Delgado", text: "She took a tumble on the monkey bars at recess. Can you give her some Tylenol and send her back? I've got a class waiting." },
      { type: "dialog", speaker: "Mia", text: "I'm okay. My wrist kinda hurts and I bumped my head a little but I'm fine." }
    ],
    prompt: "What do you do first?",
    choices: [
      {
        id: "a",
        text: "Go to the cabinet and get Tylenol, as Mr. Delgado asked.",
        correct: false,
        feedback: "Not yet. Giving medication is a separate decision — we'll walk through it in a moment. The very first move is to find out what actually happened."
      },
      {
        id: "b",
        text: "Tell Mr. Delgado 'no, I can't do that' and send Mia back to class with him.",
        correct: false,
        feedback: "Not this one. Mia is in your office because something happened. Whether she stays or goes back is a decision for later, after you know more."
      },
      {
        id: "c",
        text: "Ask Mia to sit down, ask her what happened and how she feels, and let Mr. Delgado know you'll take it from here.",
        correct: true,
        feedback: "Yes. You're not diagnosing, you're not deciding yet — you're gathering facts a nurse would want. That's squarely within what a UAP does."
      },
      {
        id: "d",
        text: "Call Mia's parent immediately.",
        correct: false,
        feedback: "Too fast. Calling a parent is often the right move, but not before you understand what you're calling about."
      }
    ],
    teachingMoment: "Your first job as a UAP is not to decide, not to dispense, and not to dismiss. It is to receive the student, observe calmly, and gather the facts a nurse would want. Everything else comes after that."
  },

  beat2: {
    type: "match",
    eyebrow: "Pillar 2 — Five Rights of Delegation",
    title: "The Five Rights",
    narrative: [
      { type: "p", text: "Mr. Delgado is still standing there, looking at the clock." },
      { type: "dialog", speaker: "Mr. Delgado", text: "Just give her the Tylenol so I can get back." },
      { type: "p", text: "You know the Five Rights of Delegation are the checklist for requests like this. Walk through each one." }
    ],
    prompt: "Match each Right to why it fails for this Tylenol request.",
    leftLabel: "The Five Rights",
    rightLabel: "Why this request fails that Right",
    pairs: [
      {
        leftId: "task",
        leftLabel: "Right task",
        rightId: "task-why",
        rightLabel: "No RN delegation for Tylenol is on file for Mia."
      },
      {
        leftId: "circ",
        leftLabel: "Right circumstance",
        rightId: "circ-why",
        rightLabel: "This is an unplanned injury, not a stable, predictable, pre-delegated scenario."
      },
      {
        leftId: "person",
        leftLabel: "Right person",
        rightId: "person-why",
        rightLabel: "A teacher cannot delegate nursing tasks — only a registered nurse can."
      },
      {
        leftId: "dir",
        leftLabel: "Right direction / communication",
        rightId: "dir-why",
        rightLabel: "There is no RN communication or instruction to give this medication."
      },
      {
        leftId: "sup",
        leftLabel: "Right supervision / evaluation",
        rightId: "sup-why",
        rightLabel: "The RN is not here to supervise or evaluate this action."
      }
    ],
    teachingMoment: "The Five Rights is a reusable checklist. Any request a UAP gets — from a teacher, a parent, a student, another staff member — can be run through it. For this request, every one of the five fails. That is the point.",
    refusalScript: "\"Mr. Delgado, I can't give any medication without an order from our nurse. Let me take care of Mia here — she's in good hands. You can head back to your class.\""
  },

  beat3: {
    type: "sort",
    eyebrow: "Pillar 3 — Oregon scope of practice",
    title: "In Your Lane",
    narrative: [
      { type: "p", text: "Mr. Delgado heads back to class. Now it's just you and Mia. Before you do anything else, get a quick read on what's in your scope, what isn't, and what needs to go up to the nurse." }
    ],
    prompt: "Sort each action into the right bucket.",
    buckets: [
      { id: "in", label: "In scope for UAP" },
      { id: "out", label: "Out of scope" },
      { id: "escalate", label: "Escalate to RN" }
    ],
    items: [
      { id: "ice",        label: "Apply an ice pack to Mia's wrist.",                                                           correct: "in" },
      { id: "sit-water",  label: "Help Mia sit down and offer her water.",                                                      correct: "in" },
      { id: "diagnose",   label: "Decide whether Mia's wrist is broken.",                                                       correct: "out" },
      { id: "form",       label: "Fill in your observations on the incident form.",                                             correct: "in" },
      { id: "backpack",   label: "Give Mia ibuprofen she has in her backpack.",                                                 correct: "out" },
      { id: "parent",     label: "Call Mia's parent to notify them.",                                                           correct: "in" },
      { id: "nurse",      label: "Call the school nurse to describe what you're seeing.",                                       correct: "escalate" },
      { id: "clear",      label: "Clear Mia to go back to class because she seems fine.",                                       correct: "out" },
      { id: "iv",         label: "Start an IV.",                                                                                correct: "out" },
      { id: "epi",        label: "Administer emergency epinephrine if Mia has an allergy action plan on file.",                 correct: "in" }
    ],
    teachingMoment: "UAPs can do a lot. UAPs cannot do some specific things. In Oregon the boundaries are drawn by OAR 851-047-0030 with a statutory carve-out for emergency epinephrine and glucagon (ORS 433.800–433.830). \"Can't give medication\" is not a complete sentence — always check for the exception that applies."
  },

  beat4a: {
    type: "sequence",
    eyebrow: "Pillar 4 — Recognition and escalation",
    title: "Something Changes — Who First?",
    narrative: [
      { type: "p", text: "Fifteen minutes have passed. Mia has an ice pack on her wrist. She's been quiet on the cot. Then she speaks up." },
      { type: "dialog", speaker: "Mia", text: "I feel kind of weird. Can I lie down? My head hurts more than before and I'm really sleepy." },
      { type: "p", text: "This is a change in her condition. You know you need to make some calls. Who comes first, second, third?" }
    ],
    prompt: "Order the three calls correctly.",
    slotLabels: ["First call", "Second call", "Third call"],
    options: [
      { id: "rn",     label: "The school nurse" },
      { id: "parent", label: "Mia's parent" },
      { id: "911",    label: "911" }
    ],
    correctOrder: ["rn", "parent", "911"],
    teachingMoment: "For a change-of-condition like this, the RN comes first. The nurse is your supervising clinician — they decide whether to come in, advise, or direct a 911 call. Parents come next, in plain language. 911 is called if the RN advises it, if the RN is not reachable and the change warrants it, or if the situation worsens rapidly (unresponsive, seizing, repeated vomiting with altered mentation)."
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
        label: "The call to the school nurse",
        options: [
          {
            id: "rn-A",
            text: "\"Hi, this is [your name] at [school]. Mia [last name], 4th grade, came in about 15 minutes ago after a fall on the playground. She bumped her head and hurt her left wrist. She's now saying her head hurts more, she feels weird, and she wants to lie down. She's awake but drowsy. Can you come, or what would you like me to do?\"",
            correct: true
          },
          {
            id: "rn-B",
            text: "\"Hey, Mia's not feeling great. Should I send her home?\"",
            correct: false
          },
          {
            id: "rn-C",
            text: "\"I think Mia has a concussion and we need you here now — it's an emergency.\"",
            correct: false
          }
        ],
        correctFeedback: "Factual, specific, named, and asks the nurse what she wants you to do. That's the job.",
        incorrectFeedback: "Too vague or too diagnostic. Your job on this call is to report what you observed and ask the RN what she wants done — not to decide what's wrong or what happens next."
      },
      {
        id: "parent-call",
        label: "The call to Mia's parent",
        options: [
          {
            id: "p-A",
            text: "\"Hi, this is [your name] from [school]. Mia had a fall at recess — she's here in the office now. She bumped her head and hurt her wrist. Our school nurse is aware. Mia's awake but not quite herself — we'd like you to come pick her up as soon as you can. If anything changes we'll call 911.\"",
            correct: true
          },
          {
            id: "p-B",
            text: "\"Mia probably has a concussion but we're not sure. Come get her.\"",
            correct: false
          },
          {
            id: "p-C",
            text: "\"Mia had a little fall, she's fine, but you should probably come get her when you can.\"",
            correct: false
          }
        ],
        correctFeedback: "Plain facts, nurse-is-aware, clear ask, and an honest 'we'll call 911 if needed.' That's what a parent deserves to hear.",
        incorrectFeedback: "Either diagnostic (outside your scope) or minimizing (sets the wrong expectation). Name the facts, name the ask, and be straight about what could change."
      }
    ],
    teachingMoment: "Escalation is about sequence AND content. Who you call first matters. What you say on each call matters too. A UAP who calls in the wrong order, or with the wrong content, makes the RN's job harder and can put the student at risk."
  },

  beat5: {
    type: "form",
    eyebrow: "Pillar 5 — Documentation",
    title: "Write It Down",
    narrative: [
      { type: "p", text: "Mia's parent is on their way. The school nurse has been briefed. Before the encounter ends, fill in the incident form." },
      { type: "p", text: "For each field, pick the entry an RN would actually want to read." }
    ],
    prompt: "Complete the incident form.",
    fields: [
      {
        id: "time",
        label: "Time of incident",
        options: [
          { id: "t-A", text: "10:12 AM.",         correct: true },
          { id: "t-B", text: "Mid-morning.",       correct: false },
          { id: "t-C", text: "Around recess.",     correct: false }
        ]
      },
      {
        id: "reported",
        label: "What the student reported",
        options: [
          { id: "r-A", text: "Mia said she fell off the monkey bars, hurt her left wrist, and bumped her head.",  correct: true },
          { id: "r-B", text: "Mia fell and is probably fine.",                                                    correct: false },
          { id: "r-C", text: "Mia came in after recess.",                                                         correct: false }
        ]
      },
      {
        id: "observations",
        label: "Observations",
        options: [
          {
            id: "o-A",
            text: "On arrival Mia was alert and oriented, holding her left wrist, reported mild headache. At 10:27 AM she reported an increased headache and drowsiness.",
            correct: true
          },
          { id: "o-B", text: "Mia seemed okay at first then went downhill.", correct: false },
          { id: "o-C", text: "Headache.",                                    correct: false }
        ]
      },
      {
        id: "actions",
        label: "Actions taken",
        options: [
          {
            id: "a-A",
            text: "Applied ice pack to left wrist at 10:15 AM. Observed for 15 minutes. Notified school nurse [name] at 10:28 AM per change in condition. Notified parent [name] at 10:31 AM and arranged pickup.",
            correct: true
          },
          { id: "a-B", text: "Helped her out and called people.",                              correct: false },
          { id: "a-C", text: "Gave her Tylenol and sent her back to class.",                   correct: false }
        ]
      },
      {
        id: "escalations",
        label: "Escalations",
        options: [
          {
            id: "e-A",
            text: "School nurse [name] notified at 10:28 AM. Parent [name] notified at 10:31 AM. 911 not called — RN advised parent pickup.",
            correct: true
          },
          { id: "e-B", text: "Called for help.",     correct: false },
          { id: "e-C", text: "Told Mr. Delgado.",    correct: false }
        ]
      }
    ],
    teachingMoment: "Good UAP documentation is objective, timestamped, named, and complete. An RN reviewing your record should be able to reconstruct what happened without asking follow-up questions. Bad documentation wastes the RN's time and, if the situation becomes a complaint or a legal matter, cannot survive scrutiny."
  },

  close: {
    type: "close",
    eyebrow: "End of the encounter",
    title: "You Did the Role Well",
    intro: "Here's what you exercised in this scenario:",
    pillars: [
      "Role boundaries — you gathered facts instead of diagnosing, dispensing, or dismissing.",
      "The Five Rights — you ran a request through the checklist and declined what didn't meet it.",
      "Oregon scope — you distinguished what a UAP may do, what is out of scope, and what must go up to the nurse.",
      "Recognition and escalation — you recognized a change in condition, sequenced your calls, and spoke in facts.",
      "Documentation — you wrote a record the nurse can use without follow-up questions."
    ],
    reminder: "This training covers the role you play. It does not authorize you to perform any specific delegated task for any specific student. Before you care for a student with a delegated care plan, your school nurse will teach you that specific care, watch you do it, and sign off that you're ready. Ask them questions — that is exactly what they are there for.",
    noteButtonLabel: "Download completion note",
    restartLabel: "Start over"
  }
};
