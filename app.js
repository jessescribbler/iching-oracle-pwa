const HEXAGRAM_SOURCE = [
  ["111111", "The Creative", "Initiating force is strong. Act with clarity, persistence, and responsibility."],
  ["000000", "The Receptive", "Make room to receive. Steady support and responsiveness are strengths now."],
  ["100010", "Difficulty at the Beginning", "New growth is real, but the beginning is tangled. Establish order patiently."],
  ["010001", "Youthful Folly", "Approach uncertainty as a student. Ask sincerely, then practice what you learn."],
  ["111010", "Waiting", "The conditions are still forming. Prepare well without forcing the moment."],
  ["010111", "Conflict", "Clarify what truly matters before pressing your case. Seek a fair boundary."],
  ["010000", "The Army", "Discipline and shared purpose are needed. Lead without losing humanity."],
  ["000010", "Holding Together", "Connection depends on sincerity. Notice where trust naturally gathers."],
  ["111011", "Small Taming", "Small restraints and careful details can shape a larger outcome."],
  ["110111", "Treading", "Proceed with courtesy and awareness. The situation rewards careful conduct."],
  ["111000", "Peace", "Different forces can cooperate. Use this opening to build something durable."],
  ["000111", "Standstill", "Progress is blocked for now. Preserve your integrity and do not feed stagnation."],
  ["101111", "Fellowship with Others", "Shared purpose becomes possible through openness and clear principles."],
  ["111101", "Great Possession", "Abundance brings responsibility. Let what you have serve what matters."],
  ["001000", "Modesty", "Quiet competence creates room for lasting progress. Avoid exaggeration."],
  ["000100", "Enthusiasm", "Energy can mobilize people when it is grounded in a worthy direction."],
  ["100110", "Following", "Adapt to what is true in the moment without abandoning your values."],
  ["011001", "Repairing What Has Been Spoiled", "Repair is possible. Address the cause, not only the visible symptom."],
  ["110000", "Approach", "A favorable opening is nearing. Meet it with care and generosity."],
  ["000011", "Contemplation", "Step back and observe. How you look at the situation changes how you enter it."],
  ["100101", "Biting Through", "A clear obstacle needs a clear response. Be firm, precise, and fair."],
  ["101001", "Grace", "Form and beauty can help, but they should reveal substance rather than replace it."],
  ["000001", "Splitting Apart", "Something cannot be held together by force. Protect what is essential."],
  ["100000", "Return", "A turning point begins quietly. Come back to the path one honest step at a time."],
  ["100111", "Innocence", "Act without hidden agenda. Simplicity and alignment protect the next step."],
  ["111001", "Great Taming", "Gather strength through restraint, study, and preparation."],
  ["100001", "Nourishment", "Pay attention to what you take in and what you offer others."],
  ["011110", "Great Exceeding", "The load is unusual. Extraordinary care and timely action are required."],
  ["010010", "The Abysmal Water", "Repeated difficulty calls for inner steadiness and practiced skill."],
  ["101101", "Clarity", "Clarity needs something worthy to adhere to. Tend the source of your light."],
  ["001110", "Influence", "Mutual influence works through receptivity, respect, and gentle movement."],
  ["011100", "Duration", "What lasts is renewed through consistency, not rigidity."],
  ["001111", "Retreat", "Withdrawal can be wise when it preserves strength and dignity."],
  ["111100", "Great Power", "Strength is available. Use it with restraint and right timing."],
  ["000101", "Progress", "Move into the light by making your contribution visible and useful."],
  ["101000", "Darkening of the Light", "Protect your inner clarity when the environment does not welcome it."],
  ["101011", "The Family", "Order begins in close relationships, roles, and everyday conduct."],
  ["110101", "Opposition", "Difference does not always mean failure. Find the small point of possible agreement."],
  ["001010", "Obstruction", "The direct route is blocked. Seek support and reconsider the path."],
  ["010100", "Deliverance", "Release has become possible. Resolve what remains, then move forward lightly."],
  ["110001", "Decrease", "Simplifying can restore balance. Give up what is less important for what is more true."],
  ["100011", "Increase", "Growth is supported when benefit is shared and action is timely."],
  ["111110", "Breakthrough", "A truth must be stated openly. Resolve the matter without aggression."],
  ["011111", "Coming to Meet", "A powerful influence appears suddenly. Meet it with awareness and boundaries."],
  ["000110", "Gathering Together", "People gather around a center. Make the purpose worthy of their trust."],
  ["011000", "Pushing Upward", "Patient effort accumulates. Keep moving upward without skipping the work."],
  ["010110", "Oppression", "Outer limits are real, but your deepest values need not be confined."],
  ["011010", "The Well", "Return to the shared source. Improve access to what truly nourishes."],
  ["101110", "Revolution", "Change is justified when its time is ripe and its purpose is clear."],
  ["011101", "The Cauldron", "Transformation happens through what is cultivated, combined, and offered."],
  ["100100", "The Arousing Thunder", "A shock awakens attention. Regain composure and learn from it."],
  ["001001", "Keeping Still", "Stillness is active when it helps you stop at the right place."],
  ["001011", "Gradual Progress", "Gradual progress is trustworthy. Let each stage establish the next."],
  ["110100", "The Marrying Maiden", "Your position may be limited. Preserve self-respect and see the arrangement clearly."],
  ["101100", "Abundance", "The moment is full and bright. Decide while clarity is available."],
  ["001101", "The Wanderer", "When you are not at home, move with humility, care, and light attachments."],
  ["011011", "The Gentle Wind", "Subtle influence works through repetition, clarity, and patient entry."],
  ["110110", "The Joyous Lake", "Joy grows through honest exchange and mutual encouragement."],
  ["010011", "Dispersion", "Dissolve what divides people and restore connection to a shared center."],
  ["110010", "Limitation", "Useful boundaries create freedom. Avoid limits that become lifeless."],
  ["110011", "Inner Truth", "Sincerity reaches farther than performance. Let words and actions agree."],
  ["001100", "Small Exceeding", "Attend to modest duties and details. This is not the time for a grand leap."],
  ["101010", "After Completion", "The structure is in place, but care is still needed. Guard against complacency."],
  ["010101", "Before Completion", "The crossing is not finished. Stay attentive until the transition is complete."]
];

