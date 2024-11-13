// DOM Elements
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('#navigation > nav > ul');
const subnavs = document.querySelectorAll('.subnav');
const navLinks = document.querySelectorAll('li > a');
const backButtons = document.querySelectorAll('.subnav > li:first-child');
const backdrop = document.querySelector('.backdrop');

// State
let isMenuOpen = false;
let backdropTimeout;

// Utility Functions
function toggleElement(element, force) {
    if (force === undefined) {
        element.classList.toggle('is-active');
        return element.classList.contains('is-active');
    }

    element.classList[force ? 'add' : 'remove']('is-active');
    return force;
}

// Navigation Functions
function toggleMainMenu() {
    // Clear any existing backdrop timeout
    clearTimeout(backdropTimeout);

    isMenuOpen = !isMenuOpen;
    toggleElement(hamburger, isMenuOpen);
    toggleElement(mainNav, isMenuOpen);

    if (isMenuOpen) {
        // Set a timeout to add the backdrop after 0.4 seconds
        backdropTimeout = setTimeout(() => {
            toggleElement(backdrop, true); // Show backdrop after 0.4 seconds
        }, 400);
    } else {
        // Close the backdrop immediately
        toggleElement(backdrop, false);
        closeAllSubnavs();
    }
}

function closeAllSubnavs() {
    subnavs.forEach(subnav => toggleElement(subnav, false));
}

function handleSubnavClick(event) {
    const parentLi = event.target.closest('li');
    const subnav = parentLi?.querySelector('.subnav');

    if (!subnav) return;

    event.preventDefault();
    closeAllSubnavs();

    const isSubnavOpen = toggleElement(subnav);
    toggleElement(mainNav, !isSubnavOpen);
}

function handleBackButtonClick(event) {
    const parentSubnav = event.target.closest('.subnav');
    toggleElement(parentSubnav, false);
    toggleElement(mainNav, true);

    event.stopPropagation();
}

// Close menu if clicked on the backdrop
function handleClickOutside(event) {
    if (isMenuOpen && backdrop.contains(event.target)) {
        toggleMainMenu();
    }
}

// Close menu on scroll
function handleScroll() {
    if (isMenuOpen) {
        toggleMainMenu();
    }
}

// Event Listeners
hamburger.addEventListener('click', toggleMainMenu);
navLinks.forEach(link => link.addEventListener('click', handleSubnavClick));
backButtons.forEach(button => button.addEventListener('click', handleBackButtonClick));
backdrop.addEventListener('click', handleClickOutside);
window.addEventListener('scroll', handleScroll);