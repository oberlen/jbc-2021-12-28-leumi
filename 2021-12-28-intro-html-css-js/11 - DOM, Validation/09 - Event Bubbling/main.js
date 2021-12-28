function showText() {
    if (event.srcElement.nodeName === "TD") {
        alert(event.srcElement.innerText);
    }
}

function changeColor() {
    if (event.srcElement.nodeName === "TD") {
        if(event.srcElement.style.backgroundColor === "red") {
            event.srcElement.style.backgroundColor = "white";
        }
        else {
            event.srcElement.style.backgroundColor = "red";
        }
    }
}