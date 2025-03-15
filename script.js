document.addEventListener("DOMContentLoaded", function () {
    // Toggle Sidebar Menu
    let menuIcon = document.querySelector(".menu-icon");
    let sidebar = document.querySelector(".sidebar");

    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah klik dari menutup menu langsung
        sidebar.classList.toggle("active");
    });

    // Tutup sidebar jika klik di luar sidebar
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });

    // Dropdown Menu
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Mencegah klik dari menutup menu langsung
            let submenu = this.querySelector(".submenu");
            if (submenu) {
                submenu.classList.toggle("open");
            }
        });
    });

    // WhatsApp Button
    let whatsappButton = document.querySelector(".whatsapp-button a");
    whatsappButton.addEventListener("click", function () {
        window.open(this.href, "_blank");
    });
});
