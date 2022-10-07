function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColorBtnRef = document.querySelector('button');
const bodyRef = document.querySelector('body');
const colorValueRef = document.querySelector('.color');


changeColorBtnRef.addEventListener('click', () => {
  colorValueRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = colorValueRef.textContent;
})


