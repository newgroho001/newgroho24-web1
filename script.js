function toggleMenu() {
    let menu = document.querySelector(".nav-menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Menutup menu jika klik di luar area menu
document.addEventListener("click", function(event) {
    let menu = document.querySelector(".nav-menu");
    let toggleButton = document.querySelector(".menu-toggle");

    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.style.display = "none";
    }
});
