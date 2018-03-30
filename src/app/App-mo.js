
import React, {Component} from "react"; //from node_modules

import {Header} from "./components/Header";
import {Home} from "./components/Home";

import Cart from "./cart/components/Cart";

import {Footer} from "./components/Footer";

export class App extends Component {

    constructor() {
        super();

        this.show = true;
    }


    // componentDidMount() {
    //     setTimeout( ()=> {
    //         console.log("app comp mounted");
    //         this.show = !this.show;
    //         //calls render internally
    //         this.forceUpdate();
    //     }, 3000);
    // }

    //returns a view
    // <h1 id="header">React App</h1>
    render() {

        return (
            <div>
                
                {this.show && <Header title="React App"  />}

                <Home />

                <Footer year={2017}  />
            </div>
        )
       // return React.createElement("h1", {id: "header"},
       //                              "React App 2");
    }
}