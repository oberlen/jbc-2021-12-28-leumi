var matrix = [];

// Create 5 arrays, each array add to the matrix: 
for(var i = 1; i <= 5; i++) {

    // Create an empty array: 
    var arr = [];

    // Fill the array with 10 random numbers: 
    for(var j = 1; j <= 10; j++) {
        var num = Math.floor(Math.random() * 100); // Generate random number.
        arr.push(num); // Add the generated number to the array.
    }

    // Add the created array to the matrix: 
    matrix.push(arr);
}

for(var arr of matrix) {
    for(var num of arr) {
        document.write(num + " ");
    }
    document.write("<br>");
}

// Display the max number: 
var max = matrix[0][0];
for(var arr of matrix) {
    for(var num of arr) {
        if(num > max) {
            max = num;
        }
    }
}
document.write("Max: " + max);
