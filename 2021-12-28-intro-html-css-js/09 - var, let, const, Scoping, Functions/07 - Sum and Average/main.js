

function printSumAndAvg(n1, n2, n3) {
    const sum = n1 + n2 + n3;
    const avg = sum / 3;
    document.write(`Sum: ${sum}, Avg: ${avg}<br>`);
}
printSumAndAvg(10, 22, 30);

const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);
const c = Math.floor(Math.random() * 100);
printSumAndAvg(a, b, c);

const x = +prompt("Enter first number: ");
const y = +prompt("Enter second number: ");
const z = +prompt("Enter third number: ");
printSumAndAvg(x, y, z);



