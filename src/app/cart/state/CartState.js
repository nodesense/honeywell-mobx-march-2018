import {
        observable, 
        computed,
        action, // strict mode,
        reaction
        } from "mobx";

class CartState {
    // items is observable, get, setter method
    @observable items = [ {id: 1, name: 'Product 1', price: 100, qty: 1},
                          {id: 2, name: 'Product 2', price: 200, qty: 2}  ,
                          {id: 3, name: 'Product 3', price: 300, qty: 3} 
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
       

        let item = {
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1
        }
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