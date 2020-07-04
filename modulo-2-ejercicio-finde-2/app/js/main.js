"use strict";

const ENDPOINT = "../../data/users.json";

let users = [];
let favorites = [];

/* Do your magic! 🦄🦄🦄*/

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    // para pintar en el html los elementos de la lista data: nombre, foto y descripcion.
    const ulElement = document.querySelector(".js-user-list");
    let htmlCode = "";

    for (let i = 0; i < data.length; i++) {
      let names;
      let photo;
      let description;

      names = data[i].name;
      photo = data[i].picture;
      description = data[i].comment;

      htmlCode += `<li class=" item item-js">`;
      htmlCode += `<div class="container1">`;
      htmlCode += `<img class="img" src="${photo}" alt="Foto ${names}" />`;
      htmlCode += `<h4 class="name-js">${names}</h4></div>`;
      htmlCode += `<div class="container-2"><p>${description}</p></div></li>`;
      ulElement.innerHTML = htmlCode;
    }

    let items = document.querySelectorAll(".item-js");
    console.log(items);
  });
