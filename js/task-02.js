const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

const іngredientsList = ingredients.map(ingredient => {

  const ingredientRef = document.createElement('li');
  ingredientRef.classList.add('item');
  ingredientRef.textContent = ingredient;
  
return ingredientRef
});

ingredientsListRef.prepend(...іngredientsList);
