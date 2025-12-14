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