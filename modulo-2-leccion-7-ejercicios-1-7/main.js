"use strict";
// ejercicio 1
const movies = [];
movies[0] = "the notebook";
movies[1] = "joker";
movies[2] = "pride and prejudice";
console.log(movies);
// añadimos un nuevo elemento del array
movies[3] = "hunger games";
console.log(movies);

// ejercicio 2

for (let i = 1; i < 10; i += 1) {
  console.log("Voy por la vuelta" + i);
}

// ejercicio 3
let acc = 0;
for (let i = 0; i < 10; i += 1) {
  acc += 2;
}
console.log(`El resultado es: ${acc}`);

// ejercicio 4
for (let x = 2020; x <= 2035; x += 3) {
  console.log(`El próximo año con "luna del cazador" será el año ${x}`);
}

// ejercicio 5
const numbers = [1, 2, 3, 4, 5];
let total = 0;

for (const number of numbers) {
  total = total + number;
  console.log(total);
}

const average = total / numbers.length;
console.log(average);

//ejercicio 6
const button = document.querySelector(".button-js");
const inputs = document.querySelectorAll(".input-js");
// falta sacar los valores de los input.

// console.log(inputs);

function handlerPressButton() {
  for (const input of inputs) {
    console.log(
      `¡A mí también me encantó "${input}"! Tenemos mucho en común, humana.`
    );
  }
}

button.addEventListener("submit", handlerPressButton());
