class Carousel {
    constructor(carouselElement) {
        this.carousel = carouselElement;
        this.carouselImages = this.carousel.querySelector('.custom-carousel-images');
        this.images = this.carouselImages.querySelectorAll('img');

        // Swipe tracking variables
        this.startX = 0;
        this.currentIndex = 0;
        this.totalImages = this.images.length;

        // Initialize touch events for mobile/tablet
        if (this.isTouchDevice()) {
            this.addTouchEvents();
        }

        // Add click events for next/prev buttons
        this.carousel.querySelector('.prev').addEventListener('click', () => this.prevImage());
        this.carousel.querySelector('.next').addEventListener('click', () => this.nextImage());
    }

    isTouchDevice() {
        return 'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0;
    }

    addTouchEvents() {
        this.carousel.addEventListener('touchstart', this.handleTouchStart.bind(this));
        this.carousel.addEventListener('touchmove', this.handleTouchMove.bind(this));
        this.carousel.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }

    handleTouchStart(e) {
        // Record the starting X position
        this.startX = e.touches[0].clientX;
        // Optional: Add visual feedback
        this.carouselImages.style.transition = 'none';
    }

    handleTouchMove(e) {
        // Prevent default to stop scrolling
        e.preventDefault();
        // Calculate the distance moved
        const currentX = e.touches[0].clientX;
        const diffX = this.startX - currentX;
        // Move the carousel slightly with touch
        this.carouselImages.style.transform = `translateX(-${this.currentIndex * 100 + (diffX / this.carousel.offsetWidth) * 100}%)`;
    }

    handleTouchEnd(e) {
        // Calculate the distance moved
        const currentX = e.changedTouches[0].clientX;
        const diffX = this.startX - currentX;

        // Determine if swipe is significant enough to change slide
        if (Math.abs(diffX) > this.carousel.offsetWidth / 4) {
            if (diffX > 0 && this.currentIndex < this.totalImages - 1) {
                // Swipe left, go to next slide
                this.currentIndex++;
            } else if (diffX < 0 && this.currentIndex > 0) {
                // Swipe right, go to previous slide
                this.currentIndex--;
            }
        }

        // Reset carousel position
        this.carouselImages.style.transition = 'transform 0.5s ease';
        this.carouselImages.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }

    nextImage() {
        if (this.currentIndex < this.totalImages - 1) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }

    prevImage() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }

    updateCarousel() {
        this.carouselImages.style.transition = 'transform 0.5s ease';
        this.carouselImages.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.custom-carousel-section');
    if (carousel) {
        new Carousel(carousel);
    }
});