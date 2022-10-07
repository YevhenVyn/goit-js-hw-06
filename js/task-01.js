// const categoriesRef = document.querySelector('#categories')

const categoriesPseudoArrayRef = document.querySelector('#categories').children;
const categoriesArray = [...categoriesPseudoArrayRef];
const categoriesElementQuantity = categoriesArray.length;
console.log(`Number of categories: ${categoriesElementQuantity}`);
console.log(categoriesArray);
// console.log(categoriesArrayRef[0].firstElementChild.textContent);

const allCategoriesProperties = categoriesArray.map(item => {

const categoryTitle = item.firstElementChild.textContent;
console.log(`Category: ${categoryTitle}`);

const categoryElementsQuantyty = item.lastElementChild.children.length;
console.log(`Elements: ${categoryElementsQuantyty}`);

});

// Інакший варіант:
const allCategoriesPropertiesByTags = categoriesArray.map(item => {
    
    const categoryTitleByTagRef = item.querySelector('h2').textContent;
    console.log(`Category by tag: ${categoryTitleByTagRef}`);
    
    const categoryElementsQuantytyByTagRef = item.querySelector('ul').children.length;
    console.log(`Elements by tag: ${categoryElementsQuantytyByTagRef}`);
    
    });






