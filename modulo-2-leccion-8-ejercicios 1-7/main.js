"use strict";
// ejercicio 1

let numbers = []; //genero el array vacío

//función para generar con un bucle los 100 número, incluirlos dentro del array, y consolear el array en cada vuelta del bucle.
function get100numbers() {
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }
}

get100numbers(); // ejecuto la funcion
console.log(numbers); //consoleo el array

// consoleo cada número añadido al array -- válido para el ej 1 y 2
// for (let number of numbers) {
//   console.log(number);
// }

// ejercicio 2

numbers = []; //reseteo el array

function getReversed100Numbers() {
  get100numbers();
  return numbers.reverse();
}
getReversed100Numbers();
console.log(numbers);

// for (let number of numbers {
//   console.log(number);
// }

// ejercicio 3

const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenNumbers = [];
const multipleThreeNumbers = [];
let result;

function bestLostNomber() {
  for (let number of lostNumbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
      console.log(evenNumbers);
    }
    if (number % 3 === 0) {
      multipleThreeNumbers.push(number);
      console.log(multipleThreeNumbers);
    }
  }
  result = evenNumbers.concat(multipleThreeNumbers);
}

bestLostNomber();
console.log(result);

// ejercicio 5

let triangle = "▲";
const tree = [];
let height = 5;
function lineTree() {
  for (let a = 0; a < height; a++) {
    tree.push(triangle);
    console.log(tree);
  }
}

lineTree();
