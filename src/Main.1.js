//bootstrapping 

//bring react into html

import React from "react";
import {render} from "react-dom";

//import {App} from "./app/App";

//app route configuration
import Routes from "./app/Routes";

// import "./Basics";
// import "./Learn";


//import { useStrict } from "mobx";

//enfore action method to adopt Flux architecture
//useStrict(true);


console.log("PRODUCTION ", PRODUCTION);

import cartState from "./app/cart/state/CartState";
import orderState from "./app/cart/state/OrderState";

import productState from "./app/product/state/ProductState";
import authState from "./app/auth/state/AuthState";

import calculatorState from "./app/state/Calculator";

//cartState.loadItems();
 
let store = {
    cart: cartState,
    productState: productState,
    authState: authState,
    calculator: calculatorState,
    order: orderState
} 


import {Provider} from "mobx-react";

render(<Provider {...store} >
            <Routes />
       </Provider>,
       document.getElementById("root"));
       