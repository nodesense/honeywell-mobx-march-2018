import {observable, 
        action,
        computed
    } from "mobx";

import generate from "../mock-data";

class CartState {
    @observable items = [];

    loadItems() {
        this.items = generate();
        console.log(this.items);
    }

    //derived data
    @computed get cartSize () {
        console.log("cart size called");
        return this.items.length;
    }

    @computed get quantity () {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total +=  this.items[i].qty;
        }

        return total;
    }
    
    @computed get amount () {
        let sum = 0;
        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i].price * this.items[i].qty;
        }

        return sum;
    }

    @action addItem(product) {
        let index = this.items.findIndex(item => item.id == product.id);

        if (index >= 0) {
            let item = this.items[index];
            item.qty++;
            return;
        }

        this.items.push({
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1
        })
    }


    @action removeItem(id) {
        this.items.splice(this.items.findIndex( item => item.id == id ) , 1);
    }


    @action empty() {
        this.items = []
    }

    @action updateItem(id, qty) {
        console.log("update item", id, qty);

        let index = this.items.findIndex(item => item.id == id);

        if (index >= 0) {
            let item = this.items[index];
            item.qty = qty;
        }
    }
}



export default new CartState();