"use strict";

//SELECTORS...

//Number of user attemps
let attemps = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
  name: "front23",
  password: "bicicleta",
};

//FUNCTIONS

function handleLogin() {
  // leer los datoss
  const name = document.querySelector(".js-user-name").value;
  const password = document.querySelector(".js-user-password").value;
  //   comprobar los datos
  if (name === userInfo.name && password === userInfo.password) {
    alert("Estás dentro");
  } else {
    document.querySelector(".js-error-wrapper").classList.remove("hidden");
    attemps += 1;
    if (attemps > 3) {
      alert("Estás bloqueado");
    }
  }
}

//LISTENERS

const btn = document.querySelector(".js-login-button");

btn.addEventListener("click", handleLogin);
