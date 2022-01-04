class Cat {

    // Fields / Data Members
    name: string;
    age: number;

    // Methods:
    sleep(hours: number): void {
        document.write(`${this.name} is sleeping for ${hours} hours...<br>`);
    }
    eat(): void {
        document.write(this.name + " is eating...<br>");
    }
    happyBirthday(): void { // Advance age by 1 and presents a happy birthday message including the age.
        this.age++;
        document.write(`Happy Birthday! ${this.name} is ${this.age} years old!`);
    }
    display(): void {
        document.write(`Name: ${this.name}, Age: ${this.age}<br>`);
    }
}

