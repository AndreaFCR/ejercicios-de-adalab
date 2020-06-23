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

let withoutIva = 1;

function iva(withoutIva) {
  return parseFloat(withoutIva * 0.21);
}

const withIva = iva(withoutIva);
const total = parseFloat(withoutIva + withIva);
console.log(`Precio sin IVA: ${withoutIva}, IVA: ${withIva} y Total: ${total}`);

// ejercicio 4

function evenOrOdd(a) {
  return a % 2 === 0;
}
const even = evenOrOdd(2);
console.log(even);

// ejercicio 5
