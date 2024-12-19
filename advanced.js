document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const formData = new FormData(this); // Collect form data
    const entries = Object.fromEntries(formData.entries()); // Convert to object

    console.log(entries); // Display result in console
});