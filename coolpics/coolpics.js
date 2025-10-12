//Add an event listener to the menu button to listen for a click event.
//When the button is clicked show the menu if it is hidden, hide the menu if it is shown.

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

//Handle the window resize event

function handleResize() {
    const menu = document.querySelector("#menu"); 
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

//Modal



const images = document.querySelectorAll(".gallery img");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close-viewer");
// const img = document.querySelector("dialog img");

function openModal(event) { 
    const img = dialog.querySelector("img");
    // img.src = event.target.src.replace("-thumb", "-full");
    dialog.showModal();
}
images.forEach(image => image.addEventListener("click", openModal));

function closeModal() {
    dialog.close();
}
closeButton.addEventListener("click", closeModal);
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        closeModal();
    }
});

