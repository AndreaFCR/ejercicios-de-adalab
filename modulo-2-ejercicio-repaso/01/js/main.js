"use strict";
// vamos a cargar los datos desde un api y guardarlos en un array llamado products. lo metemos en una función aunque sea al cargar la página.
let products = [];
let cart = [];

const getDataFromApi = () => {
  fetch("./api/data.json")
    .then((response) => response.json())
    .then((data) => {
      products = data.items;
      paintProducts(); //se pinta cuando ya se reciban los datos
    });
};

// NOTA: para pensar cómo pintar los datos con JS es mejor pintar primero en html con datos faltos y luego ver cómo hacerlo con JS

// función para pintar

const paintProducts = () => {
  let codeHTML = ""; // creamos una const donde iremos añadiendo lo que se pinta del array products que contine nuestros datos y, con un bucle, pintamos codeHTML para cada uno de los elementos del array
  for (let i = 0; i < products.length; i++) {
    codeHTML += `<article class="card">`;
    codeHTML += `<img src="${products[i].imageUrl}" 
    class="card__img" alt="Camiseta de ${products[i].name}"/>`;
    codeHTML += `<h3 class="card__title">${products[i].name}</h3>`;
    codeHTML += `<p class="card__description">${products[i].price}</p>`;
    codeHTML += `<button class="card__btn js-productInc" i = "${i}" id = "${products[i].id}">Añadir a la cesta</button>`;
    codeHTML += `</article>`;
  }
  const cardsElement = document.querySelector(".js-cards"); //seleccionamos el sitio donde lo pintamos
  cardsElement.innerHTML = codeHTML; //pintamos
  listenProductsClick(); //escuchamos los botones pulsados después de pintar
};

// vamos con los eventos...
//función manejadora del click en la que identificamos exactamente el botón pusado y luego seleccionamos el objeto al que hace referencia el botón pulsado
const handlerProductsClick = (ev) => {
  const clickedId = parseInt(ev.currentTarget.id); //obtenemos el id del botón pulsado
  const product = products.find((productItem) => productItem.id === clickedId); //encontramos el producto del botón pulsado con el id que hemos obtenido al pulsar un determinado botón
  cart.push(product); //añadimos el producto en un nuevo array que luego pintaremos en la cesta de compra
  console.log(cart); //para ver el nuevo array con los elementos añadidos cada vez que pulsamos el botón
};

// funcion escucha de los botones de las camisetas
const listenProductsClick = () => {
  const productsButtons = document.querySelectorAll(".js-productInc"); //seleccionamos todos los botones que hemos pintado y los metemos en un array
  for (let i = 0; i < productsButtons.length; i++) {
    productsButtons[i].addEventListener("click", handlerProductsClick); //recorremos el array para que escuche y sepa qué botón se ha pulsado
  }
};

// llamamos a la función para obtener los datos
getDataFromApi();
paintProducts(); // lo pintamos de nuevo por si acaso pero con la de arriba funciona sin necesidad de esta última
