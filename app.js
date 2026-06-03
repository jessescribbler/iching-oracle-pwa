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

const RECOVERY_THEMES = [
  ["Let strength become service, not pressure.", "The shadow is proving, pushing, or mistaking intensity for integrity.", "Use your power in a way that leaves room for consent, timing, and consequence.", "Where can I act clearly without trying to overpower the outcome?"],
  ["Let receptivity be an active strength.", "The shadow is disappearing into another person’s needs or waiting without discernment.", "Support what is true without abandoning your own ground.", "What can I receive without surrendering my center?"],
  ["Beginnings deserve structure before speed.", "The shadow is treating early confusion as evidence that the whole path is wrong.", "Name the next workable task and let order emerge from repetition.", "What small piece of order would make this beginning more livable?"],
  ["Become teachable without becoming gullible.", "The shadow is asking the same question until the answer changes or refusing guidance that asks something of you.", "Seek one honest lesson and practice it before asking for more.", "What lesson have I already received but not yet lived?"],
  ["Waiting can be preparation rather than paralysis.", "The shadow is forcing certainty because uncertainty feels unbearable.", "Feed yourself, gather facts, and prepare for the moment that is actually coming.", "How can I make this waiting period nourishing instead of consuming?"],
  ["A boundary is clearer than a battle.", "The shadow is pursuing vindication long after the conflict has stopped serving truth.", "Decide what must be said, what must be protected, and where to stop.", "What outcome would be fair even if it does not feel triumphant?"],
  ["Discipline should protect life, not harden it.", "The shadow is using urgency to excuse poor leadership or dehumanizing choices.", "Create a plan that people can trust because its purpose and limits are clear.", "What kind of leadership would make this difficult work safer?"],
  ["Belonging grows around sincerity.", "The shadow is chasing inclusion where trust is not mutual.", "Notice the people and practices that become more reliable when you are honest.", "Where is connection being earned rather than merely promised?"],
  ["Small restraints can protect a larger freedom.", "The shadow is dismissing details because they do not feel dramatic enough.", "Tend the modest habit, agreement, or repair that keeps the weather from worsening.", "Which small discipline would change the atmosphere over time?"],
  ["Careful conduct is not fearfulness.", "The shadow is confusing boldness with entitlement.", "Move with respect for the power in the room and for the consequences of each step.", "What would respectful courage look like here?"],
  ["Peace is an opening to build, not a reason to drift.", "The shadow is assuming harmony will maintain itself.", "Use the easier season to strengthen habits that can survive harder weather.", "What deserves to be made durable while cooperation is possible?"],
  ["When the way is blocked, preserve the part of you that must not be traded away.", "The shadow is bargaining with your values to regain movement.", "Stop feeding what is stagnant and keep your integrity available for a better season.", "What am I being asked not to participate in?"],
  ["Shared purpose needs principles wide enough to include others and clear enough to guide them.", "The shadow is mistaking agreement for fellowship.", "Speak the purpose plainly and let differences become visible without contempt.", "What common cause is strong enough to hold honest difference?"],
  ["Having more creates a duty to use it well.", "The shadow is treating abundance as proof of personal importance.", "Let resources, influence, and attention serve what is genuinely valuable.", "What responsibility comes with what I have been given?"],
  ["Modesty is accurate self-knowledge.", "The shadow is shrinking to avoid envy or inflating to avoid vulnerability.", "Take up the space your work requires, no more and no less.", "What would it mean to be neither smaller nor larger than the truth?"],
  ["Energy needs a worthy direction.", "The shadow is letting excitement outrun preparation or consent.", "Turn enthusiasm into rhythm, coordination, and follow-through.", "What structure would help this energy become trustworthy?"],
  ["Following is wise when it follows reality.", "The shadow is adapting so completely that your values become invisible.", "Let the changing situation teach you, but keep your inner compass awake.", "What is worth following, and what must I decline to follow?"],
  ["Repair begins at the root.", "The shadow is cleaning up appearances while protecting the cause of the harm.", "Name what spoiled the pattern, take responsibility, and change the conditions that keep repeating it.", "What repair would address the cause rather than the image?"],
  ["Approach with warmth and accountability together.", "The shadow is rushing closeness before trust can carry it.", "Meet the opening generously while remembering that every welcome has a boundary.", "How can I come closer without asking closeness to erase discernment?"],
  ["Observation changes participation.", "The shadow is watching from a distance to avoid the risk of being changed.", "Look long enough to see your own role, then let insight become conduct.", "What becomes visible when I stop narrating and simply observe?"],
  ["Some obstacles need a clean bite.", "The shadow is avoiding necessary firmness until resentment does the speaking.", "Separate fact from story, make the consequence proportionate, and finish the action.", "What clear decision would prevent this obstacle from growing?"],
  ["Beauty should reveal substance.", "The shadow is polishing the surface so no one notices what is unresolved.", "Use form, language, and care to make truth easier to receive, not easier to evade.", "What would remain if the presentation were removed?"],
  ["Let what is already falling fall without sacrificing the foundation.", "The shadow is exhausting yourself to preserve a structure that no longer protects life.", "Release the nonessential and shelter what can carry a new beginning.", "What must be protected while the old form comes apart?"],
  ["Return does not need drama.", "The shadow is waiting to feel completely ready before taking one honest step.", "Come back to the practice, value, or relationship with humility and consistency.", "What is the simplest genuine return available today?"],
  ["Innocence means acting without a hidden bargain.", "The shadow is calling something pure while secretly demanding a particular reward.", "Choose the action you can stand behind even if the outcome is not yours to control.", "What would I do if I were not trying to manipulate the response?"],
  ["Restraint can gather real strength.", "The shadow is mistaking stored power for unused potential.", "Study, prepare, and let capacity mature before asking it to carry a greater load.", "What strength is being built by not acting yet?"],
  ["Nourishment is a moral question.", "The shadow is consuming what keeps you dysregulated or offering what keeps others dependent.", "Notice what enters your mind, body, and relationships, and what leaves through your words.", "What am I feeding, and what is feeding me?"],
  ["An unusual load requires an unusual response.", "The shadow is normalizing strain until collapse feels sudden.", "Acknowledge the weight, reinforce what can hold, and change course before endurance becomes damage.", "Where is the load already beyond ordinary capacity?"],
  ["Repeated difficulty asks for practiced steadiness.", "The shadow is treating every return of fear as proof that no progress has been made.", "Build skills that can travel with you through the deep water.", "What practice helps me remain myself inside uncertainty?"],
  ["Clarity needs a worthy place to attach.", "The shadow is using insight to scorch, expose, or perform superiority.", "Let understanding illuminate the next faithful action.", "What truth needs warmth as well as light?"],
  ["Influence works best without coercion.", "The shadow is confusing chemistry, persuasion, or longing with mutual readiness.", "Notice how you affect and are affected, then choose the influence you consent to carry.", "What is moving me, and do I want to be moved by it?"],
  ["What lasts must be renewed.", "The shadow is calling rigidity commitment or novelty growth.", "Keep returning to the living principle beneath the routine.", "Which part of this commitment needs renewal rather than abandonment?"],
  ["Retreat can preserve dignity and strength.", "The shadow is staying close to prove courage or withdrawing to punish.", "Step back with a clear purpose and without surrendering what matters.", "What distance would help me act from choice instead of reaction?"],
  ["Power is safest when it can restrain itself.", "The shadow is using strength because it is available rather than because it is right.", "Let timing, proportion, and responsibility govern action.", "How would I use this power if I had nothing to prove?"],
  ["Progress becomes real when it serves more than your image.", "The shadow is seeking visibility without substance or hiding useful work from fear.", "Bring your contribution into the light and let it be evaluated honestly.", "What useful work is ready to be seen?"],
  ["Protect the light without pretending the darkness is harmless.", "The shadow is exposing your inner life where it will be used against you or hiding so completely that you lose yourself.", "Keep your clarity alive through quiet, disciplined choices.", "What truth must I protect until the environment can receive it?"],
  ["Close relationships reveal values through daily conduct.", "The shadow is relying on affection to excuse disorder, inconsistency, or unequal roles.", "Make expectations, responsibilities, and care visible in ordinary life.", "What household pattern is teaching more loudly than our words?"],
  ["Difference can be honest without becoming contempt.", "The shadow is demanding total agreement or using difference as a reason to disengage.", "Find the small point of cooperation while respecting what cannot be merged.", "What can we do together without pretending we are the same?"],
  ["A blocked road is information.", "The shadow is pushing harder at the same obstacle because changing course feels like defeat.", "Seek wise support, reassess the route, and conserve strength for a workable path.", "What is this obstruction asking me to reconsider?"],
  ["Release should simplify the next step.", "The shadow is clinging to the identity built around the problem after the problem begins to loosen.", "Resolve what remains, forgive what can be released, and travel lighter.", "What can I stop carrying now that the danger has changed?"],
  ["Decrease can restore what excess has distorted.", "The shadow is treating every reduction as deprivation or sacrificing the essential to preserve appearances.", "Let go of what consumes more life than it returns.", "What loss would actually make room for health?"],
  ["Growth is trustworthy when benefit circulates.", "The shadow is expanding faster than character, capacity, or care.", "Use the opening promptly and share the gain.", "Who besides me should be strengthened by this increase?"],
  ["A breakthrough needs truth without cruelty.", "The shadow is confusing public clarity with humiliation or delaying until pressure explodes.", "State the matter, name the consequence, and do not become the aggression you oppose.", "What truth must be spoken plainly now?"],
  ["A powerful influence deserves an early boundary.", "The shadow is romanticizing intensity because it arrived suddenly.", "Meet what has appeared with curiosity and firm limits.", "What boundary would help me see this influence clearly?"],
  ["Gathering needs a center worthy of trust.", "The shadow is bringing people together around fear, personality, or vague belonging.", "Clarify the purpose, honor the contributions, and make room for grief and celebration.", "What are we truly gathering around?"],
  ["Upward growth is built one earned step at a time.", "The shadow is comparing the pace of growth until steady effort feels invisible.", "Keep doing the work that makes the next level inhabitable.", "What small effort is quietly becoming a foundation?"],
  ["Outer limits do not have to imprison the inner life.", "The shadow is letting hardship define your worth or pretending limits are not real.", "Speak honestly, keep faith with what matters, and use the freedom still available.", "What remains free in me even here?"],
  ["The shared source matters more than the container around it.", "The shadow is arguing over ownership while neglecting access, maintenance, or nourishment.", "Repair the way people reach what sustains them.", "What source of nourishment needs better care or better access?"],
  ["Real change waits for the right time and then becomes unmistakable.", "The shadow is changing the surface to avoid deeper transformation or rebelling before trust is ready.", "Let the reasons mature, communicate clearly, and make the change complete.", "What has truly ripened beyond the old form?"],
  ["Transformation depends on what is placed in the vessel.", "The shadow is expecting a new outcome while feeding the same ingredients.", "Choose what you cultivate, combine, and offer with care.", "What am I putting into the process that is shaping me?"],
  ["Shock can awaken without becoming a permanent home.", "The shadow is living in alarm after the moment of danger has passed.", "Regain your center, learn what the shock revealed, and restore ordinary care.", "What did this shock ask me to notice?"],
  ["Stillness is the ability to stop at the right place.", "The shadow is freezing to avoid feeling or moving because stopping feels unsafe.", "Let body, speech, and attention become quiet enough to hear what should not continue.", "Where would a clean stop protect me?"],
  ["Gradual progress honors the pace of trust.", "The shadow is rushing a stage that must become stable before the next one can hold.", "Let each small arrival become a real home for the next step.", "What stage needs to be lived fully before I move on?"],
  ["A limited position still deserves self-respect.", "The shadow is accepting an arrangement that requires self-erasure or demanding authority that has not been granted.", "See the role clearly, protect your dignity, and do not confuse longing with a secure place.", "What does this arrangement actually allow, and what does it cost?"],
  ["Fullness is brief, so use the light.", "The shadow is postponing a needed decision because the moment feels abundant enough to last.", "Act while the situation is visible and include others in the clarity.", "What should be decided while the whole picture can be seen?"],
  ["When you are not at home, travel lightly and behave carefully.", "The shadow is seeking permanent security from a temporary place or leaving damage because you do not expect to stay.", "Keep your commitments portable: humility, clarity, and respect.", "What would good conduct look like in this temporary season?"],
  ["Gentle influence becomes powerful through repetition.", "The shadow is hinting instead of speaking clearly or pressing so hard that subtlety is lost.", "Enter the situation patiently, name the purpose, and keep returning to what is true.", "What truth needs steady repetition rather than greater force?"],
  ["Joy deepens through honest exchange.", "The shadow is using pleasantness to avoid conflict or seeking stimulation that leaves emptiness behind.", "Create the kind of conversation where delight and truth can coexist.", "What kind of joy makes honesty easier?"],
  ["What divides can sometimes be dissolved.", "The shadow is scattering energy without a center or using togetherness to avoid real differences.", "Return to the shared purpose and soften the barriers that no longer protect anything.", "What separation is ready to loosen?"],
  ["A useful limit creates freedom.", "The shadow is making rules so rigid they become lifeless or refusing structure because it feels restrictive.", "Choose boundaries that protect energy, time, and trust.", "Which limit would make the right action easier?"],
  ["Inner truth is the agreement between word, action, and heart.", "The shadow is performing sincerity while withholding the fact that matters.", "Speak from the center and let behavior verify the message.", "Where do my actions need to catch up with what I say is true?"],
  ["Small matters deserve careful attention.", "The shadow is reaching for a grand gesture when modest responsibility is what the moment requires.", "Stay close to the details, lower the ambition, and complete the nearby duty.", "What small thing would be enough for today?"],
  ["Completion still needs care.", "The shadow is relaxing attention because the structure appears finished.", "Protect the gains, notice early disorder, and keep tending the ordinary work.", "What could quietly unravel if I assume the work is over?"],
  ["The crossing is not complete until you are truly across.", "The shadow is celebrating too early or losing heart because the final steps are delicate.", "Stay attentive, keep your balance, and finish the transition with care.", "What final detail deserves my full attention?"]
];

