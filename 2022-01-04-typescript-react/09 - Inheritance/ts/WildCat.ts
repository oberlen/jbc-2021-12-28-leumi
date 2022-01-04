class WildCat extends Cat {

    public weight: number;

    public constructor(name: string, age: number, color: string, weight: number) {
        super(name, age, color); // Invoke Cat's constructor
        this.weight = weight;
    }

    // // Function Overriding - דריסת פונקציות
    // public display(): void {
    //     // קוד אחר לגמרי מהקוד של מחלקת הבסיס
    //     document.write("Amazing Wild Cat with the name: " + this.name + "<br>");
    //     document.write("And weight: " + this.weight + "<br>");
    // }

    // Function Overriding - דריסת פונקציות
    public display(): void {
        // אותו הקוד של הפונקציה שדרסנו במחלקת הבסיס עם תוספת קוד משלנו
        super.display(); // Invoke display of our base class.
        document.write(`Weight: ${this.weight}<br>`);
    }

    // ביצוע אותו הקוד בדיוק של הפונקציה של מחלקת הבסיס
    // במצב כזה אין מה לכתוב קוד בכלל! כי גם ככה קיבלנו את הפנוקציה של מחלקת הבסיס

    public hide() : void {
        document.write("Hiding...<br>");
    }
}
