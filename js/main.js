// Functionality of Load All Phones
const loadAllPhones = async() => {
    // Hide the spinner after 2 seconds
    const hideSpinner = document.getElementById("spinner");
    hideSpinner.style.display = "none";

    // Fetch data from API by using Fetch and Async, Await method
    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))


    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    const data = await response.json()
    displayAllPhones(data.data);
};


// Handle Display All Phones Functionality
const displayAllPhones = (phones) => {
    console.log(phones);
}


// Functionality of Search Button
const handleSearchButton = () => {
    // Show the spinner
    const loadingSpinner = document.getElementById("spinner");
    loadingSpinner.style.display = "block";
    // Wait for 2 seconds before calling loadAllPhones
    setTimeout(() => {
        loadAllPhones();
    }, 2000);
};

loadAllPhones();