class Cat {

    public name: string;
    public age: number;
    public readonly color: string; // Read Only - Can be assigned only at ctor (and also here)
    private totalIllnesses: number;

    public constructor(name: string, age: number, color: string) {
        this.name = name;
        this.age = age;
        this.color = color; // OK
        this.totalIllnesses = Math.floor(Math.random() * 3);
    }
    
    public sleep(hours: number): void {
        // this.color = "Red"; // Error
        document.write(`${this.name} is sleeping for ${hours} hours...<br>`);
    }
    public eat(): void {
        document.write(this.name + " is eating...<br>");
    }
    public happyBirthday(): void { // Advance age by 1 and presents a happy birthday message including the age.
        this.age++;
        document.write(`Happy Birthday! ${this.name} is ${this.age} years old!<br>`);
    }
    public display(): void {
        document.write(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}<br>`);
    }
    public getCost(): number {
        if(this.totalIllnesses === 0) {
            return 150;
        }
        return 100 / this.totalIllnesses;
    }
}

