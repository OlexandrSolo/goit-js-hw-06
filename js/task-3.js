
class StringBuilder{
    #value = '';
    constructor(initialValue) {
        this.#value = initialValue
    }

    getValue() {
        return this.#value
    }

    padEnd(str) {
        //    this.#value = this.#value + str
        this.#value = this.#value.padEnd(this.#value.length + str.length, str)
    }

    padStart(str) {
        // this.#value = str + this.#value
        this.#value = this.#value.padStart(this.#value.length + str.length, str)
    }

    padBoth(str) {
        this.#value.pad
        this.#value = str + this.#value + str
    }
}

const builder = new StringBuilder(".");
console.log('TASK-3:',builder.getValue()); // "."
builder.padStart("^");
console.log('TASK-3:',builder.getValue()); // "^."
builder.padEnd("^");
console.log('TASK-3:',builder.getValue()); // "^.^"
builder.padBoth("=");
console.log('TASK-3:', builder.getValue()); // "=^.^="
console.log('Good Look'.padStart(30,'-🤞'));
