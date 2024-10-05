// Handle Load All Phones Functionality
const loadAllPhones = async() => {
    console.log("Wow! 3 seconds gone...");

    const hideSpinner = document.getElementById("spinner");
    hideSpinner.style.display = "none";

    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))


    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    const data = await response.json()
    displayAllPhones(data.data);
};

const displayAllPhones = (phones) => {
    console.log(phones);
}


// Handle the Search Button
const handleSearchButton = () => {
    const loadSpinner = document.getElementById("spinner");
    loadSpinner.style.display = "block";


    setTimeout(() => {
        loadAllPhones();
    }, 3000);
}


// const loadAllPhones = async() => {
//     const hideSpinner = document.getElementById("spinner");
//     hideSpinner.style.display = "none";

//     const response = fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
//     const data = (await response).json()
//     displayAllPhone(data.data);
// };


// const displayAllPhone = (phones) => {
//     console.log(phones);
// }


// const handleSearchButton = () => {
//     const showSpinner = document.getElementById("spinner");
//     showSpinner.style.display = "block";

//     setTimeout(() => {
//         loadAllPhones();
//     }, 3000);
// };


loadAllPhones();
