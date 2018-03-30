import React from "react";
import {inject, observer} from "mobx-react";

import CartItem from "./CartItem";

 function CartList(props) {
   let {items, amount} = props.cart;
    
   let list = items.map ( item => (
       <CartItem item={item}  
                 key={item.id}
        />
   ))

    return (
        <div>
            Cart List {props.cart.amount}
            <table >
                <tbody>
                <tr>
                    <th> Name </th>
                    <th> Price </th>
                    <th> Quantity </th>
                    <th> Total </th>
                    <th> Update </th>
                    <th> Delete </th>
                </tr>

                {list}

                <tr>
                    <td colSpan="2">
                        <h4>Grand Total</h4>
                    </td>
                    <td >
                        <h4>{props.cart.quantity} items</h4>
                    </td>
                    <td colSpan="3">
                        <h4>{props.cart.amount}</h4>
                    </td>
                    
                </tr>
                </tbody>
            </table>
        </div>
    )
}

 export default inject("cart") 
                 (observer(CartList)) 