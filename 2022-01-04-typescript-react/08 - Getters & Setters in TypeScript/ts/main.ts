
// 'מתכנת ב
const myFavoriteIceCream = new IceCream("Vanil", 0.5, 20);
myFavoriteIceCream.display();
document.write("<hr>");

// Write: 
myFavoriteIceCream.flavor = "Chocolate"; // OK
// myFavoriteIceCream._weight = 1000; // Error
// myFavoriteIceCream._price = -5; // Error
myFavoriteIceCream.weight = 1000; // OK - calling the set function
myFavoriteIceCream.price = -5; // OK - calling the set function

// Read: 
document.write("The flavor is: " + myFavoriteIceCream.flavor + "<br>"); // OK
// document.write("The weight is: " + myFavoriteIceCream._weight + "<br>"); // Error
// document.write("The price is: " + myFavoriteIceCream._price + "<br>"); // Error
document.write("The weight is: " + myFavoriteIceCream.weight + "<br>"); // OK - calling the get function
document.write("The price is: " + myFavoriteIceCream.price + "<br>"); // OK - calling the get function
