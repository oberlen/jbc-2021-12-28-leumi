
// פתרון ראשון - המון קוד מיותר
function paintMouseOver1() {
    const button1 = document.getElementById("button1");
    button1.style.backgroundColor = "red";
    button1.style.color = "blue";
}

function paintMouseOut1() {
    const button1 = document.getElementById("button1");
    button1.style.backgroundColor = "green";
    button1.style.color = "white";
}

function paintMouseOver2() {
    const button2 = document.getElementById("button2");
    button2.style.backgroundColor = "red";
    button2.style.color = "blue";
}

function paintMouseOut2() {
    const button2 = document.getElementById("button2");
    button2.style.backgroundColor = "green";
    button2.style.color = "white";
}

function paintMouseOver3() {
    const button3 = document.getElementById("button3");
    button3.style.backgroundColor = "red";
    button3.style.color = "blue";
}

function paintMouseOut3() {
    const button3 = document.getElementById("button3");
    button3.style.backgroundColor = "green";
    button3.style.color = "white";
}

function paintMouseOver4() {
    const button4 = document.getElementById("button4");
    button4.style.backgroundColor = "red";
    button4.style.color = "blue";
}

function paintMouseOut4() {
    const button4 = document.getElementById("button4");
    button4.style.backgroundColor = "green";
    button4.style.color = "white";
}

// -----------------------------

// this פתרון שני - שליחת המילה השמורה

function paintMouseOver(button) {
    button.style.backgroundColor = "red";
    button.style.color = "blue";
}

function paintMouseOut(button) {
    button.style.backgroundColor = "green";
    button.style.color = "white";
}

// אך ע"י בניית פונקציה אחת this פתרון שלישי - שליחת המילה השמורה
function paintMe(button) {
    button.style.backgroundColor = (button.style.backgroundColor === "red") ? "green" : "red";
    button.style.color = (button.style.color === "blue") ? "white" : "blue";
}