console.log("Cześć");

let image = document.querySelector(".image");
let body = document.querySelector("body");
let deleteButton = document.querySelector(".deleteButton");
let backgroundButton = document.querySelector(".backgroundButton");

deleteButton.addEventListener("click", () => {
    image.classList.toggle("imageDeleted");
    image.classList.contains("imageDeleted") ? deleteButton.innerText = "Przywróć zdjęcie" : deleteButton.innerText = "Usuń zdjęcie";
});

backgroundButton.addEventListener("click", () => {
    body.classList.toggle("background");
    body.classList.contains("background") ? backgroundButton.innerText = "Przywróć tło" : backgroundButton.innerText = "Zmień tło";
});