// 'מתכנת א
var IceCream = /** @class */ (function () {
    function IceCream(flavor, weight, price) {
        this.flavor = flavor;
        this._weight = weight;
        this._price = price;
    }
    // Getters: 
    IceCream.prototype.getWeight = function () {
        return this._weight;
    };
    IceCream.prototype.getPrice = function () {
        return this._price;
    };
    // Setters: 
    IceCream.prototype.setWeight = function (value) {
        // האם הערך לא חוקי
        if (value <= 0 || value > 5) {
            throw new Error("Illegal weight! Weight must be positive, up to 5 kg.");
        }
        // אם הערך חוקי
        this._weight = value;
    };
    IceCream.prototype.setPrice = function (value) {
        // האם הערך לא חוקי
        if (value < 0 || value > 500) {
            throw new Error("Illegal price! Price must be positive, up to 1000.");
        }
        // אם הערך חוקי
        this._price = value;
    };
    IceCream.prototype.display = function () {
        document.write("Flavor: " + this.flavor + "<br>");
        document.write("Weight: " + this._weight + "<br>");
        document.write("Price: " + this._price + "<br>");
    };
    return IceCream;
}());
