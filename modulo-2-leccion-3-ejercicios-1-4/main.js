"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

// se añade el atributo src a la etiqueta imagen con la imagen de Bill Murray
document.querySelector(".user__avatar").src = `${userAvatar}`;

// cambiamos la variable, avatar vacío
userAvatar = "";

// condicional, se añade el avatar vacío o el avatar por defecto
document.querySelector(".user__avatar").src = `${userAvatar || DEFAULT_AVATAR}`;
