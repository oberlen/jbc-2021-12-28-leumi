function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(arr[i] + ", ");
    }
    document.write("<br>");
}

function getEvenSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const numbers = [12, 23, 34, 34, 34, 23, 35, 56, 6, 78];
printArray(numbers);

const evenSum = getEvenSum(numbers);
document.write("Even Sum: " + evenSum + "<br>");
