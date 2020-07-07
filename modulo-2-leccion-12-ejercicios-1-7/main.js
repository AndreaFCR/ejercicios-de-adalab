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

const NYImages = [
  "./images/foto_NY_1.jpg",
  "./images/foto_NY_2.jpg",
  "./images/foto_NY_3.jpg",
];

const images = [
  {
    image0: "./images/foto_madrid_1.jpg",
    image1: "./images/foto_madrid_2.jpg",
    image2: "./images/foto_madrid_3.jpg",
  },
  {
    image0: "./images/foto_paris_1.jpg",
    image1: "./images/foto_paris_2.jpg",
    image2: "./images/foto_paris_3.jpg",
  },
];

// for (let i = 0; i < images.length; i++) {
//   const newImage = document.createElement("img");
//   newImage.setAttribute("src", `${images[0].image0}`);
//   container.appendChild(newImage);
// }

for (let NYimage of NYImages) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `${NYimage}`);
  container.appendChild(newImage);
}
// meter condicionales para cada uno de los valores del select. usar event current target y un listener de change.
