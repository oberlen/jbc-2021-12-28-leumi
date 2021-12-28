
for(let i) {
    for(let i) {
        for(let i) {

        }
    }
}



function printLine(len) {
    for(let i = 1; i <= len; i++) {
        document.write("* ");
    }
    document.write("<br>");
}

function printRectangle(width, height) {
    for(let i = 1; i <= height; i++) {
        printLine(width);
    }
    document.write("<br>");
}

function printRandomRectangles(count) {
    for(let i = 1; i <= count; i++) {
        const randomWidth = Math.floor(Math.random() * 10) + 1;
        const randomHeight = Math.floor(Math.random() * 10) + 1;
        printRectangle(randomWidth, randomHeight);
    }
}


const n = +prompt("Enter Rectangles Count: ");
printRandomRectangles(n);
