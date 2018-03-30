
class Product {
    constructor() {
        this._name = 'Product 1';
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let p = new Product()
p.name = 'Nexus';
console.log(p.name);