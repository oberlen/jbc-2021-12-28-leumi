function printLine(len) {
    for(let i = 1; i <= len; i++) {
        document.write("* ");
    }
    document.write("<br>");
}

function printSquare(size) {
    for(let i = 1; i <= size; i++) {
        printLine(size);
    }
}

const num = +prompt("Enter Square Size: ");
printSquare(num);
