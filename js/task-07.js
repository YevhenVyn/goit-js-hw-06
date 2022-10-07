const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const handleTextSizeByInputValue = event => {
    textRef.style.fontSize = `${event.currentTarget.value}px`
};

inputRef.addEventListener('input', handleTextSizeByInputValue);



