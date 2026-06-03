const HEXAGRAMS = [
  ["111111", "The Creative", "Initiating force is strong. Act with clarity, persistence, and responsibility."],
  ["000000", "The Receptive", "Make room to receive. Steady support and responsiveness are strengths now."],
  ["100010", "Difficulty at the Beginning", "New growth is real, but the beginning is tangled. Establish order patiently."],
  ["010001", "Youthful Folly", "Approach uncertainty as a student. Ask sincerely, then practice what you learn."],
  ["111010", "Waiting", "The conditions are still forming. Prepare well without forcing the moment."],
  ["010111", "Conflict", "Clarify what truly matters before pressing your case. Seek a fair boundary."],
  ["010000", "The Army", "Discipline and shared purpose are needed. Lead without losing humanity."],
  ["000010", "Holding Together", "Connection depends on sincerity. Notice where trust naturally gathers."],
  ["111011", "The Taming Power of the Small", "Small restraints and careful details can shape a larger outcome."],
  ["110111", "Treading", "Proceed with courtesy and awareness. The situation rewards careful conduct."],
  ["111000", "Peace", "Different forces can cooperate. Use this opening to build something durable."],
  ["000111", "Standstill", "Progress is blocked for now. Preserve your integrity and do not feed stagnation."],
  ["101111", "Fellowship with Others", "Shared purpose becomes possible through openness and clear principles."],
  ["111101", "Possession in Great Measure", "Abundance brings responsibility. Let what you have serve what matters."],
  ["001000", "Modesty", "Quiet competence creates room for lasting progress. Avoid exaggeration."],
  ["000100", "Enthusiasm", "Energy can mobilize people when it is grounded in a worthy direction."],
  ["100110", "Following", "Adapt to what is true in the moment without abandoning your values."],
  ["011001", "Work on What Has Been Spoiled", "Repair is possible. Address the cause, not only the visible symptom."],
  ["110000", "Approach", "A favorable opening is nearing. Meet it with care and generosity."],
  ["000011", "Contemplation", "Step back and observe. How you look at the situation changes how you enter it."],
  ["100101", "Biting Through", "A clear obstacle needs a clear response. Be firm, precise, and fair."],
  ["101001", "Grace", "Form and beauty can help, but they should reveal substance rather than replace it."],
  ["000001", "Splitting Apart", "Something cannot be held together by force. Protect what is essential."],
  ["100000", "Return", "A turning point begins quietly. Come back to the path one honest step at a time."],
  ["100111", "Innocence", "Act without hidden agenda. Simplicity and alignment protect the next step."],
  ["111001", "The Taming Power of the Great", "Gather strength through restraint, study, and preparation."],
  ["100001", "Nourishment", "Pay attention to what you take in and what you offer others."],
  ["011110", "Preponderance of the Great", "The load is unusual. Extraordinary care and timely action are required."],
  ["010010", "The Abysmal Water", "Repeated difficulty calls for inner steadiness and practiced skill."],
  ["101101", "The Clinging Fire", "Clarity needs something worthy to adhere to. Tend the source of your light."],
  ["001110", "Influence", "Mutual influence works through receptivity, respect, and gentle movement."],
  ["011100", "Duration", "What lasts is renewed through consistency, not rigidity."],
  ["001111", "Retreat", "Withdrawal can be wise when it preserves strength and dignity."],
  ["111100", "The Power of the Great", "Strength is available. Use it with restraint and right timing."],
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
  ["001001", "Keeping Still Mountain", "Stillness is active when it helps you stop at the right place."],
  ["001011", "Development", "Gradual progress is trustworthy. Let each stage establish the next."],
  ["110100", "The Marrying Maiden", "Your position may be limited. Preserve self-respect and see the arrangement clearly."],
  ["101100", "Abundance", "The moment is full and bright. Decide while clarity is available."],
  ["001101", "The Wanderer", "When you are not at home, move with humility, care, and light attachments."],
  ["011011", "The Gentle Wind", "Subtle influence works through repetition, clarity, and patient entry."],
  ["110110", "The Joyous Lake", "Joy grows through honest exchange and mutual encouragement."],
  ["010011", "Dispersion", "Dissolve what divides people and restore connection to a shared center."],
  ["110010", "Limitation", "Useful boundaries create freedom. Avoid limits that become lifeless."],
  ["110011", "Inner Truth", "Sincerity reaches farther than performance. Let words and actions agree."],
  ["001100", "Preponderance of the Small", "Attend to modest duties and details. This is not the time for a grand leap."],
  ["101010", "After Completion", "The structure is in place, but care is still needed. Guard against complacency."],
  ["010101", "Before Completion", "The crossing is not finished. Stay attentive until the transition is complete."]
].map(([pattern, name, guidance], index) => ({ number: index + 1, pattern, name, guidance, symbol: String.fromCodePoint(0x4dc0 + index) }));

