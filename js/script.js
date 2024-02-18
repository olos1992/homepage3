{
    const welcome = () => {
        console.log("Witaj, deweloperze");
    };

    const detelePhoto = (deleteButton) => {
        const image = document.querySelector(".js-profileImage");

        image.classList.toggle("main__image--hidden");
        image.classList.contains("main__image--hidden") ? deleteButton.innerText = "Przywróć zdjęcie" : deleteButton.innerText = "Usuń zdjęcie";
    };

    const changeBackground = (backgroundButton) => {
        const body = document.querySelector(".js-body");

        body.classList.toggle("body--dark");
        body.classList.contains("body--dark") ? backgroundButton.innerText = "Przywróć tło" : backgroundButton.innerText = "Zmień tło";
    };

    const init = () => {
        welcome();

        const deleteButton = document.querySelector(".js-deletePhotoButton");
        const backgroundButton = document.querySelector(".js-changeBackgroundButton");

        deleteButton.addEventListener("click", () => {
            detelePhoto(deleteButton);
        });

        backgroundButton.addEventListener("click", () => {
            changeBackground(backgroundButton);
        });
    };

    init();
}