// ejercicio 4

const list = document.querySelector(".list-js"); //selecciono el elemento ul
// const taskNumber = document.querySelector(".taskNumber-js"); //para el contador

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

//funcion para incluir nuevos li al ul con su respectivas clases e inputs
function showTasks() {
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    list.innerHTML += `<li class="item-js">${tasks[i].name}`;
    list.innerHTML += `<input type="checkbox" class="tasks-js" /></li><br />`;
  }
}

showTasks(); //lanzo la funcion para "pintar" las tareas cuando carga la página

// función para que el texto aparezca tachado
function crossItems() {
  const items = list.querySelectorAll(".item-js");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
      items[i].classList.add("cross");
    } else {
      items[i].classList.remove("cross");
    }
  }
}

crossItems(); //lanzo la funcion cuando se carga la página

// función para que los checkboxes estén checkeados si la tarea está completada
function setCheckBoxes() {
  const tasksElements = document.querySelectorAll(".tasks-js");
  for (let i = 0; i < tasksElements.length; i++) {
    if (tasks[i].completed === true) {
      tasksElements[i].checked = true;
    } else {
      tasksElements[i].checked = false;
    }
  }
}
setCheckBoxes(); //lanzo la función cuando se carga la página

// función manejadora del evento, lanza las funciones para cambiar el atributo completed del array y para tachar/deshacer tachado de las tareas completadas.
function handlerClick() {
  isCompleted();
  crossItems();
  // showTasks(); /no son necesarios, mayor dificultad
  // setCheckBoxes();
  // listenItems();
}

// función para cambiar el atributo completed del array en el caso de que el check esté pulsado o no
function isCompleted() {
  const tasksElements = document.querySelectorAll(".tasks-js");
  for (let i = 0; i < tasksElements.length; i++) {
    if (tasksElements[i].checked === true) {
      tasks[i].completed = true;
    } else {
      tasks[i].completed = false;
    }
  }
}

// función escuchadora del evento para cada uno de los input
function listenItems() {
  const tasksElements = document.querySelectorAll(".tasks-js");
  for (let task of tasksElements) {
    task.addEventListener("click", handlerClick);
  }
}

listenItems(); //lazamos la función

// falta la parte d
