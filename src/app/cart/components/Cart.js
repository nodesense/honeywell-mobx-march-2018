import React from "react";

import {inject, observer} from "mobx-react";

import CartList from "./CartList";

export default class Cart extends React.Component {
    
    componentDidMount() {
       // this.props.cart.loadItems();
    }

    empty = () => {
        //TODO
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