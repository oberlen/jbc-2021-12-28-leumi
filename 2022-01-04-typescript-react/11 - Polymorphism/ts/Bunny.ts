class Bunny extends Animal {

    public gender: string;

    public constructor(name: string, age: number, gender: string) {
        super(name, age);
        this.gender = gender;
    }

    public display(): void {
        super.display();
        document.write(`Gender: ${this.gender}<br>`);
    }

    public makeSound(): void {
        document.write("Bunny Sound: Whatever<br>");
    }
}