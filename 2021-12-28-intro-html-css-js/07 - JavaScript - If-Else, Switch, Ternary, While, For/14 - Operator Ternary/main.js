
var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
var max;

// if-else-שיטה ראשונה - שימוש ב
// if(num1 > num2) {
//     max = num1;
// }
// else {
//     max = num2;
// }

// שיטה שנייה - שימוש באופרטור טרינרי
max = num1 > num2 ? num1 : num2;


document.write("Max: " + max);

