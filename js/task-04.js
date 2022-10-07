let counterValue = 0;
const plusBtnRef = document.querySelector('button[data-action="increment"]');
const minusBtnRef = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector('#value');

const handlePlusMinusBtnClick = event => {

    switch( event.currentTarget){
        case plusBtnRef:
            counterValue += 1;
            break;
        
        case minusBtnRef:
            counterValue -= 1;
            break;
    }

    valueRef.textContent = counterValue;
    return counterValue;
};

plusBtnRef.addEventListener('click', handlePlusMinusBtnClick);
minusBtnRef.addEventListener('click',handlePlusMinusBtnClick);


//  separate functions for 'plus' and 'minus' buttons:

// function handlePlusBtnClick(event) {
//     counterValue += 1;
//     valueRef.textContent = counterValue;
//     return counterValue;
// };

// function handleMinusBtnClick(event) {
//     counterValue -=1;
//     valueRef.textContent = counterValue;
//     return counterValue;
// }







