// import functions and grab DOM elements
import { getCocktails } from './fetch-utils.js';
import { renderCocktail } from './render-utils.js';

const cocktailPostsEl = document.querySelector('#cocktail-list');
// let state

window.addEventListener('load', async() => {
    let cocktailData = await getCocktails();
    for (let cocktail of cocktailData) {
        
        const cocktailEl = await renderCocktail(cocktail);
        cocktailPostsEl.append(cocktailEl);
        // console.log(cocktail.cocktail_name);
    }

});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
