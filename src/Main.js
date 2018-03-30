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

import homeState from "./app/state/HomeState";
import cartState 
        from "./app/cart/state/CartState";


 
let store = {
    homeState: homeState,
    cartState: cartState
}

// we are sending store keys and values
// to component chains
render(<Provider {...store} >
        <Routes />
</Provider> ,
       document.getElementById("root"));
       