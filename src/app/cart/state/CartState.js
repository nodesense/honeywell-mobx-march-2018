import {
        observable, 
        computed
        } from "mobx";

class CartState {
    // items is observable, get, setter method
    @observable items = [ {id: 1, name: 'Product 1', price: 100, qty: 1},
                          {id: 2, name: 'Product 2', price: 200, qty: 2}  ,
                          {id: 3, name: 'Product 3', price: 300, qty: 3} 
                        ];



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

    addItem(item) {
        // todo: 
        this.items.push(item);
    }

    removeItem(id) {
        let index = this
                    .items
                    .findIndex ( item => item.id == id);
        this.items.splice(index, 1);
    }

    updateItem(id, qty) {
        let index = this
        .items
        .findIndex ( item => item.id == id);

        // TODO: boundary condition
        let item = this.items[index]; 
        item.qty = qty;

    }

    empty() {
        this.items = [];
    }
}

export default new CartState();