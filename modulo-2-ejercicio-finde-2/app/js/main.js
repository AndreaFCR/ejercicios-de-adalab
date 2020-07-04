"use strict";

const ENDPOINT = "../../data/users.json";

let users = [];
let favorites = [];

/* Do your magic! 🦄🦄🦄*/

const ulElement = document.querySelector(".js-user-list");
let htmlCode = "";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    // para pintar en el html los elementos de la lista data: nombre, foto y descripcion.
    const ulElement = document.querySelector(".js-user-list");
    let htmlCode = "";

    for (let i = 0; i < data.length; i++) {
      // obtenemos los valores de los datos en estas variables:
      let names;
      let photo;
      let description;

      names = data[i].name;
      photo = data[i].picture;
      description = data[i].comment;

      // pintamos el html con estas variables:
      htmlCode += `<li class=" item item-js">`;
      htmlCode += `<div class="container1">`;
      htmlCode += `<img class="img" src="${photo}" alt="Foto ${names}" />`;
      htmlCode += `<h4 class="name-js">${names}</h4></div>`;
      htmlCode += `<div class="container-2"><p>${description}</p></div></li>`;
      ulElement.innerHTML = htmlCode;
    }

    // seleccionamos cada uno de los li para cuando se pinche en ellos se ponga con el fondo azul
    let items = document.querySelectorAll(".item-js");
    console.log(items);

    // cualquier valor obtenido del fetch tiene que estar aquí dentro!!!! IMPORTANTE
  });
