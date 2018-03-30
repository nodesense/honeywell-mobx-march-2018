import React from "react";

import {inject, observer} from "mobx-react";

import CartList from "./CartList";

@inject("cart", "order")
@observer
export default class Cart extends React.Component {
    
    componentDidMount() {
       // this.props.cart.loadItems();
    }

    empty = () => {
        this.props.cart.empty()
    }

    render() {
        return (
            <div>
                <button onClick={ this.empty } >
                    Empty
                </button>
              <h2>    Cart  - {this.props.cart.cartSize} - {this.props.cart.amount} - {this.props.order.offer.discount}</h2>
            
                <CartList />
            </div>
        )
    }
}