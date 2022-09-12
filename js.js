let name_field = document.getElementById("name");
let email_field = document.getElementById("email");
let phone_field = document.getElementById("phone-number");
let message_field = document.getElementById("message");
let submit_button = document.getElementById("submitmessage");

submit_button.addEventListener("click", submitFunction);

function submitFunction(){
    console.log(validateName(name_field));
    console.log(validateEmail(email_field.value));
}

function validateName(name) {
    if(name.value.length <= 4){
        return false;
    }
    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
