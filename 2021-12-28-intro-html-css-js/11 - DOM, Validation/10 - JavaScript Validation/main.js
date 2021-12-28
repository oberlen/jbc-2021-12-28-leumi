function checkLogin() {

    const usernameBox = document.getElementById("usernameBox");
    const passwordBox = document.getElementById("passwordBox");
    const username = usernameBox.value;
    const password = passwordBox.value;

    usernameBox.style.backgroundColor = "";
    passwordBox.style.backgroundColor = "";

    if(username === "") {
        alert("Missing username.");
        usernameBox.style.backgroundColor = "red";
        usernameBox.focus();
        event.preventDefault();
        return;
    }

    if(username.length < 4) {
        alert("Username too short.");
        usernameBox.style.backgroundColor = "red";
        usernameBox.focus();
        event.preventDefault();
        return;
    }

    if(password === "") {
        alert("Missing password.");
        passwordBox.style.backgroundColor = "red";
        passwordBox.focus();
        event.preventDefault();
        return;
    }

    if(password.length < 4) {
        alert("Password too short.");
        passwordBox.style.backgroundColor = "red";
        passwordBox.focus();
        event.preventDefault();
        return;
    }

    alert("Sending the values to the server...");
}