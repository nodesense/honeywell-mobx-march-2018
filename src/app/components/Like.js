import React from "react";
import PropTypes from "prop-types";

export class Like extends React.Component {
 
    constructor(props, context) {
        super(props);
        console.log("Like component created ");
        console.log("Like context ", context);
    }

    //called many times based on  parent render method
    componentWillReceiveProps(nextProps) {
        console.log("current ", this.props);
        console.log("next ", nextProps);
    }

    //decide whethere react can call render or not
    shouldComponentUpdate(nextProps, nextState) {
        console.log("next : should update ", nextProps);
        console.log("current ", this.props);
        
        if (nextProps.likes % 5 == 0)
            return true; //calls render
 
        return false;//do not call render
    }
 
    render() {
        console.log("like render called");

        return (
            <div>
                <h1>Like - {this.props.likes}</h1>

                <button onClick={ ()=> this.props.onIncr() }>
                    +1
                </button>
            </div>
        )
    }
}

Like.contextTypes = {
    appTitle: PropTypes.string
}