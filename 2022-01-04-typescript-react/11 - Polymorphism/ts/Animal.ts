abstract class Animal {
    
    public name: string;
    public age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public display(): void {
        document.write(`Name: ${this.name}<br>`);
        document.write(`Age: ${this.age}<br>`);
    }

    public abstract makeSound(): void;
    
}