import React from "react";

import {NavLink, withRouter} from "react-router-dom";

import {inject, observer} from "mobx-react";

@withRouter
@inject("cartState", "homeState")
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
        
        console.log("Header Render");
        
        return (
            <div>
                <h1> {this.props.title} </h1>
                
                <NavLink to="/" 
                         exact
                         className="button"
                         activeClassName="success">
                         
                        Home [{this.props.homeState.likes}]
                </NavLink>

                 <NavLink to="/calc" 
                          
                          className="button"
                          activeClassName="success">
                          
                         Calc
                 </NavLink>
  

                <NavLink to="/cart" 
                          
                         className="button"
                         activeClassName="success">
                        Cart [ {this.props.cartState.quantity} ] 
                        RS  {this.props.cartState.amount} 
                        {/* amount and quantity */}
                </NavLink>

                <NavLink to="/products" 
                          
                         className="button"
                         activeClassName="success">
                        Products
                </NavLink>

                <NavLink to="/login" 
                          className="button"
                          activeClassName="success">
                         Login
                 </NavLink>
  
 
               

            </div>
        )
    }
}