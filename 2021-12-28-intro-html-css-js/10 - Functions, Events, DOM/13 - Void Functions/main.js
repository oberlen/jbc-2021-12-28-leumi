function printMessage(message, times) {
    for(let i = 1; i <= times; i++) {
        document.write(message + " ");
    }
    document.write("<br>");
}

// קריאה נכונה
printMessage("Hi", 5);

// קריאה לא נכונה - פונקציה לא אמורה להחזיר דבר:
// const result = printMessage("Hi", 5);
// document.write("Result: " + result);

// קריאה לא נכונה - פונקציה לא אמורה להחזיר דבר:
document.write(printMessage("Hi", 5));
