const contactForm = document.querySelector("form");
const formChild = contactForm.childNodes;

const firstNameFormGroup = formChild[1];
const lastNameFormGroup = formChild[3];
const emailFormGroup = formChild[5];
const messageFormGroup = formChild[7];

// const form = document.querySelector("#contactForm");

// form.addEventListener("submit", validateForm);

contactForm.addEventListener("submit", validateForm); 

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");
    
    // First Name validation
    // const firstName = document.querySelector("#firstName");
    // const firstNameError = document.querySelector("#firstNameError");
    const firstName = firstNameFormGroup.childNodes[1];
    const firstNameError = firstNameFormGroup.childNodes[3];
    const firstNameValue = firstName.value;

    validateName(firstNameValue, firstNameError);

    // Last Name validation
    // const lastName = document.querySelector("#lastName");
    // const lastNameError = document.querySelector("#lastNameError");
    const lastName = lastNameFormGroup.childNodes[1];
    const lastNameError = lastNameFormGroup.childNodes[3];
    const lastNameValue = lastName.value;

    validateName(lastNameValue, lastNameError);

    // E-mail validation
    // const email = document.querySelector("#email");
    // const emailError = document.querySelector("#emailError");
    // const invalidEmailError = document.querySelector("#invalidEmailError");
    const email = emailFormGroup.childNodes[1];
    const emailError = emailFormGroup.childNodes[3];
    const invalidEmailError = emailFormGroup.childNodes[5];
    const emailValue = email.value;

    validateName(emailValue, emailError);
    
    if (validateEmail(emailValue) === true){
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

    // Message validation
    // const message = document.querySelector("#message");
    // const messageError = document.querySelector("#messageError");
    const message = messageFormGroup.childNodes[1];
    const messageError = messageFormGroup.childNodes[3];
    const messageValue = message.value;

    if(checkMessageLength(messageValue) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }   

    if (checkInputLength(firstNameValue) && checkInputLength(lastNameValue) && checkInputLength(emailValue)){
        if(validateEmail(emailValue)){
            if(checkMessageLength(messageValue)){
                formPass();
            } else {
                removeFormPass();
            }
        } else {
            removeFormPass();
        } 
    } else {
        removeFormPass();
    }
};

function checkInputLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
};

function validateName(nameValue, errorType){
    if(checkInputLength(nameValue) === true){
        errorType.style.display = "none";
    } else {
        errorType.style.display = "block";
    }
}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

function checkMessageLength(value){
    const trimmedValue = value.trim();

    if (trimmedValue.length > 9){
        return true;
    } else {
        return false;
    }
}

function formPass(){
    const validationMessage = document.createElement("p");
    validationMessage.innerText = "The form was submitted perfectly";
    validationMessage.id = "validation-message";

    contactForm.insertBefore(validationMessage, contactForm.firstChild);
};

function removeFormPass(){
    const message = document.getElementById("validation-message");

    contactForm.removeChild(message);    
}
