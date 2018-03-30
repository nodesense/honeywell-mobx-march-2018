import React from "react";

import {NavLink, withRouter} from "react-router-dom";

import {inject, observer} from "mobx-react";

@inject("cart", "authState", "calculator")
@withRouter
@observer
export class Header extends React.Component {
    
    constructor(props) {
        super(props); //call base constructor

        console.log(props.title);
    }

    //callbacks
    //before loading view
    //called before render method
    componentWillMount() {
        console.log("Component will mount");
    }

    //called after loading view
    //called after calling render method first time
    //view ready
    componentDidMount() {
        console.log("component did mount");
    }

    //called just before destroying component
    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        
        return (
            <div>
                <h1> {this.props.title} </h1>
                
                <NavLink to="/" 
                         exact
                         className="button"
                         activeClassName="success">
                         
                        Home
                </NavLink>

               

                 <NavLink to="/calc" 
                          
                          className="button"
                          activeClassName="success">
                          
                         Calc
                 </NavLink>
 


                <NavLink to="/cart" 
                          
                         className="button"
                         activeClassName="success">
                        Cart [{this.props.cart.cartSize}]
                        - RS {this.props.cart.amount}
                </NavLink>

                <NavLink to="/products" 
                          
                         className="button"
                         activeClassName="success">
                        Products
                </NavLink>

                {
                    this.props.authState.authenticated ? (
                            <button onClick={() => this.props.authState.logout()} >
                                Logout
                            </button>
                       ) : (
                            <NavLink to="/login" 
                                    className="button"
                                    activeClassName="success">
                                    Login
                                </NavLink>
                        )
                } 

               

            </div>
        )
    }
}