const TRIGRAMS = {
  "111": { name: "Heaven", image: "creative strength" },
  "000": { name: "Earth", image: "receptive ground" },
  "100": { name: "Thunder", image: "awakening movement" },
  "010": { name: "Water", image: "the deep and uncertain" },
  "001": { name: "Mountain", image: "stillness and boundary" },
  "011": { name: "Wind", image: "gentle, persistent influence" },
  "101": { name: "Fire", image: "clarity and illumination" },
  "110": { name: "Lake", image: "joy and exchange" }
};

const LINE_STAGES = [
  {
    rendering: "At the beginning, the work is close to the ground. Do not ask the first step to carry the whole journey.",
    reflection: "Notice what is actually beginning. A small honest action is more useful than a dramatic promise."
  },
  {
    rendering: "The path begins to meet other lives. Choose support that strengthens what is true.",
    reflection: "Recovery rarely happens alone. Consider what help, boundary, or conversation would make the next step steadier."
  },
  {
    rendering: "At the threshold, effort can become strain. Pause before persistence turns into self-abandonment.",
    reflection: "This is often the line of friction. Ask whether you are acting from grounded commitment or from fear of losing control."
  },
  {
    rendering: "A wider view becomes possible. Use influence carefully and leave room for what you cannot command.",
    reflection: "You may have more choice than before. Let that choice be guided by responsibility rather than urgency."
  },
  {
    rendering: "The heart of the matter is visible. Lead from what is most sincere, not from what is most impressive.",
    reflection: "This line asks for congruence. What would it mean for your words, values, and behavior to agree?"
  },
  {
    rendering: "At the height of the pattern, completion can become excess. Know when to release the form.",
    reflection: "Even a helpful strategy can outlive its season. Consider what must be loosened so change can continue."
  }
];

