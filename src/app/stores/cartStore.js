import {observable, 
        action, 
        computed,
        autorun,
        reaction} from "mobx";

class CartStore {

    constructor() {
        reaction ( () => this.items.length,
        (length) => {
            console.log("reaction called");
            this.discount = 100 - length * 5;
        } )
    }

    @observable items = [];

    @computed get price() {
        console.log("price called");
        let total = 0;
        for (let item of this.items) {
            total += item.price;
        }
        return total;
    }


    @computed get amount() {
        let total = 0;
        for (let item of this.items) {
            total += item.price;
        }
        return total;
    }

    @computed get priceInUsd() {

        console.log("price in usd called ");
        let total = 0;
        for (let item of this.items) {
            total += item.price;
        }
        return total/65;
    }

    @observable discount = 0;

    

    @computed get total() {
       return this.items.length;
    }



    @action setItems(items) {
        this.items = items;
    }

    @action removeItem(index) {
        this.items.splice(index, 1);
    }
}

let cartStore = new CartStore();

cartStore.setItems([
    {
     id: 1,
     name: 'product 1',
     price: 100
    },

    {
        id: 2,
        name: 'product 2',
        price: 200
    },

    {
        id: 3,
        name: 'product 3',
        price: 200
    }
])
export default cartStore;

setInterval( action( ()=> {
    cartStore.items.push( {id: Math.random(), name: "Test", price: 100})
}), 2000);


var numbers = observable([1,2,3]);
var sum = computed(() => numbers.reduce((a, b) => a + b, 0));

var disposer = autorun(() => console.log(sum.get()));
// prints '6'
numbers.push(4);
// prints '10'

disposer();
numbers.push(5);
// won't print anything, nor is `sum` re-evaluated