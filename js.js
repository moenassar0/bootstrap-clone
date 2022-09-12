let name_field = document.getElementById("name");
let email_field = document.getElementById("email");
let phone_field = document.getElementById("phone-number");
let message_field = document.getElementById("message");
let submit_button = document.getElementById("submitmessage");

submit_button.addEventListener("click", submitFunction);

function submitFunction(){
    console.log(validateName(name_field));
    console.log(validateEmail(email_field.value));
    console.log(validateNumber(phone_field.value));
}

function validateName(name) {
    if(name.value.length <= 4){
        return false;
    }
    return true;
}

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
    if(number.slice(0, 3) == "961"){
        if(number.slice(3,4) == "3"){
            if(number.slice(3, number.length).length == 7){
                return true
            }
        }
        else if(number.slice(3,4) == "7"){
            if(number.slice(3, number.length).length == 8){
                return true;
            }
        }
    }
    return false;
}
