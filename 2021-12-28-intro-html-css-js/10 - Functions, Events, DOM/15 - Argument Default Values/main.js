function printMessage(message = "No Message :-(", times = 1) { // Default Values
    for(let i = 1; i <= times; i++) {
        document.write(message + " ");
    }
    document.write("<br>");
}

printMessage("Hi", 5);
printMessage("Hello");
printMessage();
printMessage(undefined, 3);

