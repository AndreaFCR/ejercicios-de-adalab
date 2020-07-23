"use strict";
const button = document.querySelector(".js-button");
const numberSelected = document.querySelector(".js-introNumber");
const clueText = document.querySelector(".js-clue");
const counterText = document.querySelector(".js-counter");
const randomNumber = getRandomNumber(100);
let attempts = 0;

console.log("Mi número aleatorio es:", randomNumber);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function numberValue() {
  const numberSelectedValue = numberSelected.value;
  return Number(numberSelectedValue);
}

function updateClue() {
  if (numberValue() >= 1 && numberValue() <= 100) {
    if (numberValue() === randomNumber) {
      clueText.innerHTML = "Has ganado campeona!!";
    } else if (numberValue() > randomNumber) {
      clueText.innerHTML = "Pista: demasiado alto";
    } else if (numberValue() < randomNumber) {
      clueText.innerHTML = "Pista: demasiado bajo";
    }
  } else {
    clueText.innerHTML = "Pista: El número debe estar entre 1 y 100";
  }
}

function updateCounter() {
  attempts += 1;
  counterText.innerHTML = attempts;
}

function handlerClick(ev) {
  ev.preventDefault();
  numberValue();
  updateClue();
  updateCounter();
}

button.addEventListener("click", handlerClick);
