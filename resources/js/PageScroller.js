const scrollButton = document.getElementById('scrollButton');

// Function to check scroll position and show/hide button
function checkScrollPosition() {
    if (window.scrollY === 0) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

// Call the function on page load to set the initial state
checkScrollPosition();

// Add event listener to window scroll
window.addEventListener('scroll', checkScrollPosition);

// Add event listener to button click
scrollButton.addEventListener('click', function() {
    const targetSection = document.getElementById('target-section');
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - 60; // 60 pixels above the target section
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});