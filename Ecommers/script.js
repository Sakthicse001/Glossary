// Smooth transition to glossary term page
function goToGlossary(term) {
    alert("You clicked on " + term + " to view more details.");
    // You can dynamically load content here based on the term.
    // For example, redirect to a term-specific page.
    window.location.href = `#`; // Modify to direct to actual term page.
}

// Redirect to the cart page
function goToCart() {
    window.location.href = "cart.html"; // Redirects to the cart page.
}

// Redirect to cart page (checkout logic here)
function proceedToCheckout() {
    alert("Proceeding to Checkout...");
    // Actual checkout logic goes here.
}

// Back to the home page
function goBack() {
    window.location.href = "index.html"; // Go back to the home page.
}
