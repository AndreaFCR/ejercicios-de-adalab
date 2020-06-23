// ejercicio 1

function times(a, b) {
  return a * b;
}

const test = times(5, 4);
console.log(`El resultado de la función es ${test}`);

// ejercicio 2

function average(a, b, c, d) {
  return (a + b + c + d) / 4;
}

const test2 = average(1, 2, 3, 4);
console.log(`El resultado de la función es ${test2}`);

// ejercicio 3

let withoutIva = 5;

function iva(withoutIva) {
  return parseFloat(a * 0.21);
}

const withIva = iva(withoutIva);
const total = parseFloat(withoutIva + withIva);
console.log(`Precio sin IVA: ${withoutIva}, IVA: ${withIva} y Total: ${total}`);
// falta algo...
