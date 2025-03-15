// Toggle menu dengan klik tombol
function toggleMenu() {
    let menu = document.querySelector(".nav-menu");
    let isVisible = menu.style.display === "block";
    menu.style.display = isVisible ? "none" : "block";
}

// Tutup menu jika klik di luar
document.addEventListener("click", function (event) {
    let menu = document.querySelector(".nav-menu");
    let toggleBtn = document.querySelector(".menu-toggle");

    if (menu.style.display === "block" &&
        !menu.contains(event.target) &&
        !toggleBtn.contains(event.target)) {
        menu.style.display = "none";
    }
});
