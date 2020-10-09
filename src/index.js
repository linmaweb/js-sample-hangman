import {
  wordEl,
  wrongLettersEl,
  playAgainBtn,
  popup,
  notification,
  finalMessage,
  finalMessageRevealWord,
  figureParts,
  words,
} from "./variables";

let selectedWord = words[Math.floor(Math.random() * words.length)];
let playable = true;
const correctLetters = [];
const wrongLetters = [];

const displayWord = () => {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ""}
          </span>
        `
      )
      .join("")}
  `;

  const innerWord = wordEl.innerText.replace(/[ \n]/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won!";
    finalMessageRevealWord.innerText = "";
    popup.style.display = "flex";
    playable = false;
  }
}

const updateWrongLettersEl = () => {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong:</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Unfortunately you lost...";
    finalMessageRevealWord.innerText = `The word was: ${selectedWord}`;
    popup.style.display = "flex";
    playable = false;
  }
}

const showNotification = () => {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

window.addEventListener("keydown", (e) => {
  if (playable) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key.toLowerCase();

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          correctLetters.push(letter);
          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);
          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
  }
});

playAgainBtn.addEventListener("click", () => {
  playable = true;
  correctLetters.splice(0);
  wrongLetters.splice(0);
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();
  updateWrongLettersEl();
  popup.style.display = "none";
});

displayWord();
