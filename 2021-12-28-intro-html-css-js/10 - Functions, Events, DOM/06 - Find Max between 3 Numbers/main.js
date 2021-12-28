function getMax(a, b, c) {
    if(a > b && a > c) {
        return a;
    }
    if(b > c) {
        return b;
    }
    return c;
}


const max = getMax(10, 30, 20);
document.write("Max: " + max + "<br>");
