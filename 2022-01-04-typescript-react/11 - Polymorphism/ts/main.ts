
let myCat: Cat;
myCat = new Cat("Mitsi", 4, "Black");
myCat.display();
document.write("The color is: " + myCat.color + "<hr>");

// Demo for Polymorphism:
let myCat2: Animal;
myCat2 = new Cat("Mitsi", 4, "Black"); // Polymorphism
myCat2.display(); // Calling a function will always invoke the function containing in the object class and not in the reference class.
// document.write("The color is: " + myCat2.color + "<hr>"); // Compiler Error
document.write("The color is: " + (myCat2 as Cat).color + "<hr>"); // Down Cast


