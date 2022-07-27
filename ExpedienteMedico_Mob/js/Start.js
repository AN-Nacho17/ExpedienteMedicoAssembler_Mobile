$(document).ready(function () {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
        let person_header = document.getElementById("person_header");
        let userName = user.email;
        let newHeader = "Welcome back " + userName;
        person_header.innerHTML = newHeader;
    }
    console.log(user);
});