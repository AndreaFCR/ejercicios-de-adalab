// ejercicio 4

const list = document.querySelector(".list-js");
// const items = list.querySelectorAll(".item-js"); //seleccionamos todos los li en un array
// const tasksCheck = document.querySelectorAll(".tasks-js");
const taskNumber = document.querySelector(".taskNumber-js");
// let counter = 4;
// taskNumber.innerHTML = counter;

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

// recorre el array de tasks y pinta cada task en cada uno de los li.

function showTasks() {
  list.innerHTML = "";
  let i = -1;
  for (let task of tasks) {
    i += 1;
    list.innerHTML += `<li class="item item-js">${tasks[i].name}`;
    list.innerHTML += `<input type="checkbox" class="tasks-js" /></li>`;
  }
}

showTasks();

// recorre la lista de tasks y si tiene el atributo completed como true le añade la clase cross que tacha el texto.

function crossItems() {
  const items = list.querySelectorAll(".item-js");
  let i = -1;
  for (let task of tasks) {
    i += 1;
    if (tasks[i].completed === true) {
      items[i].classList.add("cross");
    } else {
      items[i].classList.remove("cross");
    }
  }
}

crossItems();
setCheckBoxes();

function setCheckBoxes() {
  const tasksElements = document.querySelectorAll(".tasks-js");
  let i = -1;
  for (let task of tasksElements) {
    i += 1;
    if (tasks[i].completed === true) {
      tasksElements[i].checked = true;
    } else {
      tasksElements[i].checked = false;
    }
  }
}

function isCompleted() {
  const tasksElements = document.querySelectorAll(".tasks-js");
  let i = -1;
  for (let task of tasksElements) {
    i += 1;
    if (tasksElements[i].checked === true) {
      tasks[i].completed = true;
    } else {
      tasks[i].completed = false;
    }
  }
}

function handlerClick() {
  isCompleted();
  showTasks();
  crossItems();
  setCheckBoxes();
  listenItems();
}

function listenItems() {
  const tasksElements = document.querySelectorAll(".tasks-js");
  let i = 0;
  for (let task of tasks) {
    tasksElements[i].addEventListener("click", handlerClick);
    i += 1;
  }
}

listenItems();

// function counterNumber() {
//   if (tasksCheck.checked === true) {
//     counter -= 1;
//     console.log(counter);
//   }
//   if (tasksCheck.checked === false) {
//     counter += 1;
//     console.log(counter);
//   }
// }

// counterNumber();