const byPattern = new Map(HEXAGRAMS.map((hexagram) => [hexagram.pattern, hexagram]));
const journalKey = "book-of-changes-journal";
let currentReading = null;
let deferredInstallPrompt = null;

const $ = (id) => document.getElementById(id);

function castLine() {
  const coins = Array.from({ length: 3 }, () => (Math.random() < 0.5 ? 2 : 3));
  const total = coins.reduce((sum, value) => sum + value, 0);
  return {
    coins,
    total,
    yin: total === 6 || total === 8,
    changing: total === 6 || total === 9
  };
}

function castReading(question) {
  const lines = Array.from({ length: 6 }, castLine);
  const primaryPattern = lines.map((line) => (line.yin ? "0" : "1")).join("");
  const relatingPattern = lines.map((line) => {
    const value = line.yin ? "0" : "1";
    return line.changing ? (value === "0" ? "1" : "0") : value;
  }).join("");

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    question: question.trim() || "A moment for reflection",
    lines,
    primary: byPattern.get(primaryPattern),
    relating: byPattern.get(relatingPattern)
  };
}

function renderLines(container, lines, relating = false) {
  container.innerHTML = "";
  lines.forEach((line) => {
    const isYin = relating && line.changing ? !line.yin : line.yin;
    const element = document.createElement("div");
    element.className = `line ${isYin ? "yin" : "yang"} ${!relating && line.changing ? "changing" : ""}`;
    element.innerHTML = "<span></span><span></span>";
    container.appendChild(element);
  });
}

function renderReading(reading) {
  currentReading = reading;
  $("reading").hidden = false;
  $("readingQuestion").textContent = reading.question;
  $("primaryName").textContent = reading.primary.name;
  $("primaryNumber").textContent = `Hexagram ${reading.primary.number}`;
  $("primarySymbol").textContent = reading.primary.symbol;
  $("relatingName").textContent = reading.relating.name;
  $("relatingNumber").textContent = `Hexagram ${reading.relating.number}`;
  $("relatingSymbol").textContent = reading.relating.symbol;
  renderLines($("primaryLines"), reading.lines);
  renderLines($("relatingLines"), reading.lines, true);

  const changed = reading.lines
    .map((line, index) => ({ ...line, position: index + 1 }))
    .filter((line) => line.changing);

  $("guidance").textContent = changed.length
    ? `${reading.primary.guidance} As the changing lines unfold, the situation moves toward ${reading.relating.name}: ${reading.relating.guidance.toLowerCase()}`
    : `${reading.primary.guidance} With no changing lines, give particular attention to the primary hexagram as a picture of the present situation.`;

  $("changingLines").innerHTML = changed.length
    ? changed.map((line) => `<div class="changing-line">Line ${line.position} is changing (${line.total}). Consider where movement, excess, or a turning point is present.</div>`).join("")
    : '<div class="changing-line">No lines are changing in this cast.</div>';

  $("coinDetails").innerHTML = reading.lines
    .map((line, index) => `<li>Line ${index + 1}: ${line.coins.join(" + ")} = ${line.total}${line.changing ? " (changing)" : ""}</li>`)
    .join("");

  $("reading").scrollIntoView({ behavior: "smooth", block: "start" });
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
  const journal = loadJournal();
  if (!journal.some((entry) => entry.id === currentReading.id)) {
    journal.unshift(currentReading);
    localStorage.setItem(journalKey, JSON.stringify(journal));
  }
  $("saveReading").textContent = "Saved";
  renderJournal();
}

function renderJournal() {
  const journal = loadJournal();
  $("journalList").innerHTML = journal.length
    ? journal.map((entry) => `
      <article class="journal-entry">
        <time datetime="${entry.createdAt}">${new Date(entry.createdAt).toLocaleString()}</time>
        <h2>${escapeHtml(entry.question)}</h2>
        <p>${entry.primary.symbol} Hexagram ${entry.primary.number}, ${entry.primary.name} → ${entry.relating.symbol} ${entry.relating.name}</p>
      </article>
    `).join("")
    : '<p class="journal-empty">No saved readings yet. Your journal will begin when you save a cast.</p>';
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

$("castForm").addEventListener("submit", (event) => {
  event.preventDefault();
  $("saveReading").textContent = "Save to journal";
  renderReading(castReading($("question").value));
});

$("saveReading").addEventListener("click", saveCurrentReading);
document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));

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

window.addEventListener("appinstalled", () => {
  $("installButton").hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

renderJournal();