const LINE_POSITIONS = [
  "At the beginning, keep the response small enough to be honest.",
  "As the situation meets other people, choose support and reciprocity carefully.",
  "At the point of friction, notice where effort is becoming strain.",
  "With more influence available, act without trying to control the whole field.",
  "At the heart of the matter, let values and behavior agree.",
  "At the height of the pattern, watch for excess and know when to release."
];

function plainLanguageLine(text) {
  return text
    .replace(/^The (first|second|third|fourth|fifth|sixth|topmost) line[^,]*,\s*/i, "")
    .replace(/^In the (first|second|third|fourth|fifth|sixth|topmost) line[^,]*,\s*/i, "")
    .replace(/\(shows? (?:its|the) subject(?: as)?\)/gi, "someone")
    .replace(/\(we see its subject as\)/gi, "someone is")
    .replace(/\(there will be\)/gi, "there is")
    .replace(/\s+/g, " ")
    .trim();
}

function buildRecoveryCottage(hexagram, theme, legge) {
  const lower = TRIGRAMS[hexagram.pattern.slice(0, 3)];
  const upper = TRIGRAMS[hexagram.pattern.slice(3, 6)];
  const oracle = `${hexagram.guidance}\n${theme[0]}`;
  const image = `${upper.name} above ${lower.name}: ${upper.image} meets ${lower.image}. ${theme[2]}`;
  const reflection = `${theme[1]} ${theme[2]}`;
  const questions = [theme[3], `Where is ${hexagram.name.toLowerCase()} asking for a more reality-based response?`];
  const lines = legge.lines.map((lineText, index) => ({
    position: index + 1,
    rendering: plainLanguageLine(lineText),
    reflection: `${LINE_POSITIONS[index]} Read the old image beside this hexagram’s practice: ${theme[2].toLowerCase()}`
  }));
  return { oracle, image, reflection, questions, lines };
}

const HEXAGRAMS = HEXAGRAM_SOURCE.map(([pattern, name, guidance], index) => {
  const hexagram = { number: index + 1, pattern, name, guidance, symbol: String.fromCodePoint(0x4dc0 + index) };
  const legge = LEGGE_TEXT[index];
  return { ...hexagram, legge, recovery: buildRecoveryCottage(hexagram, RECOVERY_THEMES[index], legge) };
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

  $("leggeTitle").textContent = `${reading.primary.number}. ${reading.primary.name}`;
  $("leggeJudgment").textContent = reading.primary.legge.judgment;
  $("leggeImage").textContent = reading.primary.legge.image;
  $("leggeChangingLinesSection").hidden = !changed.length;
  $("leggeChangingLines").innerHTML = changed.map((line) => {
    const text = reading.primary.legge.lines[line.position - 1];
    return `<article class="changing-line">
      <p class="line-heading">Line ${line.position} · ${line.total}</p>
      <blockquote>${escapeHtml(text)}</blockquote>
    </article>`;
  }).join("");
  $("leggeSourceLink").href = reading.primary.legge.sourceUrl;

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
