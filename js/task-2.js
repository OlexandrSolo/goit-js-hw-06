class Storage {
    #items = []
    constructor(items) {
        this.#items = [...items]
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem)
    }

    removeItem(itemToRemove) {
        const elementId = this.#items.indexOf(itemToRemove);
        this.#items.splice(elementId, 1)
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log('TASK-2:',storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log('TASK-2:',storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log('TASK-2:',storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log('TASK-2:', storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
console.log('End task-2'.padStart(30,'-'));
