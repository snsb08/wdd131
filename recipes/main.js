import recipes from './recipes.mjs';

function random(number) {
    return Math.floor(Math.random()*number)
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function recipeTemplate(recipe) {
    return `<div class="recipe-card">
        <img
          src="${recipe.image}"
          alt="picture of ${recipe.name}"
        />
        <section class="recipe">
          <ul class="tags">
            ${tagsTemplate(recipe.tags)}
          </ul>
          <h2>${recipe.name}</h2>
          ${ratingTemplate(recipe.rating)}
          <p class="description">
            ${recipe.description}
          </p>
        </section>
        </div>`;
}

function tagsTemplate(tags) {
    return tags 
    .map(tag => `<li>${tag}</li>`)
    .join("");
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html;
}

const recipe = getRandomListEntry(recipes);
// console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
    console.log("Rendering", recipeList);
  const recipeCard = document.querySelector("#recipe-container");
  console.log("container card", recipeCard);
  const html = recipeList.map(recipe => recipeTemplate(recipe)).join("");

  recipeCard.innerHTML = html;

}

function searchHandler(list, query){
    function searchCallback(recipe) {
        return (recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase())  ||
        recipe.recipeIngredient.join("").toLowerCase().includes(query.toLowerCase())||
        recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
    }
    const filtered = list.filter(searchCallback); 
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

const searchButton = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");

searchButton.addEventListener("click", (event) => {
    event.preventDefault(); //prevent page reload
    const query = searchInput.value; 
    const results = searchHandler(recipes, query);
    renderRecipes(results);
});

function init() {
    const recipe = getRandomListEntry(recipes)
    renderRecipes([recipe]);
} init();


