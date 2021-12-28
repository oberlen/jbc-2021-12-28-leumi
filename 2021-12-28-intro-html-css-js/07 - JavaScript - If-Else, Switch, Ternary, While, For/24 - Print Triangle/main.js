
var n = +prompt("Enter Triangle Size: ");

for(var i = 1; i <= n; i = i + 1) { // הדפסת השורות

    for(var j = 1; j <= i; j = j + 1) { // הדפסת הכוכביות בכל שורה
        document.write("* ");
    }

    document.write("<br>");

}