var Cat = /** @class */ (function () {
    // Constructor:
    function Cat(name, age) {
        this.name = name;
        this.age = age;
        this.totalIllnesses = Math.floor(Math.random() * 3);
    }
    // Methods:
    Cat.prototype.sleep = function (hours) {
        document.write(this.name + " is sleeping for " + hours + " hours...<br>");
    };
    Cat.prototype.eat = function () {
        document.write(this.name + " is eating...<br>");
    };
    Cat.prototype.happyBirthday = function () {
        this.age++;
        document.write("Happy Birthday! " + this.name + " is " + this.age + " years old!<br>");
    };
    Cat.prototype.display = function () {
        document.write("Name: " + this.name + ", Age: " + this.age + "<br>");
    };
    Cat.prototype.getCost = function () {
        if (this.totalIllnesses === 0) {
            return 150;
        }
        return 100 / this.totalIllnesses;
    };
    return Cat;
}());
