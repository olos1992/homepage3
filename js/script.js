console.log("Witaj, deweloperze");

let image = document.querySelector(".js-profileImage");
let body = document.querySelector("body");
let deleteButton = document.querySelector(".js-deletePhotoButton");
let backgroundButton = document.querySelector(".js-changeBackgroundButton");

deleteButton.addEventListener("click", () => {
    image.classList.toggle("main__image--hidden");
    image.classList.contains("main__image--hidden") ? deleteButton.innerText = "Przywróć zdjęcie" : deleteButton.innerText = "Usuń zdjęcie";
});

backgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    body.classList.contains("body--dark") ? backgroundButton.innerText = "Przywróć tło" : backgroundButton.innerText = "Zmień tło";
});