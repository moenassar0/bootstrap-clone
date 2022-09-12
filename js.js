let name_field = document.getElementById("name");
let submit_button = document.getElementById("submitmessage");

submit_button.addEventListener("click", submitFunction);

function submitFunction(){
    console.log(name_field.value);
}
