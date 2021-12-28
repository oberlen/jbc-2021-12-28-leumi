
document.write("This is a string...<br>"); // Quote
document.write('This is a string...<br>'); // Apostrophe
document.write(`This is a string...<br>`); // Back Tick

document.write("<hr>");

var num1 = 10;
var num2 = 20;
var sum = num1 + num2;

// String Concatenation: 
document.write(num1 + " + " + num2 + " = " + sum + "<br>");
document.write(num1 + " * " + num2 + " = " + (num1 * num2) + "<br>");

document.write("<hr>");

// String Interpolation: 
document.write(`${num1} + ${num2} = ${sum}<br>`);
document.write(`${num1} * ${num2} = ${num1 * num2}<br>`);

// String Concatenation for breaking a string in the code: 
document.write("This is a very long string for a very long text " +
    "example that I want to divide to several lines of code...<br>");

// String Interpolation for breaking a string in the code: 
document.write(`This is a very long string for a very long text 
    example that I want to divide to several lines of code...<br>`);

