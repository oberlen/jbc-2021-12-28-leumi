// return

function getAverage(n1, n2, n3, n4, n5) {
    const sum = n1 + n2 + n3 + n4 + n5;
    const avg = sum / 5;
    return avg;
}


const result = getAverage(10, 20, 30, 40, 60); // שיטת העבודה המומלצת
document.write("Average: " + result + "<br>");


document.write("Average: " + getAverage(1, 2, 3, 4, 5) + "<br>"); // לא מומלץ


if(100 > getAverage(10, 20, 30, 40, 50)) { // לא מומלץ
    document.write("Cool<br>");
}


