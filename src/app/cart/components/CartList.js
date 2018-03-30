import React from "react";
import {inject, observer} from "mobx-react";

import CartItem from "./CartItem";

 function CartList(props) {
  
    //TODO: 
    let items = [];
    
    

    return (
        <div>
            Cart List 
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
                {
                    items.map ( item => (
                        <CartItem item={item}  
                                    key={item.id}
                            />
                    ))
                }

                <tr>
                    <td colSpan="2">
                        <h4>Grand Total</h4>
                    </td>
                    <td >
                        <h4> items</h4>
                    </td>
                    <td colSpan="3">
                        <h4>Amount </h4>
                    </td>
                    
                </tr>
                </tbody>
            </table>
        </div>
    )
}

//FIXME
export default CartList;

// export default inject("cart") 
//                  (observer(CartList)) 