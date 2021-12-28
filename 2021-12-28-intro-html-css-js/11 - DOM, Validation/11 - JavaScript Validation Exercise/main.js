function validate() {

    const emailBox = document.getElementById("emailBox");
    const confirmBox = document.getElementById("confirmBox");
    const email = emailBox.value;
    const confirm = confirmBox.value;

    emailBox.style.backgroundColor = "";
    confirmBox.style.backgroundColor = "";

    if(email === "") {
        alert("Missing email.");
        emailBox.style.backgroundColor = "red";
        emailBox.focus();
        event.preventDefault();
        return;
    }

    if(confirm === "") {
        alert("Missing confirm email.");
        confirmBox.style.backgroundColor = "red";
        confirmBox.focus();
        event.preventDefault();
        return;
    }

    if(email !== confirm) {
        alert("Emails do not match.");
        confirmBox.style.backgroundColor = "red";
        confirmBox.focus();
        event.preventDefault();
        return;
    }
}