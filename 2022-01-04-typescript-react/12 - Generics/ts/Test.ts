
// 'מתכנת א

class Test<TValue> {

    public value: TValue;

    public constructor(value: TValue) {
        this.value = value;
    }

    public display(): void {
        document.write(`Value: ${this.value}<br>`);
    }

}

