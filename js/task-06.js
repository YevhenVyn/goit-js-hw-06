const inputRef = document.querySelector('input');
const inputValidLengthRef = Number(inputRef.dataset.length);
let inputLength = 0;

const handleInputSymbolsQuantity = event =>{

    // console.log(event.currentTarget.value.length)
    inputLength = event.currentTarget.value.length;
    return inputLength;
};

const handleIsInputBlured = event => {
    if(event.currentTarget) {
        const inputMarkValid = () =>{
            inputRef.classList.remove('invalid')
    inputRef.classList.add('valid')
        };
        const inputMarkInvalid = () =>{
            inputRef.classList.remove('valid')
    inputRef.classList.add('invalid')
        };
        inputLength === inputValidLengthRef ? 
        inputMarkValid()
    // console.log('YES!')
    : 
    inputMarkInvalid()
    // console.log('NO!')
    }
};

inputRef.addEventListener('input', handleInputSymbolsQuantity);
inputRef.addEventListener('blur', handleIsInputBlured);

