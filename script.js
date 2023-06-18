
function validateEmail() {
    let emailAddress = document.getElementById("emailAddress").value;
    let emailConfirm = document.getElementById("emailConfirm").value;

    if (emailAddress == emailConfirm){
        document.getElementById("results").innerHTML = "Thank you!";
    }

    else {
        document.getElementById("results").innerHTML = "Email doesn't match!";
    }
}
