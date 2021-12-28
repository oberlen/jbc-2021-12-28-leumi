function showName() {

    // 1. Get the desired DOM object:
    const fullNameBox = document.getElementById("fullNameBox");

    // 2. Do something with it:
    fullNameBox.style.backgroundColor = "yellow";
    const fullName = fullNameBox.value; // The written text
    alert(fullName);
}
