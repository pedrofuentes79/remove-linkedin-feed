function removeSpecificElementByClasses() {
    // Get the element with the specified compound class names
    let targetElement = document.querySelector('.scaffold-layout');

    // Check if the element exists, then remove it
    if (targetElement) {
        targetElement.remove();
    }
}

// Execute when the page has finished loading
window.onload = function() {
    removeSpecificElementByClasses();
};
