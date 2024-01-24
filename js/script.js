console.log("Cześć");

let image = document.querySelector(".image");
let body = document.querySelector("body");
let deleteButton = document.querySelector(".deleteButton");
let backgroundButton = document.querySelector(".backgroundButton");

deleteButton.addEventListener("click", () => {
    image.remove();
});

backgroundButton.addEventListener("click", () => {
    body.classList.toggle("background");
});