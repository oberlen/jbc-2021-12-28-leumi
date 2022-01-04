class Cat {

    // Fields / Data Members
    name: string; // public
    public age: number; // public
    private totalIllnesses: number; // private

    // Constructor:
    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.totalIllnesses = Math.floor(Math.random() * 3);
    }
    
    // Methods:
    public sleep(hours: number): void {
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
        document.write(`Name: ${this.name}, Age: ${this.age}<br>`);
    }
    public getCost(): number {
        if(this.totalIllnesses === 0) {
            return 150;
        }
        return 100 / this.totalIllnesses;
    }
}

