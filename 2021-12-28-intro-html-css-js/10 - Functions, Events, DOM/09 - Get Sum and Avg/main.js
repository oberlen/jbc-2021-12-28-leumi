function getSum(arr) {
    let sum = 0;
    for(const item of arr) {
        sum += item;
    }
    return sum;
}

function getAvg(arr) {
    const sum = getSum(arr);
    return sum / arr.length;
}

function getMax(arr) {
    let max = arr[0];
    for(const item of arr) {
        if(item > max) {
            max = item;
        }
    }
    return max;
}

const numbers = [12,23,34,45,56,67,78];
const sum = getSum(numbers);
const avg = getAvg(numbers);
const max = getMax(numbers);
document.write("Sum: " + sum + "<br>");
document.write("Avg: " + avg + "<br>");
document.write("Max: " + max + "<br>");

