const userNameRef = document.querySelector('#name-output');
const userDefaultName = userNameRef.textContent
const inputTextRef = document.querySelector('#name-input');

const handleInputChange = event => {
    event.currentTarget.value !== '' ? userNameRef.textContent = event.currentTarget.value : userNameRef.textContent = userDefaultName
};

inputTextRef.addEventListener('input', handleInputChange);
