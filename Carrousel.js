let currentIndex = 0;
const slides = document.getElementById('carousel');
const slideWidth = 300 + 1.2 *16;
const visibleSlides = 3;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % (slides.children.length - visibleSlides + 1); // Adjusted for 3 slides at a time
    slides.scrollTo({
        left: currentIndex * slideWidth, // Adjusted for image width and gap
        behavior: 'smooth'
    });
}

// Change slide every 3 seconds (adjust as needed)
setInterval(showNextSlide, 3000);
