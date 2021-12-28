function printUntilOdd(arr) {
    for(const item of arr) {
        if(item % 2 !== 0) {
            return; // Exit the function.
        }
        document.write(item + " ");
    }
}

const numbers = [12,24,34,45,46,57,676];
printUntilOdd(numbers);

