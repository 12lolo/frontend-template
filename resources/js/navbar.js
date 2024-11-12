// DOM Elements
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('#navigation > nav > ul');
const subnavs = document.querySelectorAll('.subnav');
const navLinks = document.querySelectorAll('li > a');
const backButtons = document.querySelectorAll('.subnav > li:first-child');

// State
let isMenuOpen = false;

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
    isMenuOpen = !isMenuOpen;
    toggleElement(hamburger, isMenuOpen);
    toggleElement(mainNav, isMenuOpen);

    if (!isMenuOpen) {
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

// Close menu if clicked outside
function handleClickOutside(event) {
    if (isMenuOpen && !mainNav.contains(event.target) && !hamburger.contains(event.target)) {
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
document.addEventListener('click', handleClickOutside);
window.addEventListener('scroll', handleScroll);