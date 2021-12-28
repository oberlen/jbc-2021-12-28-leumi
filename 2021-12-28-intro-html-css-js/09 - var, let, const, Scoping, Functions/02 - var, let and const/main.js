// Scope - טווח הכרה
// היכן ניתן להשתמש עם משתנה שהגדרנו, כלומר - היכן הוא מוכר


// console.log("aaa = " + aaa); // aaa is Undeclared, and thus the script will crash!

// var bbb;
// console.log("bbb = " + bbb); // bbb is Uninitialized, will display undefined.

// // var: 
// var num = +prompt("Enter a number: ");
// if (num > 10) {
//     var a = 10; // Hoisting - הרמה של המשתנה למעלה ללא אתחול
//     console.log("a = " + a);
// }
// console.log("a = " + a);

// // let: 
// // let is a Block Variable! It can only be used inside its block.
// let num = +prompt("Enter a number: ");
// if (num > 10) {
//     let a = 10; // No Hoisting for let variables.
//     console.log("a = " + a);
// }
// console.log("a = " + a);


// // const: 
// // const is also a Block Variable, but it must be initialized
// // and it can't be changed after.
// const num = +prompt("Enter a number: ");
// if (num > 10) {
//     const a = 10; // No Hoisting for const variables.
//     console.log("a = " + a);
// }
// console.log("a = " + a);



// let x;
// console.log(x); // undefined
// x = 100;
// console.log(x); // 100
// x = 200;
// console.log(x); // 200


// const x; // Crash!
const x = 100;
console.log(x); // 100
// x = 200; // Crash!
