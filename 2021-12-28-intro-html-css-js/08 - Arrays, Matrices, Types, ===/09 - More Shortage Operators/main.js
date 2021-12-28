var a = 10;
a++; // a = a + 1
document.write("a = " + a + "<br>"); // a = 11

var a = 10;
++a; // a = a + 1
document.write("a = " + a + "<br>"); // a = 11

var a = 10;
var b = a++; // b = a;    a = a + 1;
document.write("a = " + a + ", b = " + b + "<br>"); // a = 11, b = 10

var a = 10;
var b = ++a; // a = a + 1;     b = a;
document.write("a = " + a + ", b = " + b + "<br>"); // a = 11, b = 11

document.write("<hr>");

var a = 10;
a--; // a = a - 1
document.write("a = " + a + "<br>"); // a = 9

var a = 10;
--a; // a = a - 1
document.write("a = " + a + "<br>"); // a = 9

var a = 10;
var b = a--; // b = a;    a = a - 1;
document.write("a = " + a + ", b = " + b + "<br>"); // a = 9, b = 10

var a = 10;
var b = --a; // a = a - 1;     b = a;
document.write("a = " + a + ", b = " + b + "<br>"); // a = 9, b = 9
