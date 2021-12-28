// // First way:
// function isEven(num) {
//     if(num % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// // Second way:
// function isEven(num) {
//     return num % 2 === 0 ? true : false;
// }

// Third way:
function isEven(num) {
    return num % 2 === 0;
}

const num = 12;
if (isEven(num)) {
    document.write(num + " is even<br>");
}
else {
    document.write(num + " is odd<br>");
}

