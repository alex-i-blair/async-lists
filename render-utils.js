import { getGimletSpecs, getSazSpecs, getWhiskeySourSpecs, getAmericanoSpecs } from './fetch-utils.js';

export async function renderCocktail(cocktail) {
    const cocktailList = document.createElement('div');
    const cocktailNameEl = document.createElement('h2');
    const cocktailIngredientsListEl = document.createElement('ul');
    const cocktailImgEl = document.createElement('img');
    const cocktailGarnishEl = document.createElement('li');
    const cocktailInstructions = document.createElement('p');

    cocktailNameEl.textContent = cocktail.name;
    cocktailGarnishEl.textContent = cocktail.garnish;
    cocktailInstructions.textContent = cocktail.instructions;
    cocktailList.classList.add('cocktails');
    
    let specs;
    let cocktailName = cocktail.name;
    
    if (cocktailName === 'Sazerac') {
        specs = await getSazSpecs();
        cocktailImgEl.src = 'assets/sazerac.jpeg';
    }
    if (cocktailName === 'Whiskey Sour') {
        specs = await getWhiskeySourSpecs();
        cocktailImgEl.src = 'assets/whiskey-sour.jpeg';
    }
    if (cocktailName === 'Gimlet') {
        specs = await getGimletSpecs();
        cocktailImgEl.src = 'assets/gimlet.jpeg';
    }
    if (cocktailName === 'Americano') {
        specs = await getAmericanoSpecs();
        cocktailImgEl.src = 'assets/americano.jpeg';
    }

    for (let ingredient of specs) {
        const cocktailIngredientEl = document.createElement('li');
        cocktailIngredientEl.textContent = `${ingredient.ingredient}: ${ingredient.measure}`;
        cocktailIngredientsListEl.append(cocktailIngredientEl);

    }
    cocktailIngredientsListEl.append(cocktailGarnishEl);
    cocktailList.append(cocktailNameEl, cocktailImgEl, cocktailIngredientsListEl, cocktailInstructions);

    return cocktailList;
}   