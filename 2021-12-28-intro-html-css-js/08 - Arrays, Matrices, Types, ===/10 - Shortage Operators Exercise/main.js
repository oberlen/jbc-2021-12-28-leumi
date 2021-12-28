var a = 1, b = 1;

a += 12;
b = ++a;
a *= 2;
b += 8;
b--;
a *= 3;
b = --a;
a %= 2;
b = --a;

document.write(`a = ${a}, b = ${b}`);


