var grades = [90, 93, 80, 100, 2, 98];

// Regular for: 
for(var i = 0; i < grades.length; i = i + 1) {
    document.write(grades[i] + " | ");
}

document.write("<hr>");

// for-of:
for(var item of grades) {
    document.write(item + " | ");
}

