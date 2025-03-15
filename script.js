document.addEventListener("DOMContentLoaded", function () {
    // Toggle Sidebar Menu
    let menuIcon = document.querySelector(".menu-icon");
    let sidebar = document.querySelector(".sidebar");
    
    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Dropdown untuk submenu
    let menuItems = document.querySelectorAll(".sidebar li");

    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Jika ada submenu, toggle aktif
            let submenu = this.querySelector("ul");
            if (submenu) {
                submenu.classList.toggle("open");
            }
        });
    });

    // Close menu jika klik di luar sidebar
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });

    // Tombol WhatsApp Floating
    let whatsappButton = document.querySelector(".whatsapp-button");
    whatsappButton.addEventListener("click", function () {
        window.open("https://wa.me/628123456789", "_blank"); // Ganti dengan nomor WhatsApp Anda
    });
});
