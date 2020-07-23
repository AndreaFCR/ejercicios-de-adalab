function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);

// ejercicio 1

function getInteger() {
  fetch("https://api.rand.fun/number/integer?max=100")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result2").innerHTML = data.result;
    });
}
document.querySelector(".js-integer").addEventListener("click", getInteger);

//ejercicio 2

function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img1 = document.querySelector(".img1-js");
      img1.src = data.message;
      img1.alt = "Un chihuahua";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

function getAnotherDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img2 = document.querySelector(".img2-js");
      img2.src = data.message;
      img2.alt = "Un chihuahua";
    });
}
const btn2 = document.querySelector(".js-dogAnother");
btn2.addEventListener("click", getAnotherDogImage);

// ejercicio 3

function handlerClick() {
  const userName = document.querySelector("#github").value;
  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector(".nameGithub-js");
      name.innerHTML = data.login;
      const img = document.querySelector(".imgGithub-js");
      img.src = data.avatar_url;
      img.alt = "Foto de usuario";
      const repos = document.querySelector(".repGithub-js");
      repos.innerHTML = data.public_repos;
    });
}

const button = document.querySelector(".js-github");
button.addEventListener("click", handlerClick);

// ejercicio 4

// function getRepolist() {
//   const orgName = document.querySelector("#org").value;
//   fetch(`https://api.github.com/org/${orgName}`)
//     .then((listResponse) => listResponse.json())
//     .then((breedsData) => {});

//   // .then((response) => response.json())
//   // .then((data) => {
//   //   console.log("Org data response: ", data);

//   //   const list = document.querySelector(".list-js");
//   //   const breeds = data.message;
//   //   let ulContent = "";

//   //   for (const breed of breeds) {
//   //     const breedContent = `<li>${breed}</li>`;
//   //     ulContent += breedContent;
//   //   }
//   //   ul.innerHTML = ulContent;
//   // });
// }
// const btn = document.querySelector(".js-btn");
// btn.addEventListener("click", getBreeds);
