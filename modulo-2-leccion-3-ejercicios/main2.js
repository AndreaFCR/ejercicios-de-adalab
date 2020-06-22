// EJERCICIO 2

const myName = "Andrea";
// const myName = "Maria";

if (myName === "Andrea") {
  console.log(`Bienvenida, ${myName}`);
} else {
  console.log(
    "Lo siento pero el usuario que has introducido no está registrado"
  );
}

//  EJERCICIO 3

let number = 17;

if (number === 0) {
  console.log("El número es 0");
} else if (number < 0) {
  console.log("El número es negativo");
} else if (13 < number + 2 && number + 2 <= 20) {
  console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
} else if (20 < number && number < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}

//  EJERCICIO 4

let ageDog = 13;
let ageHuman;

if (ageDog === 1) {
  ageHuman = 15;
  console.log(`La edad del perro son ${ageHuman} años humanos`);
} else if (ageDog === 2) {
  ageHuman = 15 + 9;
  console.log(`La edad del perro son ${ageHuman} años humanos`);
} else {
  ageHuman = 15 + 9 + 5 * (ageDog - 2);
  console.log(`La edad del perro son ${ageHuman} años humanos`);
}
