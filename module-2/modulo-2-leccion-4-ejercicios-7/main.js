"use strict";

// ejercicio 4

function evenOrOdd(number) {
  return number % 2 === 0; //cumple la regla de que el resultado es 0, es decir, es par?
}
const even = evenOrOdd(3); //uso la función con number = ()
console.log(even);

// ejercicio 5 y 6

function getEl(selector) {
  const element = document.querySelector(selector);
  // console.log(element); para comprobar lo que es element
  if (element === null) {
    console.log(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  } else {
    return element;
  }
}

// ejercicio 7

const btnEl = getEl(".js-btn1");
const value = btnEl.innerHTML; //devuelve el valor del elemento en la const value
const valueNumber = Number(value); // convierte el valor a número

if (evenOrOdd(valueNumber) === true) {
  console.log(`${valueNumber} es un número PAR`);
} else {
  console.log(`${valueNumber} es un número IMPAR`);
}
