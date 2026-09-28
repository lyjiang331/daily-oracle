// The page follows one cause-and-effect chain:
// click the crystal ball -> choose a number -> choose a message -> update the page.

const crystalBall = document.getElementById("crystal-ball");
const fortuneNumber = document.getElementById("fortune-number");
const resultCard = document.getElementById("result-card");
const resultType = document.getElementById("result-type");
const resultMessage = document.getElementById("result-message");
const buttonPrompt = document.getElementById("button-prompt");
const todayDate = document.getElementById("today-date");

// These arrays make it easy to add, remove, or rewrite possible messages.
const encouragements = [
  "A slow day is not a wasted day. Small progress still counts.",
  "You do not need to solve everything today. Choose the next kind step.",
  "The effort nobody sees is still building something important.",
  "You have handled uncertain days before. You can meet this one, too.",
  "Rest can be part of the work, not a reward you have to earn.",
  "Your pace is allowed to look different from everyone else’s.",
  "One honest attempt is more meaningful than a perfect plan.",
  "Make room for the possibility that things can go better than expected.",
  "You are not behind. You are living a timeline that belongs to you.",
  "Be on your own side today, especially when something feels difficult.",
];

const lightMessages = [
  "Today’s forecast: a 90% chance you walk into a room and forget why.",
  "Fun fact: octopuses have three hearts. Your group chat probably has fewer.",
  "Your lucky strategy today is turning it off and on again.",
  "A cloud weighs about a million pounds, yet it still looks effortless. Iconic.",
  "Today you have been selected to receive one premium-quality little treat.",
  "Bananas are berries, but strawberries are not. Reality enjoys chaos too.",
  "Your aura says: opened the fridge, found no new information, closed it.",
  "Sea otters hold hands while sleeping so they do not drift apart. Very organized.",
  "The moon is moving away from Earth each year. Even the moon needs space.",
  "Your daily quest: notice one oddly shaped object and give it a backstory.",
];

todayDate.textContent = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
}).format(new Date());

let previousNumber = null;
let revealTimer = null;

function pickRandomItem(items) {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

function pickNumber() {
  let number = Math.floor(Math.random() * 100) + 1;

  // Avoid showing the exact same number twice in a row.
  while (number === previousNumber) {
    number = Math.floor(Math.random() * 100) + 1;
  }

  previousNumber = number;
  return number;
}

function getFortune(number) {
  if (number < 50) {
    return {
      label: "A message of encouragement",
      message: pickRandomItem(encouragements),
    };
  }

  if (number === 50) {
    return {
      label: "The balance point",
      message: "Exactly between two possibilities. You do not have to choose immediately.",
    };
  }

  return {
    label: "A little brightness",
    message: pickRandomItem(lightMessages),
  };
}

function revealFortune() {
  if (revealTimer !== null) return;

  const number = pickNumber();
  const fortune = getFortune(number);

  crystalBall.classList.remove("is-revealing", "has-result");
  resultCard.classList.remove("has-result");

  // Restart the animation even when the button is clicked several times.
  void crystalBall.offsetWidth;

  fortuneNumber.textContent = "";
  buttonPrompt.textContent = "Reading the light…";
  crystalBall.setAttribute("aria-busy", "true");
  crystalBall.classList.add("is-revealing");

  const revealDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 40 : 680;

  revealTimer = window.setTimeout(() => {
    fortuneNumber.textContent = number;
    resultType.textContent = fortune.label;
    resultMessage.textContent = fortune.message;
    buttonPrompt.textContent = "Ask again";
    crystalBall.classList.remove("is-revealing");
    crystalBall.classList.add("has-result");
    crystalBall.setAttribute("aria-busy", "false");
    resultCard.classList.add("has-result");
    revealTimer = null;
  }, revealDelay);
}

crystalBall.addEventListener("click", revealFortune);
