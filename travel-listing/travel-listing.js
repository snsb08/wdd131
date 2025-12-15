import listsInfo from "./cards-info.mjs";
import images from "./hero-images.mjs";


// navigation menu toggle***************

const menuButton = document.getElementById("menuButton"); //or select by ID?
// const menu = document.querySelector(ul);   //or select by class?

function addClass() {
menu.classList.add("hide");
}

function removeClass() {
menu.classList.remove("hide");
}

// menuButton.addEventListener("click", addClass);

function toggleMenu() {
    const menu = document.querySelector("#menu"); 
    menu.classList.toggle("hide");
}   

menuButton.addEventListener("click", toggleMenu);

// end navigation menu toggle***************



//Display lists info cards ***************

function listTemplate(listsInfo) {
    return `<div class="card"> 
        <h3>${listsInfo.title}</h3>
        <p>Category: ${listsInfo.category}</p>
        <a href="list-items.html">
        <button>Open List</button></a>
    </div> 
    `;
}

function displayLists(lists) {
    const cardsContainer = document.querySelector(".cards");
    const cardsHTML = lists.map(listsInfo => listTemplate(listsInfo)).join("");
    cardsContainer.innerHTML = cardsHTML;
}
//end Display lists info cards ***************

//search/filter functionality ***************

function searchHandler(list, query){
    function searchCallback(listInfo) {
        return (listInfo.title.toLowerCase().includes(query.toLowerCase()) ||
        listInfo.category.toLowerCase().includes(query.toLowerCase())
        );
    }
    const filtered = list.filter(searchCallback); 
    return filtered.sort((a, b) => a.title.localeCompare(b.title));
}

const searchButton = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");

searchButton.addEventListener("click", (event) => {
    event.preventDefault(); //prevent page reload
    const query = searchInput.value; 
    const results = searchHandler(listsInfo, query);
    displayLists(results);
});


//end search/filter functionality ***************




// random hero images ***************
function random(number) {
    return Math.floor(Math.random()*number)
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

const image = getRandomListEntry(images);

// function init() {
//     const image = getRandomListEntry(images)
//     renderImages([image]);
// } init();

function renderImages(images) {
    const heroContainer = document.querySelector(".hero-images");
    const imagesHTML = images.map(image => `
    <img src="${image.url}" alt="${image.alt}" />
    `).join("");
    heroContainer.innerHTML = imagesHTML;
}
//end random hero images ***************





function init() {
    displayLists(listsInfo);
    const image = getRandomListEntry(images)
    renderImages([image]);
} init();