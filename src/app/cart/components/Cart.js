import React from "react";

import {inject, observer} from "mobx-react";

import CartList from "./CartList";

@inject("cartState")
@observer
export default class Cart extends React.Component {
    
    componentDidMount() {
       // this.props.cart.loadItems();
    }

    empty = () => {
        //TODO
        this.props.cartState.empty();
    }

    render() {
        return (
            <div>
                <button onClick={ this.empty } >
                    Empty
                </button>

                {/* todo */}

              <h2>    Cart  - </h2>
            
                <CartList />
            </div>
        )
    }
}