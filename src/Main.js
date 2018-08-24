//bootstrapping 

//bring react into html

import React from "react";
import {render} from "react-dom";

//import {App} from "./app/App";

//app route configuration
import Routes from "./app/Routes";

// Provider shall ensure that 
// pass the states to components
// through injection
import {Provider} from "mobx-react";

// Use Strict mode
// ensure that changes happens only
// in action method

import {configure} from "mobx";
configure({enforceActions: true});


import homeState from "./app/state/HomeState";
import cartState 
        from "./app/cart/state/CartState";

import productState 
        from "./app/product/state/ProductState"

import authState 
        from './app/auth/state/AuthState';

let store = {
    homeState: homeState,
    cartState: cartState,
    productState: productState,
    authState: authState
}


// we are sending store keys and values
// to component chains
// to inject 
render(<Provider {...store} >
        <Routes />
</Provider> ,
       document.getElementById("root"));
       