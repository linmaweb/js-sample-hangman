const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word"
);

const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "application",
  "programming",
  "interface",
  "document",
  "errors",
  "instance",
  "method",
  "object",
  "variable",
  "cookie",
  "literal",
  "asynchronous",
  "callback",
  "declarative",
  "fallback",
  "immutability",
  "polyfill",
  "hoisting",
  "memoization",
  "polymorphism",
];

export {
  wordEl,
  wrongLettersEl,
  playAgainBtn,
  popup,
  notification,
  finalMessage,
  finalMessageRevealWord,
  figureParts,
  words,
};
