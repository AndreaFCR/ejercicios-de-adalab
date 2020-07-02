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

// ejercicio 4

const items = document.querySelectorAll(".items-js"); //seleccionamos todos los li en un array
const tasksCheck = document.querySelectorAll(".tasks");
const check1 = document.querySelector(".task1-js");
const check2 = document.querySelector(".task2-js");
const check3 = document.querySelector(".task3-js");
const check4 = document.querySelector(".task4-js");
const taskNumber = document.querySelector(".taskNumber-js");
let counter = 4;
taskNumber.innerHTML = counter;

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

// recorre el array de tasks y pinta cada task en cada uno de los li.

function showTasks() {
  let i = -1;
  for (let task of tasks) {
    i += 1;
    items[i].innerHTML = tasks[i].name;
  }
}
showTasks();

// recorre la lista de tasks y si tiene el atributo completed como true le añade la clase cross que tacha el texto.

function crossItems() {
  let i = -1;
  for (let task of tasksCheck) {
    i += 1;
    if (tasksCheck[i].checked === true) {
      items[i].classList.add("cross");
    } else {
      items[i].classList.remove("cross");
    }
  }
}

function isCompleted() {
  let i = -1;
  for (let task of tasksCheck) {
    i += 1;
    if (tasksCheck[i].checked === true) {
      tasks[i].completed = true;
    } else {
      tasks[i].completed = false;
    }
  }
}

function handlerClick() {
  crossItems();
  isCompleted();
}

// function counterNumber() {
//   if (tasksCheck.checked === true) {
//     counter -= 1;
//     console.log(counter);
//   }
//   if (tasksCheck.checked === false) {
//     counter += 1;
//     console.log(counter);
//   }
// }

// counterNumber();

// faltan parte d

check1.addEventListener("click", handlerClick);
check2.addEventListener("click", handlerClick);
check3.addEventListener("click", handlerClick);
check4.addEventListener("click", handlerClick);

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
