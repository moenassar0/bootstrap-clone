//Fetch doc elements
let name_field = document.getElementById("name");
let email_field = document.getElementById("email");
let phone_field = document.getElementById("phone-number");
let message_field = document.getElementById("message");
let submit_button = document.getElementById("submitmessage");
let error_div = document.getElementById("error-message");

submit_button.addEventListener("click", submitFunction);

//Submit button pressed
function submitFunction(){
    error_message = "";
    if(!validateName(name_field)){
        error_message += "Name is too short! (Minimum 5 characaters) <br>"
    }
    if(!validateEmail(email_field.value)){
        error_message += "Email is incorrect! (Minimum 3 characaters before the @ and 7 characters after) <br>"
    }
    if(!validateNumber(phone_field.value)){
        error_message += "Incorrect phone number! <br>"
    }
    if(!validateMessage(message_field)){
        error_message += "Message sent was too short! (Minimum 100 characters) <br>"
    }
 
    if(error_message != ''){
        error_div.classList.remove("hidden");
        error_div.innerHTML = error_message;
    }
    console.log(error_message);
}

function validateName(name) {
    if(name.value.length <= 4){
        return false;
    }
    return true;
}

//Validation functions
function validateEmail(email) {
    const myArray = email.split("@");
    if(myArray[0].length <= 2){
        return false;
    }
    if(myArray[1].length <= 4){
        return false;
    }
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateNumber(number){
    if(number.slice(0, 4) == "+961"){
        if(number.slice(4,5) == "3"){
            if(number.slice(4, number.length).length == 7){
                return true
            }
        }
        else if(number.slice(4,5) == "7"){
            if(number.slice(4, number.length).length == 8){
                return true;
            }
        }
    }
    return false;
}

function validateMessage(message){
    if(message.value.length < 99){
        return false;
    }
    return true;
}
