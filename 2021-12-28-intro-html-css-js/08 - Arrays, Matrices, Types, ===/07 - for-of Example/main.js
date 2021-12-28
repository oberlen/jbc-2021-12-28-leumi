var salaries = [10000, 20000, 30000, 25000];

// Display all: 
for(var item of salaries) {
    document.write(item + " | ");
}
document.write("<br>");

// Display Average:
var sum = 0;
for(var item of salaries) {
    sum = sum + item;
}
var avg = sum / salaries.length;
document.write("Average: " + avg + "<br>");

document.write("<hr>");

var employees = [
    { name: "Moishe", salary: 10000 },
    { name: "Kipi", salary: 20000 },
    { name: "Ugi", salary: 30000 },
    { name: "Kermit", salary: 25000 },
];

// Display all: 
for(var item of employees) {
    document.write(`Name: ${item.name}, Salary: ${item.salary}<br>`);
}

// Display Salary Average: 
sum = 0;
for(var item of employees) {
    sum = sum + item.salary;
}
avg = sum / employees.length;
document.write("Average: " + avg);