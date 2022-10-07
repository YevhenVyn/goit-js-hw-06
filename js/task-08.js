const formRef = document.querySelector('.login-form');
const refs = {
    email: formRef.querySelector('input[name = email]'),
    password: formRef.querySelector('input[name = password]'),
    button: formRef.querySelector('button')
};

const emailInputName = refs.email.name;
const passwordInputName = refs.password.name;
const elements = {};

// console.log(formRef);
// console.log(emailInputName);
// console.log(refs.password);
// console.log(refs.button);
// console.log(refs.email.parentElement.textContent);

let userEmail = '';
let userPassword = '';

const checkingIsEmailInputValid = () => {
    userEmail =refs.email.value;
    if (userEmail === '') {
        alert(`'You did not filled the ${refs.email.parentElement.textContent} field!'`);
    }
    else if(!userEmail.includes('@')){
        alert(`'The ${refs.email.parentElement.textContent} field must contain symbol '@'!'`);
    return
}
        else if (!userEmail.includes('.')){
            alert(`'The ${refs.email.parentElement.textContent} field must contain symbol '.'!'`);
            return
}
else {
    return userEmail
}
};

const checkingIsPasswordInputValid = () => {
    userPassword = refs.password.value;
    if (userPassword === '') {
        alert(`'You did not filled the ${refs.password.parentElement.textContent} field!'`);
        return
    }
    else {
        return userPassword
    }
};


const handleSubmitButtonClickUpgrade = event => {
    event.preventDefault();
    if (checkingIsEmailInputValid() === userEmail && checkingIsPasswordInputValid() === userPassword) {

        elements[emailInputName] = userEmail;
        elements[passwordInputName] = userPassword;
        formRef.reset();
        userEmail = '';
        userPassword = '';
        console.log(elements);
        return elements
    }
};

refs.button.addEventListener('click',handleSubmitButtonClickUpgrade);

// const handleSubmitButtonClick = event => {
//     event.preventDefault();
//     userEmail =refs.email.value;
//     userPassword = refs.password.value;
//     if (userEmail === '') {
//         alert(`'You did not filled the ${refs.email.parentElement.textContent} field!'`);
//     }
//     else if (userPassword === '') {
//         alert(`'You did not filled the ${refs.password.parentElement.textContent} field!'`);
//     }
//     else {
//         elements[emailInputName] = userEmail;
//         elements[passwordInputName] = userPassword;
//         formRef.reset();
//         userEmail = '';
//         userPassword = '';
//         console.log(elements);
//         return elements
//     }
    
// };








