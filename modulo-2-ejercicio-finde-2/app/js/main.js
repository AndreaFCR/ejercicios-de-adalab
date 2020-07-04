"use strict";

const ENDPOINT = "../../data/users.json";

let users = [];
let favorites = [];

/* Do your magic! 🦄🦄🦄*/

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    // para pintar en el html los elementos de la lista: nombre, foto y descripcion.
    const ulElement = document.querySelector(".js-user-list");
    let htmlCode = "";

    htmlCode += `<li class="item-js"><div class="container-js">`;
    htmlCode += `<div class="photo-name-js"><img class="img-js" src="" alt="Foto princesa" />`;
    htmlCode += `<h3 class="name-js">nombre</h3></div>`;
    htmlCode += `<div class="description-js"><p>descripcion</p></div></div></li>`;
    ulElement.innerHTML = htmlCode;

    let names;
    for (let i = 0; i < data.length; i++) {
      names = data[i].name;
      console.log(names);
    }

    // console.log(names);
  });
