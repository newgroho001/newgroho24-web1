document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded");

    // Toggle menu saat tombol diklik
    function toggleMenu() {
        let menu = document.querySelector(".nav-menu");
        menu.classList.toggle("active");
    }

    // Event listener untuk tombol menu
    document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
});
