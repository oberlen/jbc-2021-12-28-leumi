// Function Arguments - ארגומנטים של פונקציה
// Argument - משתנה שפונקציה מקבלת לסוגריים
// המשתנה נשלח מהקריאה לפונקציה
// הוא נועד לשימוש קוד הפונקציה

function saySomething(message) { // message is an argument
    document.write(message + "<br>");
}

saySomething("Hello All!");
saySomething("Bye Bye");





function duplicateMessage(message, timesToDuplicate) {
    for(let i = 1; i <= timesToDuplicate; i++) {
        document.write(message + "<br>");
    }
}

duplicateMessage("You are Amazing Function!", 5);
duplicateMessage("Cool Code :-)", 7 );

const userMessage = prompt("Enter some message: ");
const times = +prompt("Enter times to duplicate: ");
duplicateMessage(userMessage, times);
