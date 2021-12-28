
function getFullName() {
    const firstName = prompt("Enter first name: ");
    const lastName = prompt("Enter last name: ");
    document.write(firstName + " " + lastName + "<br>");
}

function getTwoFullNames() {
    getFullName();
    getFullName();
}

getTwoFullNames()

