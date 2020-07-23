"use strict";

function changeColor(event) {
  if (event.key === "r") {
    document.body.classList.toggle("class1");
  } else if (event.key === "m") {
    document.body.classList.toggle("class2");
  }
}

document.addEventListener("keydown", changeColor);