function buildRecoveryCottage(hexagram) {
  const lower = TRIGRAMS[hexagram.pattern.slice(0, 3)];
  const upper = TRIGRAMS[hexagram.pattern.slice(3, 6)];
  const firstSentence = hexagram.guidance.split(".")[0];
  const oracle = `${firstSentence}.\nLet the next right action be small enough to be real.\nDo not force what must ripen through time.`;
  const image = `Above is ${upper.name}, ${upper.image}; below is ${lower.name}, ${lower.image}. The wise person lets these forces meet without asking either one to become what it is not.`;
  const reflection = `${hexagram.guidance} In recovery, this pattern invites a return to reality: what is happening, what belongs to you, and what can be tended without trying to control another person or the whole future.`;
  const questions = [
    `Where is ${hexagram.name.toLowerCase()} already present in this situation?`,
    "What is mine to tend today, and what is not mine to control?",
    "What would a truthful, compassionate next step look like?"
  ];
  const lines = LINE_STAGES.map((stage, index) => ({
    position: index + 1,
    rendering: `${stage.rendering} In ${hexagram.name}, ${hexagram.guidance.toLowerCase()}`,
    reflection: stage.reflection
  }));
  return { oracle, image, reflection, questions, lines };
}

const HEXAGRAMS = HEXAGRAM_SOURCE.map(([pattern, name, guidance], index) => {
  const hexagram = { number: index + 1, pattern, name, guidance, symbol: String.fromCodePoint(0x4dc0 + index) };
  return { ...hexagram, recovery: buildRecoveryCottage(hexagram) };
});

const byPattern = new Map(HEXAGRAMS.map((hexagram) => [hexagram.pattern, hexagram]));
const journalKey = "recovery-cottage-journal-v2";
let currentReading = null;
let castingSession = null;
let deferredInstallPrompt = null;

const $ = (id) => document.getElementById(id);

function makeId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function castLine() {
  const coins = Array.from({ length: 3 }, () => (Math.random() < 0.5 ? 2 : 3));
  const total = coins.reduce((sum, value) => sum + value, 0);
  return { coins, total, yin: total === 6 || total === 8, changing: total === 6 || total === 9 };
}

function lineFromTotal(total) {
  return { coins: [], total, yin: total === 6 || total === 8, changing: total === 6 || total === 9 };
}

function createReading(question, lines) {
  const primaryPattern = lines.map((line) => (line.yin ? "0" : "1")).join("");
  const relatingPattern = lines.map((line) => {
    const value = line.yin ? "0" : "1";
    return line.changing ? (value === "0" ? "1" : "0") : value;
  }).join("");
  return {
    id: makeId(),
    createdAt: new Date().toISOString(),
    question: question.trim() || "A moment for reflection",
    notes: "",
    lines,
    primary: byPattern.get(primaryPattern),
    relating: byPattern.get(relatingPattern)
  };
}

function getChangedLines(reading) {
  return reading.lines.map((line, index) => ({ ...line, position: index + 1 })).filter((line) => line.changing);
}

function getNotation(reading) {
  const positions = getChangedLines(reading).map((line) => line.position);
  return positions.length
    ? `${reading.primary.number}.${positions.join(".")} → ${reading.relating.number}`
    : `${reading.primary.number} unchanging`;
}

function renderLineElement(line, options = {}) {
  const { relating = false, empty = false, newest = false } = options;
  const element = document.createElement("div");
  if (empty) {
    element.className = "line empty";
    element.innerHTML = "<span></span><span></span>";
    return element;
  }
  const isYin = relating && line.changing ? !line.yin : line.yin;
  element.className = `line ${isYin ? "yin" : "yang"} ${!relating && line.changing ? "changing" : ""} ${newest ? "newest" : ""}`;
  element.innerHTML = "<span></span><span></span>";
  return element;
}

function renderLines(container, lines, options = {}) {
  const { relating = false, slots = false } = options;
  container.innerHTML = "";
  const count = slots ? 6 : lines.length;
  for (let index = 0; index < count; index += 1) {
    const line = lines[index];
    container.appendChild(line ? renderLineElement(line, { relating, newest: index === lines.length - 1 }) : renderLineElement(null, { empty: true }));
  }
}

