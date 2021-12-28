function showSummary() {
    
    // 1. Get DOM Objects: 
    const firstNumBox = document.getElementById("firstNumBox");
    const secondNumBox = document.getElementById("secondNumBox");

    // 2. Get the text from the boxes: 
    const firstNum = +firstNumBox.value;
    const secondNum = +secondNumBox.value;

    // 3. Calculate: 
    const sum = firstNum + secondNum;
    alert("Sum: " + sum);
    
}