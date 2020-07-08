"use strict";

// ejercicio 1

const marks = [5, 4, 6, 7, 9];
//función que añade 1
const sumOnePoint = (mark) => mark + 1;
//método funcional que recorre el array y hace lo q dice la función
const inflatedMarks = marks.map(sumOnePoint);

console.log(inflatedMarks);

// ejercicio 2

const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
//función que añade bienvenida al array
const sayHello = (name) => "Bienvenida, " + name;
//método funcional que recorre el array y hace lo q dice la función
const welcome = names.map(sayHello);

console.log(welcome);

// ejercicio 3

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

// ejercicio 8

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

const winner = function (acc, runner) {
  if (runner.time < acc.time) {
    return (acc = runner);
  } else {
    return acc;
  }
};

const winnerName = runners.reduce(winner);
console.log("El ganador es:", winnerName.name);

// ejercicio 10

const users2 = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

// buscamos en cada uno de los user el pin 5232 y nos devuelve user que coincida
// const findPin = users2.find((user) => user.pin === 5232);
// console.log(findPin);

// buscar entre los user y devuelve el indice
const findPin = users2.findIndex((user) => user.pin === 5232);
console.log(findPin);
// con el splice lo quitamos (indice, nºelementos a quitar)
users2.splice(3, 1);
console.log(users2);
