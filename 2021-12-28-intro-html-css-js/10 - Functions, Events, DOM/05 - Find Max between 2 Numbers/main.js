// // First Way: 
// function getMax(n1, n2) {
//     if (n1 > n2) {
//         return n1;
//     }
//     else {
//         return n2;
//     }
// }

// // Second Way: 
// function getMax(n1, n2) {
//     if (n1 > n2) {
//         return n1;
//     }
//     return n2;
// }

// // Third Way: 
// function getMax(n1, n2) {
//     let max = n1;
//     if (n2 > n1) {
//         max = n2;
//     }
//     return max;
// }

// Fourth Way: 
function getMax(n1, n2) {
    return (n1 > n2 ? n1 : n2);
}

const max = getMax(10, 20);
document.write("Max: " + max + "<br>");



