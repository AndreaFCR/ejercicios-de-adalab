"use strict";

// ejercicio 1
const numbers = [1, 2, 3, 4];
const items = document.querySelector(".list-js");

for (let number of numbers) {
  const newItem = document.createElement("li");
  const newContent = document.createTextNode(`${number}`);
  newItem.appendChild(newContent);
  items.appendChild(newItem);
}

// items.remove(); //para remover todos los elementos añadidos en el ul

// ejercicio 2

const container = document.querySelector(".container-js");
const selection = document.querySelector(".js-select");

const NYImages = [
  "./images/foto_NY_1.jpg",
  "./images/foto_NY_2.jpg",
  "./images/foto_NY_3.jpg",
];

const madridImages = [
  "./images/foto_madrid_1.jpg",
  "./images/foto_madrid_2.jpg",
  "./images/foto_madrid_3.jpg",
];

const parisImages = [
  "./images/foto_paris_1.jpg",
  "./images/foto_paris_2.jpg",
  "./images/foto_paris_3.jpg",
];

function handleChange(ev) {
  if (ev.currentTarget.value === "1") {
    for (let madridImage of madridImages) {
      const newImage = document.createElement("img");
      newImage.setAttribute("src", `${madridImage}`);
      container.appendChild(newImage);
    }
  } else if (ev.currentTarget.value === "2") {
    for (let parisImage of parisImages) {
      const newImage = document.createElement("img");
      newImage.setAttribute("src", `${parisImage}`);
      container.appendChild(newImage);
    }
  } else if (ev.currentTarget.value === "3") {
    for (let NYImage of NYImages) {
      const newImage = document.createElement("img");
      newImage.setAttribute("src", `${NYImage}`);
      container.appendChild(newImage);
    }
  }
}

selection.addEventListener("change", handleChange);

// falta hacer un remove de los anteriores con container.remove(); pero... donde???

// ejercicio 3, repo concha
