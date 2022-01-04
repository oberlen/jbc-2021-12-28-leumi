const cat1 = new Cat("Mitsi", 4);
cat1.display();
cat1.sleep(2);
cat1.eat();
cat1.happyBirthday();

document.write("The name: " + cat1.name + "<br>");
document.write("The age: " + cat1.age + "<br>");
// document.write("The total illnesses: " + cat1.totalIllnesses + "<br>");
document.write("Cat Cost: " + cat1.getCost() + "<br>");