function beginCasting(question) {
  castingSession = { question: question.trim(), lines: [] };
  $("castForm").hidden = true;
  $("oracleIntro").hidden = true;
  $("reading").hidden = true;
  $("castingStage").hidden = false;
  $("lastCast").hidden = true;
  updateCastingStage();
}

function updateCastingStage() {
  const nextLine = castingSession.lines.length + 1;
  $("castProgress").textContent = `Line ${nextLine} of 6`;
  $("castLineButton").textContent = `Cast line ${nextLine}`;
  $("castPrompt").textContent = nextLine === 1 ? "Return to your question." : "Stay with the question.";
  $("castSubtext").textContent = nextLine === 6
    ? "One final line completes the hexagram."
    : "Cast when you are ready. The hexagram grows from the bottom upward.";
  renderLines($("castingLines"), castingSession.lines, { slots: true });
}

function castNextLine() {
  const line = castLine();
  castingSession.lines.push(line);
  $("lastCast").hidden = false;
  $("lastCast").textContent = `Line ${castingSession.lines.length}: ${line.coins.join(" + ")} = ${line.total}${line.changing ? " — changing" : ""}`;
  if (castingSession.lines.length === 6) {
    const reading = createReading(castingSession.question, castingSession.lines);
    setTimeout(() => renderReading(reading), 450);
  } else {
    updateCastingStage();
  }
}

