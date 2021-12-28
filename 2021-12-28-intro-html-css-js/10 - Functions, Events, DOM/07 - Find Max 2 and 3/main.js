function getMax2(a, b) {
    return a > b ? a : b;
}

function getMax3(a, b, c) {
    return getMax2(a, getMax2(b, c));
}

const max = getMax3(10, 30, 20);
document.write("Max: " + max + "<br>");
