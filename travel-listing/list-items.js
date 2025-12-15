//list item page functionality ***************
let destinations = [];
let destination = "";
const submitDestination = document.getElementById("submitDestination");

function destinationTemplate(destination) {
  return `<li ${destination.completed ? 'class="strike"' : ""}>
   <p>${destination.detail}</p>
   <div>
    <span data-action="complete"> ${destination.completed ? '✅' : '✔️'}</span>
     <span data-action="delete">❌</span>
   </div>
 </li>` };

function renderDestinations(destinations) {
 
    let listElement = document.getElementById("wishList");
    listElement.innerHTML = "";

    const html = destinations.map(destinationTemplate).join("");
    listElement.innerHTML = html;

}

function newDestination() {
 let destination = document.getElementById("wish-item").value;
    destinations.push({ detail: destination, completed: false });
    renderDestinations(destinations);
    console.log(destinations);
}

function removeDestination(destinationElement) {
  destinations = destinations.filter(
    (destination) => destination.detail != destinationElement.querySelector('p').innerText
  );
  destinationElement.remove();
}

function completeDestination(destinationElement) {
  const destinationIndex = destinations.findIndex(
    (destination) => destination.detail === destinationElement.querySelector('p').innerText
  );
  destinations[destinationIndex].completed = destinations[destinationIndex].completed ? false : true;
  destinationElement.classList.toggle("strike");
  console.log(destinations);
}

function manageDestinations(event) {
  console.log(event.target);
  console.log(event.currentTarget);

    if (event.target.dataset.action === "delete") { 
        removeDestination(event.target.closest("li"));
    } else if (event.target.dataset.action === "complete") {
        completeDestination(event.target.closest("li"));
    }
}

submitDestination.addEventListener("click", newDestination);
document.getElementById("wishList").addEventListener("click", manageDestinations);

renderDestinations(destinations);
//end list item page functionality ***************


function memoriesTemplate() {

    const currentTitle = document.title;
    console.log(currentTitle);

    if (currentTitle == "Coastal Cities") {
        return `<li class="strike">Sintra</li>
    <li class="strike">Lisbon</li>
    <li class="strike">Miami</li>
    <li class="strike">New York City</li>
    `;
    } else if (currentTitle == "European Getaways") {
    return `<li class="strike">Paris</li>
    <li class="strike">Madrid</li>
    <li class="strike">Montreux</li>
    <li class="strike">Rome</li>
    `; }
    else if (currentTitle == "Camping Spots") {
    return `<li class="strike">Blue Springs, Florida</li>
    <li class="strike">Grand Canyon's North Rim</li>
    <li class="strike">Grand Teton's Jenny Lake</li>
    <li class="strike">Bryson City, North Carolina</li>
    `; } else if (currentTitle == "Mountain Adventures") {
    return `<li class="strike">Zipline near Asheville, NC</li>
    <li class="strike">Ski at Swiss Alps, Switzerland</li>
    <li class="strike">Hike Yellowstone Park</li>
    <li class="strike">Rafting near Jackson Hole WY</li>` 
    ;} else {
    return `<li class="strike">Tegucigalpa</li>
    <li class="strike">Mexico City</li>
    <li class="strike">Greenville</li>
    <li class="strike">Paris</li>
    `; }
}


function displayMemories() {

    const memoriesListContainer = document.querySelector("#memories-list");
    const memoriesListHTML = memoriesTemplate();
    memoriesListContainer.innerHTML = memoriesListHTML;
}




function init() {
  displayMemories();
} init();



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