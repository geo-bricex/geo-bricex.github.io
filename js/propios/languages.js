function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;

    // Redirige a la página correspondiente según el idioma seleccionado
    if (selectedLanguage === "es") {
        window.location.href = "index.html";
    } else if (selectedLanguage === "en") {
        window.location.href = "index_en.html";
    }
}