
function buttonAlert() {
    alert("dance dance!")
}

function infoGrab() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var contactReason = document.getElementById("contactReason").value;
    var email = document.getElementById("email").value;
    document.getElementById("p1").innerHTML = "Thank you, " + firstName + " " + lastName + ". Your email is: " + email;
    alert("Thank you, " + firstName + " " + lastName + ". Your email is: " + email);

}