function resetOracle() {
  castingSession = null;
  currentReading = null;
  $("castingStage").hidden = true;
  $("reading").hidden = true;
  $("castForm").hidden = false;
  $("oracleIntro").hidden = false;
  $("saveReading").textContent = "Save";
  $("personalNotes").value = "";
  history.replaceState({}, "", location.pathname);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderReading(reading) {
  currentReading = reading;
  $("castingStage").hidden = true;
  $("castForm").hidden = true;
  $("oracleIntro").hidden = true;
  $("reading").hidden = false;
  $("readingQuestion").textContent = reading.question;
  $("readingNotation").textContent = getNotation(reading);
  $("primaryName").textContent = reading.primary.name;
  $("primaryNumber").textContent = `Hexagram ${reading.primary.number}`;
  $("primarySymbol").textContent = reading.primary.symbol;
  $("relatingName").textContent = reading.relating.name;
  $("relatingNumber").textContent = `Hexagram ${reading.relating.number}`;
  $("relatingSymbol").textContent = reading.relating.symbol;
  renderLines($("primaryLines"), reading.lines);
  renderLines($("relatingLines"), reading.lines, { relating: true });

  $("recoveryTitle").textContent = `${reading.primary.number}. ${reading.primary.name}`;
  $("recoveryOracle").textContent = reading.primary.recovery.oracle;
  $("recoveryImage").textContent = reading.primary.recovery.image;
  $("recoveryReflection").textContent = getChangedLines(reading).length
    ? `${reading.primary.recovery.reflection} As the moving lines unfold, the situation leans toward ${reading.relating.name}: ${reading.relating.guidance.toLowerCase()}`
    : `${reading.primary.recovery.reflection} With no changing lines, stay with the primary hexagram as the clearest picture of the present moment.`;
  $("reflectionQuestions").innerHTML = reading.primary.recovery.questions.map((question) => `<p>${escapeHtml(question)}</p>`).join("");

  const changed = getChangedLines(reading);
  $("changingLinesSection").hidden = !changed.length;
  $("changingLines").innerHTML = changed.map((line) => {
    const text = reading.primary.recovery.lines[line.position - 1];
    return `<article class="changing-line">
      <p class="line-heading">Line ${line.position} · ${line.total}</p>
      <blockquote>${escapeHtml(text.rendering)}</blockquote>
      <p>${escapeHtml(text.reflection)}</p>
    </article>`;
  }).join("");

  $("coinDetails").innerHTML = reading.lines.map((line, index) => {
    const coins = line.coins.length ? line.coins.join(" + ") : "Shared cast";
    return `<li>Line ${index + 1}: ${coins}${line.coins.length ? ` = ${line.total}` : ` — ${line.total}`}${line.changing ? " (changing)" : ""}</li>`;
  }).join("");
  $("personalNotes").value = reading.notes || "";
  $("saveReading").textContent = loadJournal().some((entry) => entry.id === reading.id) ? "Saved" : "Save";
  switchReadingTab("recovery");
  setShareUrl(reading);
  $("reading").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setShareUrl(reading) {
  const url = new URL(location.href);
  url.search = "";
  url.searchParams.set("lines", reading.lines.map((line) => line.total).join(""));
  history.replaceState({}, "", url);
}

function shareCurrentReading() {
  if (!currentReading) return;
  const url = location.href;
  const text = `Recovery Cottage I Ching reading: ${getNotation(currentReading)} — ${currentReading.primary.name}`;
  if (navigator.share) {
    navigator.share({ title: "Recovery Cottage reading", text, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => {
      $("shareReading").textContent = "Link copied";
      setTimeout(() => { $("shareReading").textContent = "Share"; }, 1600);
    });
  }
}

function loadJournal() {
  try {
    return JSON.parse(localStorage.getItem(journalKey)) || [];
  } catch {
    return [];
  }
}

function saveCurrentReading() {
  if (!currentReading) return;
  currentReading.notes = $("personalNotes").value.trim();
  const journal = loadJournal();
  const index = journal.findIndex((entry) => entry.id === currentReading.id);
  if (index >= 0) journal[index] = currentReading;
  else journal.unshift(currentReading);
  localStorage.setItem(journalKey, JSON.stringify(journal));
  $("saveReading").textContent = "Saved";
  renderJournal();
}

function renderJournal() {
  const journal = loadJournal();
  $("journalList").innerHTML = journal.length
    ? journal.map((entry) => `
      <article class="journal-entry">
        <button class="journal-open" type="button" data-reading-id="${entry.id}">
          <time datetime="${entry.createdAt}">${new Date(entry.createdAt).toLocaleString()}</time>
          <h2>${escapeHtml(entry.question)}</h2>
          <p>${entry.primary.symbol} ${escapeHtml(getNotation(entry))} · ${escapeHtml(entry.primary.name)} → ${escapeHtml(entry.relating.name)}</p>
          ${entry.notes ? `<p class="journal-note-preview">${escapeHtml(entry.notes)}</p>` : ""}
        </button>
      </article>
    `).join("")
    : '<p class="journal-empty">No saved readings yet. Your journal will begin when you save a cast.</p>';

  document.querySelectorAll("[data-reading-id]").forEach((button) => button.addEventListener("click", () => {
    const entry = loadJournal().find((item) => item.id === button.dataset.readingId);
    if (!entry) return;
    switchView("oracle");
    renderReading(entry);
  }));
}

function switchReadingTab(name) {
  document.querySelectorAll(".reading-tab").forEach((button) => button.classList.toggle("active", button.dataset.readingTab === name));
  $("recoveryPanel").classList.toggle("active", name === "recovery");
  $("leggePanel").classList.toggle("active", name === "legge");
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function switchView(name) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `${name}View`));
  document.querySelectorAll(".nav-button").forEach((button) => button.classList.toggle("active", button.dataset.view === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function loadSharedReading() {
  const params = new URLSearchParams(location.search);
  const values = params.get("lines");
  if (!values || !/^[6789]{6}$/.test(values)) return;
  const lines = values.split("").map((value) => lineFromTotal(Number(value)));
  renderReading(createReading("", lines));
}

$("castForm").addEventListener("submit", (event) => {
  event.preventDefault();
  beginCasting($("question").value);
});
$("castLineButton").addEventListener("click", castNextLine);
$("cancelCast").addEventListener("click", resetOracle);
$("newReading").addEventListener("click", resetOracle);
$("saveReading").addEventListener("click", saveCurrentReading);
$("shareReading").addEventListener("click", shareCurrentReading);
document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
document.querySelectorAll("[data-reading-tab]").forEach((button) => button.addEventListener("click", () => switchReadingTab(button.dataset.readingTab)));

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  $("installButton").hidden = false;
});

$("installButton").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  $("installButton").hidden = true;
});

window.addEventListener("appinstalled", () => { $("installButton").hidden = true; });
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));

renderJournal();
loadSharedReading();
