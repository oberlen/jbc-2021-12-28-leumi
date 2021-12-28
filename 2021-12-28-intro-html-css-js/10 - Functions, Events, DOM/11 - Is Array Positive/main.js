function isArrayPositive(arr) {
    for (const item of arr) {
        if (item <= 0) {
            return false;
        }
    }
    return true;
}

const numbers = [12, 23, 34, 45, 56, -67, 78, 78, 78, -67, 56, 45, 45, 34];
if(isArrayPositive(numbers)) {
    document.write("All numbers are positive.");
}
else {
    document.write("Not all numbers are positive.");
}