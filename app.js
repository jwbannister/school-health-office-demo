/*
  app.js — main controller for "A Day in the School Health Office".
  Vanilla JS, no framework, no build step.

  SCENES drives the order of play. Each scene's renderer reads its data
  from window.SCENARIO (defined in content.js) and paints into #app.
*/

(function () {
  "use strict";

  const SCENES = [
    { id: "opening", render: renderOpening },
    { id: "beat1",   render: renderMultiChoice },
    { id: "beat2",   render: renderMatch },
    { id: "beat3",   render: renderSort },
    { id: "beat4a",  render: renderSequence },
    { id: "beat4b",  render: renderScripts },
    { id: "beat5",   render: renderForm },
    { id: "close",   render: renderClose }
  ];

  // The five beats count toward the progress indicator; opening and close do not.
  const PROGRESS_IDS = ["beat1", "beat2", "beat3", "beat4a", "beat4b", "beat5"];

  let currentIndex = 0;
  const app = document.getElementById("app");

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k.startsWith("on") && typeof attrs[k] === "function") {
          node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        } else if (k === "text") {
          node.textContent = attrs[k];
        } else {
          node.setAttribute(k, attrs[k]);
        }
      }
    }
    if (children) {
      const list = Array.isArray(children) ? children : [children];
      list.forEach(function (c) {
        if (c == null) return;
        if (typeof c === "string") node.appendChild(document.createTextNode(c));
        else node.appendChild(c);
      });
    }
    return node;
  }

  function clear() { app.innerHTML = ""; }

  function go(delta) {
    currentIndex += (typeof delta === "number" ? delta : 1);
    currentIndex = Math.max(0, Math.min(currentIndex, SCENES.length - 1));
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function render() {
    clear();
    const scene = SCENES[currentIndex];
    const data = window.SCENARIO[scene.id];
    renderProgress(scene.id);
    scene.render(data);
    // Move keyboard focus to the scene heading for screen-reader + keyboard users.
    const heading = document.getElementById("scene-heading");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }

  function renderProgress(currentId) {
    const existing = document.querySelector(".progress");
    if (existing) existing.remove();
    if (!PROGRESS_IDS.includes(currentId)) return;
    const container = el("div", { class: "progress", role: "progressbar",
      "aria-label": "Scenario progress",
      "aria-valuenow": String(PROGRESS_IDS.indexOf(currentId) + 1),
      "aria-valuemin": "1",
      "aria-valuemax": String(PROGRESS_IDS.length) });
    PROGRESS_IDS.forEach(function (id) {
      const idx = PROGRESS_IDS.indexOf(id);
      const cur = PROGRESS_IDS.indexOf(currentId);
      let cls = "progress-dot";
      if (idx < cur) cls += " done";
      else if (idx === cur) cls += " active";
      container.appendChild(el("div", { class: cls }));
    });
    const main = document.getElementById("main");
    main.insertBefore(container, main.firstChild);
  }

  function renderNarrative(narrative) {
    const wrap = el("div", { class: "narrative" });
    narrative.forEach(function (chunk) {
      if (chunk.type === "p") {
        wrap.appendChild(el("p", { text: chunk.text }));
      } else if (chunk.type === "dialog") {
        wrap.appendChild(
          el("p", { class: "dialog" }, [
            el("span", { class: "speaker", text: chunk.speaker + ": " }),
            chunk.text
          ])
        );
      }
    });
    return wrap;
  }

  function renderHeading(eyebrow, title) {
    const frag = document.createDocumentFragment();
    if (eyebrow) frag.appendChild(el("span", { class: "scene-eyebrow", text: eyebrow }));
    frag.appendChild(el("h1", { id: "scene-heading", text: title }));
    return frag;
  }

  // ---- Scene: opening -----------------------------------------------------
  function renderOpening(data) {
    app.appendChild(el("h1", { id: "scene-heading", text: data.title }));
    if (data.subtitle) app.appendChild(el("p", { class: "scene-eyebrow", text: data.subtitle }));
    const narr = el("div", { class: "narrative" });
    data.paragraphs.forEach(function (p) { narr.appendChild(el("p", { text: p })); });
    app.appendChild(narr);
    app.appendChild(
      el("div", { class: "btn-row" }, [
        el("button", { class: "primary-btn", type: "button", onclick: function () { go(1); } }, data.ctaLabel)
      ])
    );
  }

  // ---- Scene: multi-choice (Beat 1) ---------------------------------------
  function renderMultiChoice(data) {
    app.appendChild(renderHeading(data.eyebrow, data.title));
    app.appendChild(renderNarrative(data.narrative));
    app.appendChild(el("p", { class: "prompt", text: data.prompt }));

    const list = el("ul", { class: "choice-list", role: "list" });
    const feedbackHost = el("div", { class: "feedback-host" });
    let locked = false;

    data.choices.forEach(function (choice) {
      const btn = el("button", {
        class: "choice-btn",
        type: "button",
        "aria-pressed": "false",
        onclick: function () {
          if (locked) return;
          // Mark state
          document.querySelectorAll(".choice-btn").forEach(function (b) {
            b.setAttribute("aria-pressed", "false");
            b.classList.remove("correct", "incorrect");
          });
          btn.setAttribute("aria-pressed", "true");
          btn.classList.add(choice.correct ? "correct" : "incorrect");
          // Render feedback
          feedbackHost.innerHTML = "";
          feedbackHost.appendChild(
            el("div", { class: "feedback " + (choice.correct ? "correct" : "incorrect") }, [
              el("h3", { text: choice.correct ? "That's the move." : "Let's rethink." }),
              el("p", { text: choice.feedback })
            ])
          );
          if (choice.correct) {
            locked = true;
            document.querySelectorAll(".choice-btn").forEach(function (b) { b.disabled = true; });
            feedbackHost.appendChild(
              el("div", { class: "feedback" }, [
                el("h3", { text: "The takeaway" }),
                el("p", { text: data.teachingMoment })
              ])
            );
            feedbackHost.appendChild(
              el("div", { class: "btn-row" }, [
                el("button", { class: "primary-btn", type: "button", onclick: function () { go(1); } }, "Continue")
              ])
            );
          }
        }
      }, choice.text);
      list.appendChild(el("li", {}, btn));
    });

    app.appendChild(list);
    app.appendChild(feedbackHost);
  }

  // ---- Scene: match (Beat 2) ----------------------------------------------
  function renderMatch(data) {
    app.appendChild(renderHeading(data.eyebrow, data.title));
    app.appendChild(renderNarrative(data.narrative));
    app.appendChild(el("p", { class: "prompt", text: data.prompt }));

    // State: selectedLeft, matches {leftId: rightId}
    const state = { selectedLeft: null, matches: {} };
    const rightUsed = {}; // rightId -> leftId it's assigned to

    const grid = el("div", { class: "match-grid" });
    const leftCol = el("div", { class: "match-column" }, [el("h3", { text: data.leftLabel })]);
    const rightCol = el("div", { class: "match-column" }, [el("h3", { text: data.rightLabel })]);

    // Shuffle right items so matching isn't visual
    const rightOrder = data.pairs.map(function (p) { return p.rightId; });
    shuffleInPlace(rightOrder);

    const leftButtons = {};
    const rightButtons = {};
    const feedbackHost = el("div", { class: "feedback-host" });

    data.pairs.forEach(function (pair) {
      const b = el("button", {
        class: "match-item",
        type: "button",
        "aria-pressed": "false",
        "data-left-id": pair.leftId,
        onclick: function () { onLeftClick(pair.leftId); }
      }, pair.leftLabel);
      leftButtons[pair.leftId] = b;
      leftCol.appendChild(b);
    });

    rightOrder.forEach(function (rid) {
      const pair = data.pairs.find(function (p) { return p.rightId === rid; });
      const b = el("button", {
        class: "match-item",
        type: "button",
        "aria-pressed": "false",
        "data-right-id": pair.rightId,
        onclick: function () { onRightClick(pair.rightId); }
      }, pair.rightLabel);
      rightButtons[pair.rightId] = b;
      rightCol.appendChild(b);
    });

    grid.appendChild(leftCol);
    grid.appendChild(rightCol);
    app.appendChild(grid);

    const submitRow = el("div", { class: "btn-row" });
    const submitBtn = el("button", {
      class: "primary-btn",
      type: "button",
      disabled: "disabled",
      onclick: onSubmit
    }, "Check my matches");
    submitRow.appendChild(submitBtn);
    submitRow.appendChild(el("button", {
      class: "secondary-btn",
      type: "button",
      onclick: function () {
        state.selectedLeft = null;
        state.matches = {};
        for (const k in rightUsed) delete rightUsed[k];
        Object.keys(leftButtons).forEach(function (k) {
          const b = leftButtons[k];
          b.classList.remove("matched", "mismatched");
          b.setAttribute("aria-pressed", "false");
          b.disabled = false;
          const badge = b.querySelector(".match-badge");
          if (badge) badge.remove();
        });
        Object.keys(rightButtons).forEach(function (k) {
          const b = rightButtons[k];
          b.classList.remove("matched", "mismatched");
          b.setAttribute("aria-pressed", "false");
          b.disabled = false;
        });
        submitBtn.disabled = true;
        feedbackHost.innerHTML = "";
      }
    }, "Reset"));
    app.appendChild(submitRow);
    app.appendChild(feedbackHost);

    function onLeftClick(id) {
      if (state.matches[id]) return; // already matched
      // Clear any previously-selected left
      if (state.selectedLeft && leftButtons[state.selectedLeft]) {
        leftButtons[state.selectedLeft].setAttribute("aria-pressed", "false");
      }
      state.selectedLeft = id;
      leftButtons[id].setAttribute("aria-pressed", "true");
    }

    function onRightClick(rid) {
      if (rightUsed[rid]) return; // already matched
      if (!state.selectedLeft) return; // need a left first
      // Pair them
      const lid = state.selectedLeft;
      state.matches[lid] = rid;
      rightUsed[rid] = lid;
      state.selectedLeft = null;

      const letter = Object.keys(state.matches).length;
      const lb = leftButtons[lid];
      const rb = rightButtons[rid];
      lb.setAttribute("aria-pressed", "false");
      lb.classList.add("matched");
      rb.classList.add("matched");
      // Add a small numeric badge so learner can see which pair is which
      const badgeLeft = el("span", { class: "match-badge", text: String(letter) });
      const badgeRight = el("span", { class: "match-badge", text: String(letter) });
      lb.appendChild(badgeLeft);
      rb.appendChild(badgeRight);

      if (Object.keys(state.matches).length === data.pairs.length) {
        submitBtn.disabled = false;
      }
    }

    function onSubmit() {
      // Score
      let allCorrect = true;
      data.pairs.forEach(function (p) {
        const chosenRight = state.matches[p.leftId];
        const lb = leftButtons[p.leftId];
        const rb = rightButtons[chosenRight];
        if (chosenRight === p.rightId) {
          lb.classList.remove("mismatched");
          rb.classList.remove("mismatched");
          lb.classList.add("matched");
          rb.classList.add("matched");
        } else {
          allCorrect = false;
          lb.classList.add("mismatched");
          if (rb) rb.classList.add("mismatched");
        }
        lb.disabled = true;
        if (rb) rb.disabled = true;
      });
      submitBtn.disabled = true;

      // Reveal correct pairings in feedback
      feedbackHost.innerHTML = "";
      const fb = el("div", { class: "feedback " + (allCorrect ? "correct" : "") }, [
        el("h3", { text: allCorrect ? "All five failures matched." : "Here are the correct pairings." })
      ]);
      const ul = el("ul");
      data.pairs.forEach(function (p) {
        ul.appendChild(el("li", { html: "<strong>" + escapeHtml(p.leftLabel) + "</strong> — " + escapeHtml(p.rightLabel) }));
      });
      fb.appendChild(ul);
      feedbackHost.appendChild(fb);

      feedbackHost.appendChild(
        el("div", { class: "feedback" }, [
          el("h3", { text: "The takeaway" }),
          el("p", { text: data.teachingMoment }),
          el("p", { html: "<strong>What you'd say to Mr. Delgado:</strong> " + escapeHtml(data.refusalScript) })
        ])
      );
      feedbackHost.appendChild(
        el("div", { class: "btn-row" }, [
          el("button", { class: "primary-btn", type: "button", onclick: function () { go(1); } }, "Continue")
        ])
      );
    }
  }

  // ---- Scene: sort (Beat 3) -----------------------------------------------
  function renderSort(data) {
    app.appendChild(renderHeading(data.eyebrow, data.title));
    app.appendChild(renderNarrative(data.narrative));
    app.appendChild(el("p", { class: "prompt", text: data.prompt }));

    const state = {};
    data.items.forEach(function (it) { state[it.id] = ""; });

    const list = el("div", { class: "sort-items" });
    data.items.forEach(function (it) {
      const row = el("div", { class: "sort-item-row" });
      row.appendChild(el("label", { class: "sort-item-label", for: "sort-" + it.id, text: it.label }));
      const select = el("select", {
        id: "sort-" + it.id,
        class: "sort-select",
        "aria-label": it.label + " — choose bucket",
        onchange: function (e) { state[it.id] = e.target.value; updateSubmit(); }
      });
      select.appendChild(el("option", { value: "", text: "— choose bucket —" }));
      data.buckets.forEach(function (b) {
        select.appendChild(el("option", { value: b.id, text: b.label }));
      });
      row.appendChild(select);
      list.appendChild(row);
    });
    app.appendChild(list);

    const feedbackHost = el("div", { class: "feedback-host" });
    const submitRow = el("div", { class: "btn-row" });
    const submitBtn = el("button", {
      class: "primary-btn",
      type: "button",
      disabled: "disabled",
      onclick: onSubmit
    }, "Check my sort");
    submitRow.appendChild(submitBtn);
    app.appendChild(submitRow);
    app.appendChild(feedbackHost);

    function updateSubmit() {
      const allFilled = data.items.every(function (it) { return !!state[it.id]; });
      submitBtn.disabled = !allFilled;
    }

    function onSubmit() {
      submitBtn.disabled = true;
      document.querySelectorAll(".sort-select").forEach(function (s) { s.disabled = true; });
      feedbackHost.innerHTML = "";
      const fb = el("div", { class: "feedback" }, [el("h3", { text: "Correct buckets" })]);
      const ul = el("ul");
      data.items.forEach(function (it) {
        const chosen = state[it.id];
        const chosenBucket = data.buckets.find(function (b) { return b.id === chosen; });
        const correctBucket = data.buckets.find(function (b) { return b.id === it.correct; });
        const ok = chosen === it.correct;
        const li = el("li");
        li.appendChild(document.createTextNode(it.label + " — "));
        const status = el("span", { class: ok ? "sort-result-correct" : "sort-result-wrong",
          text: ok ? correctBucket.label : "You picked " + (chosenBucket ? chosenBucket.label : "—") + ". Correct: " + correctBucket.label });
        li.appendChild(status);
        ul.appendChild(li);
      });
      fb.appendChild(ul);
      feedbackHost.appendChild(fb);
      feedbackHost.appendChild(
        el("div", { class: "feedback" }, [
          el("h3", { text: "The takeaway" }),
          el("p", { text: data.teachingMoment })
        ])
      );
      feedbackHost.appendChild(
        el("div", { class: "btn-row" }, [
          el("button", { class: "primary-btn", type: "button", onclick: function () { go(1); } }, "Continue")
        ])
      );
    }
  }

  // ---- Scene: sequence (Beat 4a) ------------------------------------------
  function renderSequence(data) {
    app.appendChild(renderHeading(data.eyebrow, data.title));
    app.appendChild(renderNarrative(data.narrative));
    app.appendChild(el("p", { class: "prompt", text: data.prompt }));

    const state = data.slotLabels.map(function () { return ""; });

    const wrap = el("div");
    data.slotLabels.forEach(function (lbl, idx) {
      const row = el("div", { class: "sequence-slot" });
      row.appendChild(el("label", { class: "sequence-slot-label", for: "seq-" + idx, text: lbl }));
      const select = el("select", {
        id: "seq-" + idx,
        class: "sort-select",
        "aria-label": lbl,
        onchange: function (e) { state[idx] = e.target.value; updateSubmit(); }
      });
      select.appendChild(el("option", { value: "", text: "— choose —" }));
      data.options.forEach(function (o) {
        select.appendChild(el("option", { value: o.id, text: o.label }));
      });
      row.appendChild(select);
      wrap.appendChild(row);
    });
    app.appendChild(wrap);

    const feedbackHost = el("div", { class: "feedback-host" });
    const submitRow = el("div", { class: "btn-row" });
    const submitBtn = el("button", {
      class: "primary-btn",
      type: "button",
      disabled: "disabled",
      onclick: onSubmit
    }, "Check my order");
    submitRow.appendChild(submitBtn);
    app.appendChild(submitRow);
    app.appendChild(feedbackHost);

    function updateSubmit() {
      const allFilled = state.every(function (s) { return !!s; });
      const uniq = new Set(state);
      submitBtn.disabled = !(allFilled && uniq.size === state.length);
    }

    function onSubmit() {
      submitBtn.disabled = true;
      document.querySelectorAll(".sequence-slot select").forEach(function (s) { s.disabled = true; });
      const correct = state.every(function (s, i) { return s === data.correctOrder[i]; });
      feedbackHost.innerHTML = "";
      const fb = el("div", { class: "feedback " + (correct ? "correct" : "") });
      fb.appendChild(el("h3", { text: correct ? "Right order." : "Correct order" }));
      const ol = el("ol");
      data.correctOrder.forEach(function (id) {
        const opt = data.options.find(function (o) { return o.id === id; });
        ol.appendChild(el("li", { text: opt.label }));
      });
      fb.appendChild(ol);
      feedbackHost.appendChild(fb);
      feedbackHost.appendChild(
        el("div", { class: "feedback" }, [
          el("h3", { text: "The takeaway" }),
          el("p", { text: data.teachingMoment })
        ])
      );
      feedbackHost.appendChild(
        el("div", { class: "btn-row" }, [
          el("button", { class: "primary-btn", type: "button", onclick: function () { go(1); } }, "Continue")
        ])
      );
    }
  }

  // ---- Scene: scripts (Beat 4b) -------------------------------------------
  function renderScripts(data) {
    app.appendChild(renderHeading(data.eyebrow, data.title));
    app.appendChild(renderNarrative(data.narrative));

    const state = {}; // callId -> optionId
    data.calls.forEach(function (c) { state[c.id] = null; });

    data.calls.forEach(function (call) {
      const section = el("div", { class: "form-field" });
      section.appendChild(el("p", { class: "prompt", text: call.label }));
      const opts = el("div", { class: "form-options", role: "radiogroup", "aria-label": call.label });
      // Shuffle options for fairness
      const shuffled = call.options.slice();
      shuffleInPlace(shuffled);
      shuffled.forEach(function (o) {
        const wrap = el("label", { class: "form-option" });
        const input = el("input", {
          type: "radio",
          name: call.id,
          value: o.id,
          onchange: function () {
            state[call.id] = o.id;
            document.querySelectorAll("label.form-option").forEach(function (lbl) {
              const r = lbl.querySelector('input[type="radio"]');
              if (r && r.name === call.id) lbl.classList.toggle("selected", r.checked);
            });
            updateSubmit();
          }
        });
        wrap.appendChild(input);
        wrap.appendChild(el("span", { text: o.text }));
        opts.appendChild(wrap);
      });
      section.appendChild(opts);
      app.appendChild(section);
    });

    const feedbackHost = el("div", { class: "feedback-host" });
    const submitRow = el("div", { class: "btn-row" });
    const submitBtn = el("button", {
      class: "primary-btn",
      type: "button",
      disabled: "disabled",
      onclick: onSubmit
    }, "Check my scripts");
    submitRow.appendChild(submitBtn);
    app.appendChild(submitRow);
    app.appendChild(feedbackHost);

    function updateSubmit() {
      const allPicked = data.calls.every(function (c) { return !!state[c.id]; });
      submitBtn.disabled = !allPicked;
    }

    function onSubmit() {
      submitBtn.disabled = true;
      document.querySelectorAll('input[type="radio"]').forEach(function (i) { i.disabled = true; });
      feedbackHost.innerHTML = "";
      data.calls.forEach(function (call) {
        const chosenId = state[call.id];
        const chosen = call.options.find(function (o) { return o.id === chosenId; });
        const correct = chosen && chosen.correct;
        const fb = el("div", { class: "feedback " + (correct ? "correct" : "incorrect") });
        fb.appendChild(el("h3", { text: call.label + " — " + (correct ? "Good script." : "Better script below.") }));
        fb.appendChild(el("p", { text: correct ? call.correctFeedback : call.incorrectFeedback }));
        if (!correct) {
          const right = call.options.find(function (o) { return o.correct; });
          fb.appendChild(el("p", { html: "<strong>Better:</strong> " + escapeHtml(right.text) }));
        }
        feedbackHost.appendChild(fb);
      });
      feedbackHost.appendChild(
        el("div", { class: "feedback" }, [
          el("h3", { text: "The takeaway" }),
          el("p", { text: data.teachingMoment })
        ])
      );
      feedbackHost.appendChild(
        el("div", { class: "btn-row" }, [
          el("button", { class: "primary-btn", type: "button", onclick: function () { go(1); } }, "Continue")
        ])
      );
    }
  }

  // ---- Scene: form (Beat 5) -----------------------------------------------
  function renderForm(data) {
    app.appendChild(renderHeading(data.eyebrow, data.title));
    app.appendChild(renderNarrative(data.narrative));
    app.appendChild(el("p", { class: "prompt", text: data.prompt }));

    const state = {};
    data.fields.forEach(function (f) { state[f.id] = null; });

    data.fields.forEach(function (field) {
      const section = el("div", { class: "form-field" });
      section.appendChild(el("span", { class: "form-label", text: field.label }));
      const opts = el("div", { class: "form-options", role: "radiogroup", "aria-label": field.label });
      const shuffled = field.options.slice();
      shuffleInPlace(shuffled);
      shuffled.forEach(function (o) {
        const wrap = el("label", { class: "form-option" });
        const input = el("input", {
          type: "radio",
          name: field.id,
          value: o.id,
          onchange: function () {
            state[field.id] = o.id;
            document.querySelectorAll("label.form-option").forEach(function (lbl) {
              const r = lbl.querySelector('input[type="radio"]');
              if (r && r.name === field.id) lbl.classList.toggle("selected", r.checked);
            });
            updateSubmit();
          }
        });
        wrap.appendChild(input);
        wrap.appendChild(el("span", { text: o.text }));
        opts.appendChild(wrap);
      });
      section.appendChild(opts);
      app.appendChild(section);
    });

    const feedbackHost = el("div", { class: "feedback-host" });
    const submitRow = el("div", { class: "btn-row" });
    const submitBtn = el("button", {
      class: "primary-btn",
      type: "button",
      disabled: "disabled",
      onclick: onSubmit
    }, "Submit the form");
    submitRow.appendChild(submitBtn);
    app.appendChild(submitRow);
    app.appendChild(feedbackHost);

    function updateSubmit() {
      const allPicked = data.fields.every(function (f) { return !!state[f.id]; });
      submitBtn.disabled = !allPicked;
    }

    function onSubmit() {
      submitBtn.disabled = true;
      document.querySelectorAll('input[type="radio"]').forEach(function (i) { i.disabled = true; });
      feedbackHost.innerHTML = "";
      const fb = el("div", { class: "feedback" }, [el("h3", { text: "The record an RN can actually use" })]);
      const dl = el("dl");
      data.fields.forEach(function (f) {
        const correct = f.options.find(function (o) { return o.correct; });
        const chosen = f.options.find(function (o) { return o.id === state[f.id]; });
        const dt = el("dt", { html: "<strong>" + escapeHtml(f.label) + "</strong>" });
        const dd = el("dd", { html: escapeHtml(correct.text) +
          (chosen.correct ? "" :
            '<br><em style="color:#a65d3a;">You picked: ' + escapeHtml(chosen.text) + "</em>") });
        dl.appendChild(dt);
        dl.appendChild(dd);
      });
      fb.appendChild(dl);
      feedbackHost.appendChild(fb);
      feedbackHost.appendChild(
        el("div", { class: "feedback" }, [
          el("h3", { text: "The takeaway" }),
          el("p", { text: data.teachingMoment })
        ])
      );
      feedbackHost.appendChild(
        el("div", { class: "btn-row" }, [
          el("button", { class: "primary-btn", type: "button", onclick: function () { go(1); } }, "Finish")
        ])
      );
    }
  }

  // ---- Scene: close -------------------------------------------------------
  function renderClose(data) {
    app.appendChild(renderHeading(data.eyebrow, data.title));
    app.appendChild(el("p", { text: data.intro }));
    const ul = el("ul", { class: "pillar-list" });
    data.pillars.forEach(function (p) { ul.appendChild(el("li", { text: p })); });
    app.appendChild(ul);
    app.appendChild(el("p", { text: data.reminder }));

    const row = el("div", { class: "btn-row" });
    row.appendChild(el("button", {
      class: "primary-btn",
      type: "button",
      onclick: function () { downloadCompletionNote(data); }
    }, data.noteButtonLabel));
    row.appendChild(el("button", {
      class: "secondary-btn",
      type: "button",
      onclick: function () { currentIndex = 0; render(); window.scrollTo({ top: 0 }); }
    }, data.restartLabel));
    app.appendChild(row);
  }

  function downloadCompletionNote(data) {
    const now = new Date();
    const stamp = now.toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const lines = [
      "A Day in the School Health Office — demo completion note",
      "Date and time: " + now.toString(),
      "",
      "This learner walked through a training prototype covering the five pillars of",
      "a school health assistant's role under RN delegation in Oregon schools:",
      ""
    ];
    data.pillars.forEach(function (p, i) { lines.push((i + 1) + ". " + p); });
    lines.push("", "Reminder:", data.reminder, "",
      "This note is a demo artifact only. It does not authorize any specific clinical",
      "task for any specific student. The supervising RN remains responsible for",
      "teaching, observing, validating, and documenting client-specific competency",
      "per OAR 851-047-0030.");

    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "school-health-office-demo-note-" + stamp + ".txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ---- utilities ----------------------------------------------------------
  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // ---- boot ---------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", render);
})();
