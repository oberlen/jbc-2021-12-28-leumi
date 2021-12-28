
var a = 100;
document.write("Value: " + a + ", Type: " + typeof a + "<br>"); // 100, number

var b = "Hello";
document.write("Value: " + b + ", Type: " + typeof b + "<br>"); // Hello, string

var c = true;
document.write("Value: " + c + ", Type: " + typeof c + "<br>"); // true, boolean

var d1 = { name: "Mitsi", age: 4 };
document.write("Value: " + d1 + ", Type: " + typeof d1 + ", "); // [object, Object], object
document.write("Is Array: " + Array.isArray(d1) + "<br>");

var d2 = [10, 20, 30, 40]; // הסוג של מערך הוא גם אובייקט
document.write("Value: " + d2 + ", Type: " + typeof d2 + ", "); // 10,20,30,40, object
document.write("Is Array: " + Array.isArray(d2) + "<br>");

var e = document.write;
document.write("Value: " + e + ", Type: " + typeof e + "<br>");// function write() { [native code] }, function

var f;
document.write("Value: " + f + ", Type: " + typeof f + "<br>"); // undefined, undefined

var g = Symbol("Moishe Ufnik"); // מזהה ייחודי נסתר
document.write(g.toString() + ", Type: " + typeof g + "<br>"); // symbol



