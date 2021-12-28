function printLine(limit) {
    for(let i = 1; i <= limit; i++) {
        document.write(i + " ");
    }
    document.write("<br>");
}

function printTriangle(size) {
    for(let i = 1; i <= size; i++) {
        printLine(i);
    }
}

const n = +prompt("Enter triangle size: ");
printTriangle(n);