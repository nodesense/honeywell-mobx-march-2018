import React from "react";

import {BrowserRouter as Router, Route, Switch}
    from "react-router-dom";

import {App} from "./App";


import {Home} from "./components/Home"; 

import Cart from "./cart/components/Cart";

import ProductRoutes from "./product/Routes";

import Login from "./auth/components/Login";

import AuthRoute from "./auth/components/AuthRoute";
import Calc from "./components/Calc";

//Route config

export default function Routes () {
    return (
    <Router>
        <App>
            <Switch>


            <Route path="/" 
                   exact
                        component={Home} />
 
            <Route path="/cart"
                       component={Cart} />

            <Route path="/products"
                       component={ProductRoutes} />

            
            <Route path="/calc"
                       component={Calc} />



            <Route path="/login"
                       component={Login} />

            </Switch>
        </App>
    </Router>
    )
}