// 'מתכנת ב
var myFavoriteIceCream = new IceCream("Vanil", 0.5, 20);
myFavoriteIceCream.display();
document.write("<hr>");
// Write: 
myFavoriteIceCream.flavor = "Chocolate";
// myFavoriteIceCream._weight = 1000; // Error
// myFavoriteIceCream._price = -5; // Error
myFavoriteIceCream.setWeight(1000);
myFavoriteIceCream.setPrice(-5);
// Read: 
document.write("The flavor is: " + myFavoriteIceCream.flavor + "<br>");
// document.write("The price is: " + myFavoriteIceCream._price + "<br>"); // Error
// document.write("The weight is: " + myFavoriteIceCream._weight + "<br>"); // Error
document.write("The price is: " + myFavoriteIceCream.getPrice() + "<br>"); // Error
document.write("The weight is: " + myFavoriteIceCream.getWeight() + "<br>"); // Error
