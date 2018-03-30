import React from "react";

import {observer, inject} from "mobx-react";

@inject("cart")
@observer
export default class Cart extends React.Component {
 

    render() {
        let list = this.props.cart.items.map ( (item, i) => (
            <li key={item.id}> 
                
                {item.name} 

                <button onClick={() => this.props.cart.removeItem(i) }>
                    Delete
                </button>

            </li>
        ))

        return (
            <div>
                <h1>Cart - {this.props.cart.total}</h1>
                <h1>Cart - {this.props.cart.price}</h1>
                <h1>Cart - normalPrice {this.props.cart.normalPrice}</h1>

                
                <h1>Discount - {this.props.cart.discount}</h1>

                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}