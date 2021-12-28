function paintOne() {
    const coolPar = document.getElementById("coolPar");
    coolPar.style.backgroundColor = "yellow";
}

function paintSome() {
    const arr = document.getElementsByClassName("nice");
    for(const item of arr) {
        item.style.backgroundColor = "green";
    }
}

function paintAll() {
    const arr = document.getElementsByTagName("p");
    for(const item of arr) {
        item.style.backgroundColor = "red";
    }
}