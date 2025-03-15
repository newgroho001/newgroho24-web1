function showSlide(slideId) {
    // Sembunyikan semua slide
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Tampilkan slide yang dipilih
    document.getElementById(slideId).style.display = "block";
}

// Tampilkan slide default saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", function () {
    showSlide("home");
});
