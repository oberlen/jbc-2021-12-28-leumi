
document.write("Using Abstract Comparison: <br>")
var a = false; // boolean
var b = 0; // number
if(a == b) { // Abstract Comparison
    document.write("false equal to 0 <br>");
}
else {
    document.write("false not equal to 0 <br>");
}

a = ""; // string
b = 0; // number
if(a == b) { // Abstract Comparison
    document.write("empty string equal to 0 <br>");
}
else {
    document.write("empty string not equal to 0 <br>");
}

document.write("<hr>Using Strict Comparison: <br>");

a = false; // boolean
b = 0; // number
// if(typeof a == typeof b && a == b) { // Strict Comparison
if(a === b) { // Strict Comparison
    document.write("false equal to 0<br>");
}
else {
    document.write("false not equal to 0<br>");
}

a = ""; // string
b = 0; // number
if(a === b) { // Strict Comparison
    document.write("empty string equal to 0<br>");
}
else {
    document.write("empty string not equal to 0<br>");
}


