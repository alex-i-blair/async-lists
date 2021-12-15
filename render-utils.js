import { getSazSpecs, getWhiskeySourSpecs } from './fetch-utils.js';

export async function renderCocktail(cocktail) {
    const cocktailList = document.createElement('div');
    const cocktailNameEl = document.createElement('p');
    const cocktailIngredientsListEl = document.createElement('ul');
    
    const cocktailGarnishEl = document.createElement('p');
    const cocktailInstructions = document.createElement('p');

    cocktailNameEl.textContent = cocktail.name;
    cocktailGarnishEl.textContent = cocktail.garnish;
    cocktailInstructions.textContent = cocktail.instructions;
    cocktailList.classList.add('cocktails');

    let specs;

    if (cocktail.name === 'Sazerac') {
        specs = await getSazSpecs();

    }
    
    if (cocktail.name === 'Whiskey Sour') {
        specs = await getWhiskeySourSpecs();

    }

    for (let ingredient of specs) {
        const cocktailIngredientEl = document.createElement('li');
        cocktailIngredientEl.textContent = `${ingredient.ingredient}: ${ingredient.measure}`;
        cocktailIngredientsListEl.append(cocktailIngredientEl);

    }
    cocktailIngredientsListEl.append(cocktailGarnishEl);
    cocktailList.append(cocktailNameEl, cocktailIngredientsListEl, cocktailInstructions);

    return cocktailList;
}   