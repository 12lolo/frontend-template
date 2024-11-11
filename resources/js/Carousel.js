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
        this.startX = e.touches[0].clientX;
        this.carouselImages.style.transition = 'none';
    }

    handleTouchMove(e) {
        e.preventDefault();
        const currentX = e.touches[0].clientX;
        const diffX = this.startX - currentX;
        this.carouselImages.style.transform = `translateX(-${this.currentIndex * 100 + (diffX / this.carousel.offsetWidth) * 100}%)`;
    }

    handleTouchEnd(e) {
        const currentX = e.changedTouches[0].clientX;
        const diffX = this.startX - currentX;

        if (Math.abs(diffX) > this.carousel.offsetWidth / 4) {
            if (diffX > 0) {
                // Swipe left
                this.nextImage();
            } else {
                // Swipe right
                this.prevImage();
            }
        } else {
            // Snap back to current image
            this.updateCarousel();
        }
    }

    nextImage() {
        // If at the last image, loop back to the first
        this.currentIndex = (this.currentIndex + 1) % this.totalImages;
        this.updateCarousel();
    }

    prevImage() {
        // If at the first image, loop to the last
        this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
        this.updateCarousel();
    }

    updateCarousel() {
        // Ensure smooth transition
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