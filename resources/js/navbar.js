const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#navigation > nav > ul'); // Updated selector
const subnavs = document.querySelectorAll('.subnav');

let clickCount = 0;

// Function to check if the viewport width is less than or equal to 900px
function isMobile() {
    return window.matchMedia("(max-width: 900px)").matches;
}

hamburger.addEventListener('click', () => {
    if (!isMobile()) return; // Exit if not in mobile view

    clickCount++;

    if (clickCount === 1) {
        // First interaction
        hamburger.classList.add('is-active');
        nav.classList.add('is-active');
    } else if (clickCount === 2) {
        // Second interaction
        hamburger.classList.remove('is-active');

        // Remove 'is-active' class from subnavs immediately
        subnavs.forEach(subnav => subnav.classList.remove('is-active'));

        // Remove 'is-active' class from main nav immediately
        nav.classList.remove('is-active');

        clickCount = 0;
    }
});

// Function to toggle the 'is-active' class on subnavs
document.querySelectorAll('li > a').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        if (!isMobile()) return; // Exit if not in mobile view

        const parentLi = event.target.closest('li');
        const subnav = parentLi.querySelector('.subnav');

        if (subnav) {
            // Close all other parent subnavs
            document.querySelectorAll('ul.subnav').forEach(otherSubnav => {
                if (otherSubnav !== subnav) {
                    otherSubnav.classList.remove('is-active');
                }
            });

            // Toggle the clicked subnav
            const isSubnavActive = subnav.classList.toggle('is-active');

            // Add or remove 'is-active' class from main nav based on subnav state
            if (isSubnavActive) {
                nav.classList.remove('is-active'); // Close main nav if subnav is opened
            } else {
                nav.classList.add('is-active'); // Reopen main nav if subnav is closed
            }

            event.preventDefault();
        }
    });
});

// Function to close subnav when clicking on the first child (back button)
document.querySelectorAll('.subnav > li:first-child').forEach((firstLi) => {
    firstLi.addEventListener('click', (event) => {
        if (!isMobile()) return; // Exit if not in mobile view

        const parentSubnav = firstLi.closest('.subnav');
        parentSubnav.classList.remove('is-active');

        // Add 'is-active' class back to main nav
        nav.classList.add('is-active');

        event.stopPropagation();
    });
});