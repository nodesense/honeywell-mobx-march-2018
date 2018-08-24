import {
        observable, 
        computed,
        action, // strict mode,
        reaction
        } from "mobx";
 
export class CartItem {
    @observable id = 0;
    @observable name = "";
    @observable price = 0;
    @observable qty = 0;

    constructor(id, name, price, qty) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
}


class CartState {
    // items is observable, get, setter method
    @observable items = [ new CartItem(1,'Product 1',  100, 1),
                            new CartItem(2,'Product 2',  200, 2),
                            new CartItem(3,'Product 3',  300, 3),
                        ];

    constructor() {
        // reaction(monitored function
                    //effect function)
        
        reaction( ()=> this.items.length,
                  (itemsLength) => {
                        console.log("Reaction ", itemsLength)
                        
                  });
    }

    @computed get amount() {
        let total = 0;
        for (let item of this.items) {
            total += item.qty * item.price;
        }

        return total;
    }

    @computed get quantity() {
        let total = 0;
        for (let item of this.items) {
            total += item.qty;
        }

        return total;
    }
    
    // item{id, name, price, qty}

    @action
    addItem(product) {
        let index = this
        .items
        .findIndex ( item => item.id == product.id);

        if (index >= 0) {
            let item = this.items[index]; 
            item.qty++;
            return;
        }
       

        let item =  new CartItem(product.id,product.name,  product.price, 1);
        this.items.push(item);
    }

     
    // actions
    @action
    removeItem(id) {
        let index = this
                    .items
                    .findIndex ( item => item.id == id);
        this.items.splice(index, 1);
    }
 
    @action
    updateItem(id, qty) {
        let index = this
        .items
        .findIndex ( item => item.id == id);

        // TODO: boundary condition
        let item = this.items[index]; 
        item.qty = qty;

    }

    @action
    empty() {
        this.items = [];
    }
}

export default new CartState();