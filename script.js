document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            let submenu = this.querySelector(".submenu");
            let isActive = submenu.style.display === "block";

            document.querySelectorAll(".submenu").forEach(menu => {
                menu.style.display = "none";
            });

            submenu.style.display = isActive ? "none" : "block";
        });
    });

    document.addEventListener("click", function (event) {
        let isClickInside = event.target.closest(".dropdown");
        if (!isClickInside) {
            document.querySelectorAll(".submenu").forEach(menu => {
                menu.style.display = "none";
            });
        }
    });
});
