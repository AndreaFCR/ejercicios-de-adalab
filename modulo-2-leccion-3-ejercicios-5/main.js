"use strict";

const normalClass = document.querySelector(".normal");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");

if (normalClass.classList.contains("success")) {
  title.innerHTML = "CORRECTO";
  subtitle.innerHTML = "Los datos son correctos";
} else if (normalClass.classList.contains("error")) {
  title.innerHTML = "ERROR";
  subtitle.innerHTML = "Ha surgido un error";
} else if (normalClass.classList.contains("warning")) {
  title.innerHTML = "AVISO";
  subtitle.innerHTML = "Tenga cuidado";
}

// EJERCICIO 6

let avocados;
const avocadoPrice = 1.5;
const money = 33;

// if (money >= avocadoPrice) {
//   avocados = money / avocadoPrice;
// } else {
//   avocados = 0;
// }

money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);

// EJERCICIO 7

const currentYear = 3;
let leapYear = currentYear % 4 === 0;
let nextLeapYear = leapYear > currentYear;

if (currentYear % 4 === 0) {
  console.log(`El año ${currentYear} es bisiesto`);
} else {
  console.log(
    `El año ${currentYear} no es bisiesto y el siguiente año bisiesto es ${nextLeapYear.value}`
  );
}
