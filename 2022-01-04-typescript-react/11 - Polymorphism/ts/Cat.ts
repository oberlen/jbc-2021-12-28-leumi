class Cat extends Animal {
    
    public color: string;

    public constructor(name: string, age: number, color: string) {
        super(name, age);
        this.color = color;
    }

    public display(): void {
        super.display();
        document.write(`Color: ${this.color}<br>`);
    }

    public makeSound(): void {
        document.write("Cat Sound: Meow<br>");
    }
    
}