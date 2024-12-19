document.querySelector('searchfrom').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const formData = new FormData(this); // Collect form data
    const queryString = new URLSearchParams(formData).toString();

    //neue URL erzeugen
    const newURL = '${this.action}?${queryString}';
    console.log('neue URL:', newURL);

    window.history.pushState({},'', newURL);
});