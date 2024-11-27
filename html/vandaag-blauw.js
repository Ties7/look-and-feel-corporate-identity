const menu = document.querySelector(".menu");
const menuButton = document.querySelector("#test");

// Open menu bij klikken van handle
menuButton.addEventListener("click", function() {
    menu.classList.toggle("open");
});

// Sluit menu bij klikken buiten menu
document.addEventListener("click", function(event) {
    // target = het geklikte element
    const target = event.target;

    // Sluit het menu als (beide moeten waar zijn):
    // 1. Het element GEEN onderdeel is van het menu
    // 2. Het element NIET de menu button is
    if(!target.closest(".menu") && target !== menuButton) {
        // Sluit het menu door de 'open' class weg te halen
        menu.classList.remove("open");
    }
});