"use strict";

const btn = document.querySelector(".button-js");
const face = document.querySelector(".face-js");
const select = document.querySelector(".select-js");
const container = document.querySelector(".container-js");

function handleUpdateClick() {
  //pintar cara
  updateFace();
  //cambiar color
  updateBackground();
}

function updateFace() {
  const selectValue = select.value;
  face.innerHTML = selectValue;
}

function updateBackground() {
  const randomNumber = getRandomNumber();
  container.classList.remove("container-color-even");
  container.classList.remove("container-color-odd");
  if (randomNumber % 2 === 0) {
    container.classList.add("container-color-even");
  } else {
    container.classList.add("container-color-odd");
  }
}

const getRandomNumber = () => parseInt(Math.random() * 100);

// PASAMOS DESDE LAS DOS FORMAS DE FUNCTION A UNA ARROW
// const getRandomNumber = () => {
//   const randomNumber = parseInt(Math.random() * 100);
//   return randomNumber;
// }

// const getRandomNumber = function () = {
//     const randomNumber = parseInt(Math.random() * 100);
//     return randomNumber;
// }

btn.addEventListener("click", handleUpdateClick);
