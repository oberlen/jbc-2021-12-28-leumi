var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WildCat = /** @class */ (function (_super) {
    __extends(WildCat, _super);
    function WildCat(name, age, color, weight) {
        var _this = _super.call(this, name, age, color) || this;
        _this.weight = weight;
        return _this;
    }
    // // Function Overriding - דריסת פונקציות
    // public display(): void {
    //     // קוד אחר לגמרי מהקוד של מחלקת הבסיס
    //     document.write("Amazing Wild Cat with the name: " + this.name + "<br>");
    //     document.write("And weight: " + this.weight + "<br>");
    // }
    // Function Overriding - דריסת פונקציות
    WildCat.prototype.display = function () {
        // אותו הקוד של הפונקציה שדרסנו במחלקת הבסיס עם תוספת קוד משלנו
        _super.prototype.display.call(this); // Invoke display of our base class.
        document.write("Weight: " + this.weight + "<br>");
    };
    // ביצוע אותו הקוד בדיוק של הפונקציה של מחלקת הבסיס
    // במצב כזה אין מה לכתוב קוד בכלל! כי גם ככה קיבלנו את הפנוקציה של מחלקת הבסיס
    WildCat.prototype.hide = function () {
        document.write("Hiding...<br>");
    };
    return WildCat;
}(Cat));
