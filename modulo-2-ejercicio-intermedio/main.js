"use strict";

const btn = document.querySelector(".button-js");
const face = document.querySelector(".face-js");
const select = document.querySelector(".select-js");
const container = document.querySelector(".container-js");

function handleUpdateClick(ev) {
  //pintar cara
  const selectValue = select.value;
  face.innerHTML = selectValue;
  //cambiar color
  const randomNumber = parseInt(Math.random() * 100);
  container.classList.remove("container-color-even");
  container.classList.remove("container-color-odd");
  if (randomNumber % 2 === 0) {
    container.classList.add("container-color-even");
  } else {
    container.classList.add("container-color-odd");
  }
}

btn.addEventListener("click", handleUpdateClick);
