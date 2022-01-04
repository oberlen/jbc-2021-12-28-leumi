// 'מתכנת ב

const myTest1 = new Test<boolean>(true);
myTest1.display();
myTest1.value = false;
myTest1.display();
// myTest1.value = "Hi"; // Error

const myTest2 = new Test<string>("Hello");
myTest2.display();
myTest2.value = "Bye Bye";
myTest2.display();
// myTest2.value = 123; // Error

const myTest3 = new Test(120); // same as above
myTest3.display();
myTest3.value = 240;
myTest3.display();
// myTest3.value = "Hello"; // Error

doSomething<number>(123, 456);
doSomething<Date>(new Date(), new Date());
doSomething("Hi", "Cool");

function doSomething<TSomething>(val1: TSomething, val2: TSomething) {
    document.write(`Val1: ${val1}, Val2: ${val2}<br>`);
}
