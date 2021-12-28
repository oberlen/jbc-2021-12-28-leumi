var prices = [[100, 200, 150, 300], [20, 50, 34], [99, 33, 22, 66, 33, 22, 22, 66]];

for(var arr of prices) {
    for(var price of arr) {
        document.write(price + " ");
    }
    document.write("<br>");
}

var sum = 0;
var count = 0;
for(var arr of prices) {
    for(var price of arr) {
        sum += price;
        count++;
    }
}
var avg = sum / count;

document.write("Average: " + avg.toFixed(2));


