import {
        observable, 
        computed
        } from "mobx";

class CartState {
    // items is observable, get, setter method
    @observable items = [];


    // item{id, name, price, qty}

    addItem(item) {
        // todo: 
        this.items.push(item);
    }

    removeItem(id) {

    }

    updateItem(id, qty) {

    }

    empty() {

    }
}

export default new CartState();