"use strict";
// vamos a cargar los datos desde un api y guardarlos en un array llamado products. lo metemos en una función aunque sea al cargar la página. creamos un array cart que recoge los elementos de la cesta
let products = [];
let cart = [];

const getDataFromApi = () => {
  fetch("./api/data.json")
    .then((response) => response.json())
    .then((data) => {
      products = data.items; //metemos los datos en el array products
      paintProducts(); //se pinta cuando ya se reciban los datos
    });
};

// NOTA: para pensar cómo pintar los datos con JS es mejor pintar primero en html con datos falsos y luego ver cómo hacerlo con JS

// función para pintar los productos

const paintProducts = () => {
  let codeHTML = ""; // creamos una const donde iremos añadiendo lo que se pinta del array products que contine nuestros datos y, con un bucle, pintamos codeHTML para cada uno de los elementos del array
  for (let i = 0; i < products.length; i++) {
    codeHTML += `<article class="card">`;
    codeHTML += `<img src="${products[i].imageUrl}" 
    class="card__img" alt="Camiseta de ${products[i].name}"/>`;
    codeHTML += `<h3 class="card__title">${products[i].name}</h3>`;
    codeHTML += `<p class="card__description">${products[i].price}€</p>`;
    codeHTML += `<button class="card__btn js-productInc" i = "${i}" id = "${products[i].id}">Añadir a la cesta</button>`;
    codeHTML += `</article>`;
  }
  const cardsElement = document.querySelector(".js-cards"); //seleccionamos el sitio donde pintamos los elementos
  cardsElement.innerHTML = codeHTML; //pintamos
  listenProductsClick(); //escuchamos los botones pulsados después de pintar!!
};

// función para pintar la cesta

const paintCart = () => {
  let codeHTML = ""; //volvemos a crear una constante dentro de la funcion para ir añadiendo lo que se pinta. En este caso lo pintaremos en modo tabla
  for (let index = 0; index < cart.length; index += 1) {
    codeHTML += `<tr>`;
    codeHTML += `<td>${cart[index].name}</td>`;
    codeHTML += `<td>${cart[index].price}€</td>`;
    codeHTML += `<td>`;
    codeHTML += `<button class="card__btn js-cart-decrement" id="${cart[index].id}">-</button>`;
    codeHTML += ` ${cart[index].quantity} `;
    codeHTML += `<button class="card__btn js-cart-increment" id="${cart[index].id}">+</button>`;
    codeHTML += `</td>`;
    codeHTML += `<td class="text-align-right">${
      cart[index].price * cart[index].quantity
    }€</td>`;
    codeHTML += `</tr>`;
  }
  codeHTML += getCartTotalHtmlCode(); //pinta solamente la línea final con el total
  const cardsElement = document.querySelector(".js-cart"); //seleccionamos la cesta
  cardsElement.innerHTML = codeHTML; //pintamos
  listenCartClicks(); //y volvemos a escuchar!!
};

// función para pintar el total en el html
const getCartTotalHtmlCode = () => {
  let htmlCode = "";
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${getTotalPrice()}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
};

// función para calcular el precio total
const getTotalPrice = () => {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
  // el for anterior es equivalente a este reduce
  return cart.reduce((total, product) => total + product.price, 0);
};

// vamos con los eventos...
//función manejadora del click en la que identificamos exactamente el botón pusado y luego seleccionamos el objeto al que hace referencia el botón pulsado
const handlerProductsClick = (ev) => {
  const clickedId = parseInt(ev.currentTarget.id); //obtenemos el id del botón pulsado
  const product = products.find((productItem) => productItem.id === clickedId); //buscamos en el prodcuto el que ha sido clickado en el array
  const cartProduct = cart.find((productItem) => productItem.id === clickedId); //buscamos en el producto el que ha sido clickado en el array cart
  if (cartProduct === undefined) {
    product.quantity = 1;
    cart.push(product); //añadimos el producto en un nuevo array que luego pintaremos en la cesta de compra
  } else {
    cartProduct.quantity += 1;
  }
  updateLocalStorage();
  paintCart(); // para pintar en la carta los artículos seleccionados
};

const handleCartIncrementClick = (ev) => {
  // obtenemos el id del producto clickado
  const clickedId = parseInt(ev.currentTarget.id);
  // buscamos con find el
  const product = cart.find((productItem) => productItem.id === clickedId);
  product.quantity += 1; //incrementamos el producto que ha sido clickado
  updateLocalStorage();
  paintCart();
};

const handleCartDecrementClick = (ev) => {
  // obtenemos el id del producto clickado
  const clickedId = parseInt(ev.currentTarget.id);
  // buscamos con find y findIndex
  const product = cart.find((productItem) => productItem.id === clickedId);
  const index = cart.findIndex((productItem) => productItem.id === clickedId);
  // creamos una condicional para que no baje de 1 y cuando lo haga elimine el producto de la cesta
  if (product.quantity > 1) {
    product.quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  updateLocalStorage();
  paintCart();
};

// funcion escucha de los botones de las camisetas
const listenProductsClick = () => {
  const productsButtons = document.querySelectorAll(".js-productInc"); //seleccionamos todos los botones que hemos pintado y los metemos en un array
  for (let i = 0; i < productsButtons.length; i++) {
    productsButtons[i].addEventListener("click", handlerProductsClick); //recorremos el array para que escuche y sepa qué botón se ha pulsado
  }
};

const listenCartClicks = () => {
  const cartIncrementBtns = document.querySelectorAll(".js-cart-increment");
  for (let index = 0; index < cartIncrementBtns.length; index++) {
    const productsBtn = cartIncrementBtns[index];
    productsBtn.addEventListener("click", handleCartIncrementClick);
  }
  const cartDecrementBtns = document.querySelectorAll(".js-cart-decrement");
  for (let index = 0; index < cartDecrementBtns.length; index++) {
    const productsBtn = cartDecrementBtns[index];
    productsBtn.addEventListener("click", handleCartDecrementClick);
  }
};

// función para guardar en el local storage
const updateLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart)); //definimos lo que se va a guardar en el local storage como string porque solo admite este tipo de dato
};

const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("cart")); //cogemos los datos del local storage pasandolos con .parse a un objeto de nuevo
  if (data !== null) {
    cart = data; //esto solo puede pasar cuando data no es null, es decir, cuando haya datos válidos en el local storage
  }
};

// función para limpiar con un botón reset

const btnReset = document.querySelector(".js-reset");

const reserCart = () => {
  cart = [];
  updateLocalStorage();
  paintCart();
};

btnReset.addEventListener("click", reserCart);

// llamamos a la función para obtener los datos
getDataFromApi();
getFromLocalStorage(); // tiene que estar antes de las funciones que pinten
paintProducts(); // lo pintamos de nuevo por si acaso pero con la de arriba funciona sin necesidad de esta última
paintCart(); //esta línea sí es necesaria
