const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header > div > ul');
const subnavs = document.querySelectorAll('.subnav');

let clickCount = 0;

hamburger.addEventListener('click', () => {
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

        // Remove 'is-active' class from main nav after a 0.5second delay
        setTimeout(() => {
            nav.classList.remove('is-active');
        }, 350);

        clickCount = 0;
    }
});

// Function to toggle the 'is-active' class on subnavs
document.querySelectorAll('li > a').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
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
            subnav.classList.toggle('is-active');
            event.preventDefault();
        }
    });
});

// Function to close subnav when clicking on the first child (back button)
document.querySelectorAll('.subnav > li:first-child').forEach((firstLi) => {
    firstLi.addEventListener('click', (event) => {
        const parentSubnav = firstLi.closest('.subnav');
        parentSubnav.classList.remove('is-active');
        event.stopPropagation();
    });
});