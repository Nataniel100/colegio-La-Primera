document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const appContainer = document.getElementById("appContainer");
    const menuButtons = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll(".content-section");
    const form = document.querySelector(".contact-form");
    const formMessage = document.getElementById("formMessage");

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.toggle("hidden", section.id !== sectionId);
        });
        menuButtons.forEach(button => {
            button.classList.toggle("active", button.dataset.section === sectionId);
        });
    }

    startButton.addEventListener("click", function () {
        welcomeScreen.classList.add("hidden");
        appContainer.classList.remove("hidden");
        showSection("colegio");
    });

    menuButtons.forEach(button => {
        button.addEventListener("click", function () {
            showSection(button.dataset.section);
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.textContent = "Consulta enviada correctamente. Gracias por comunicarte con nosotros.";
        form.reset();
    });
});
