"use strict";

// ejercicio 1

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};

const adalaber2 = {
  name: "Rocio",
  age: 25,
  job: "actriz",
};

const sentence1 = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

const sentence2 = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;

const paragraph = document.querySelector(".js-text");
paragraph.innerHTML = sentence2;

// ejercicio 2

adalaber1.run = () => {
  console.log("Estoy corriendo");
};

adalaber1.runAMarathon = (distance) => {
  console.log(`Estoy corriendo una maratón de ${distance} kilómetros`);
};

adalaber1.run();
adalaber1.runAMarathon(42);

// ejercicio 3

adalaber1.showBio = function () {
  console.log(
    `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`
  );
};

adalaber1.showBio();
