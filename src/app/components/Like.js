import React from "react";
import PropTypes from "prop-types";

import {observer, inject} from "mobx-react";


@inject("homeState") // take from Provider
@observer // refresh, subscribe, disposer
export class Like extends React.Component {
 
    constructor(props) {
        super(props);
        console.log("Like component created "); 
    }
 
 
    render() {
        console.log("like render called");

        return (
            <div>
                <h1>Like - {this.props.homeState.likes} </h1>

                <button onClick={ ()=> {this.props.homeState.likes++} }>
                    +1
                </button>

                 <button onClick={ ()=> {this.props.homeState.likes--} }>
                    -1
                </button>
            </div>
        )
    }
}
 