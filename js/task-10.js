function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');
const boxesContainerRef = document.querySelector('#boxes');
const inputDownLimitRef = inputRef.min;
const inputUpLimitRef = inputRef.max;
const firstBoxWidth = 30;
const firstBoxHeight = 30;

let elements = [];

const handleIsInputValueValid = () => {
  const inputValue =  Number(inputRef.value);
  if(inputValue < inputDownLimitRef || inputValue > inputUpLimitRef){
    alert(`'Please enter a number between ${inputDownLimitRef} and ${inputUpLimitRef}'`);
    inputRef.value = '';
    return;
  }
  else {
    return inputValue;
  }
}

function createBoxesUpgrade(amount) {
  amount =  handleIsInputValueValid();
  let totalWith = firstBoxWidth;
  let totalHeight = firstBoxHeight;
  for (let i = 0; i < amount; i+=1) {
    const boxRef = document.createElement('div');
   boxRef.style.backgroundColor = getRandomHexColor();
   boxRef.style.width = `${totalWith}px`;
   boxRef.style.height = `${totalHeight}px`;
   elements.push(boxRef);
   totalHeight +=10;
   totalWith +=10;    
 
 boxesContainerRef.prepend(...elements);
 }
};

const destroyBoxes = () => {
  boxesContainerRef.innerHTML ='<div id="boxes"></div>';
  inputRef.value = '';
  elements = [];
};


createBtnRef.addEventListener('click',createBoxesUpgrade);
destroyBtnRef.addEventListener('click', destroyBoxes);

// Попередгя функція
// function createBoxes(amount) {
//   amount =  Number(inputRef.value);
//   let totalWith = firstBoxWidth;
//   let totalHeight = firstBoxHeight;
//   if(amount < inputDownLimitRef || amount > inputUpLimitRef){
//     alert(`'Please enter a number between ${inputDownLimitRef} and ${inputUpLimitRef}'`);
//     return;
//   }
//   else {for (let i = 0; i < amount; i+=1) {
//     const boxRef = document.createElement('div');
//    boxRef.style.backgroundColor = getRandomHexColor();
//    boxRef.style.width = `${totalWith}px`;
//    boxRef.style.height = `${totalHeight}px`;
//    elements.push(boxRef);
//    totalHeight +=10;
//    totalWith +=10;    
//  }

//  boxesContainerRef.prepend(...elements);
//  }
// };


