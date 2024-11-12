// Map page names to their respective titles
const pageTitles = {
    "index": "buuút",
    "about": "About Us",
    "contact": "Contact Us"
};

// Get the current page name from the URL (without the extension)
let currentPage = window.location.pathname.split("/").pop().split(".")[0];

// Check if the current page is empty (indicating the index page)
if (currentPage === '' || currentPage === 'index') {
    currentPage = 'index'; // Use 'index' for the default page
}

// Use the page name from the map or default to the file name minus extension
let pageTitle = pageTitles[currentPage] || currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

// Update the document title
document.title = pageTitle;

// Update the <h1> element with the new title
const header = document.querySelector('h1.title');
if (header) {
    header.innerText = pageTitle;
}
