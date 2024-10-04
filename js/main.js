const loadAllPhones = () => {
    // Hide the spinner after 2 seconds
    const loadingSpinner = document.getElementById("spinner");
    loadingSpinner.style.display = "none";
};


const handleSearchButton = () => {
    // Show the spinner
    const loadingSpinner = document.getElementById("spinner");
    loadingSpinner.style.display = "block";
    // Wait for 2 seconds before calling loadAllPhones
    setTimeout(() => {
        loadAllPhones();
    }, 2000);
};