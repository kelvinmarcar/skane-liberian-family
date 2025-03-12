document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".event-card");
    const totalSlides = slides.length;

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = "none";
            slide.style.opacity = "0";
            slide.style.transform = "translateX(100%)"; // Start off-screen to the right
        });

        slides[slideIndex].style.display = "block";
        slides[slideIndex].style.opacity = "1";
        slides[slideIndex].style.transform = "translateX(0)"; // Bring to center

        slideIndex++;
        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }

        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }

    showSlides();
});
