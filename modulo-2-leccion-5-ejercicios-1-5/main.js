"use strict";

// ejercicio 1

const button = document.querySelector(".button");
button.addEventListener("click", function changeText() {
  document.querySelector(".text").innerHTML =
    "Mi primer click, ¡ole yo y la mujer que me parió!";
});

// ejercicio 2

const button2 = document.querySelector(".button2");

function showAlert() {
  const name = document.querySelector(".js-input").value;
  console.log(`Hola ${name}`);
}

button2.addEventListener("click", showAlert);

// ejercicio 3

const lorem = document.querySelector(".js-lorem");

function duplicate() {
  lorem.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab consequatur corrupti quia praesentium optio pariatur delectus minus distinctio unde doloribus ,impedit voluptatum, quos reprehenderit sint voluptatibus hic a iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab consequatur corrupti quia praesentium optio pariatur delectus minus distinctio unde doloribus ,impedit voluptatum, quos reprehenderit sint voluptatibus hic a iste?";
}

lorem.addEventListener("mouseover", duplicate);

// ejercicio 4

console.log(window.scrollY);
if () {}