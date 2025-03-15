document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded");

    let menu = document.querySelector(".nav-menu");
    let menuToggle = document.querySelector(".menu-toggle");

    // Fungsi untuk toggle menu
    function toggleMenu() {
        menu.classList.toggle("active");
    }

    // Klik tombol menu untuk menampilkan atau menyembunyikan
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah event bubbling agar tidak langsung tertutup
        toggleMenu();
    });

    // Klik di luar menu untuk menutupnya
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});
