"use strict";

const normalClass = document.querySelector(".normal");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");

if (normalClass.classList.contains("success")) {
  title.innerHTML = "CORRECTO";
  subtitle.innerHTML = "Los datos son correctos";
} else if (normalClass.classList.contains("error")) {
  title.innerHTML = "ERROR";
  subtitle.innerHTML = "Ha surgido un error";
} else if (normalClass.classList.contains("warning")) {
  title.innerHTML = "AVISO";
  subtitle.innerHTML = "Tenga cuidado";
}
