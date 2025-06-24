// Esperamos que la página cargue
    document.addEventListener("DOMContentLoaded", function () {
        const imgContainer = document.querySelector(".img-hover img");

        // Cuando el mouse entra, aplicamos el zoom
        imgContainer.addEventListener("mouseover", function () {
        imgContainer.style.transform = "scale(1.1)";
        });

        // Cuando el mouse sale, volvemos al tamaño original
        imgContainer.addEventListener("mouseout", function () {
        imgContainer.style.transform = "scale(1)";
        });
    });