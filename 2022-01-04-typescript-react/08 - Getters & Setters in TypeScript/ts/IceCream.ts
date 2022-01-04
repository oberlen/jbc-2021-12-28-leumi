
// 'מתכנת א
class IceCream {

    public flavor: string;
    private _weight: number;
    private _price: number;

    public constructor(flavor: string, weight: number, price: number) {
        this.flavor = flavor;
        this.weight = weight; // Always call the setter from the ctor.
        this.price = price; // Always call the setter from the ctor.
    }

    // Getters: 
    public get weight(): number {
        return this._weight;
    }
    
    public get price(): number {
        return this._price;
    }

    // Setters: 
    public set weight(value: number) { // can't be void

        // האם הערך לא חוקי
        if(value <= 0 || value > 5) {
            throw new Error("Illegal weight! Weight must be positive, up to 5 kg.");
        }

        // אם הערך חוקי
        this._weight = value;
    }

    public set price(value: number) {

        // האם הערך לא חוקי
        if(value < 0 || value > 500) {
            throw new Error("Illegal price! Price must be positive, up to 1000.");
        }

        // אם הערך חוקי
        this._price = value;
    }

    public display() : void {
        document.write(`Flavor: ${this.flavor}<br>`)
        document.write(`Weight: ${this._weight}<br>`)
        document.write(`Price: ${this._price}<br>`)
    }
}