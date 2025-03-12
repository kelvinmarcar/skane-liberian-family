document.addEventListener("DOMContentLoaded", function () {
    let eventImages = ["flag.jpg", "independence.jpg", "Liberian President.jpg", "memorial.jpg"];
    let currentIndex = 0;
    let eventSlider = document.querySelector(".event-slider img");

    function slideImages() {
        currentIndex = (currentIndex + 1) % eventImages.length;
        eventSlider.src = eventImages[currentIndex];
    }

    setInterval(slideImages, 4000); // Change image every 4 seconds
});
