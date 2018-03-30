import {observable, 
    action,
    computed, reaction
} from "mobx";

import cart from "./CartState";

class OrderState {

@observable customer = {
    name: '',
    email: '',
    address: {
        street: '',
        stateId: '',
        cityId: ''
    }
}

@observable offer = {
    discount: 0
}


    @action
    setOffer(itemsTotal) {
        console.log("Set offer ", cart.amount);
        this.offer.discount = Math.ceil(cart.amount * .10);
    }

  constructor() {

    reaction(
        () => {
            console.log("Reaction");
            return cart.quantity
        }, 
        (quantity, reaction) => {
            console.log("Reactions now", quantity);
            this.setOffer(quantity);
        }
    )
  }



}



export default new OrderState();