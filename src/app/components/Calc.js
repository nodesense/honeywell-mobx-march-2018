
import React, {Component} from "react";
import PropTypes from "prop-types";

import {inject, observer} from "mobx-react"


@inject("calculator")
@observer
export default class Calculator extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    addNumber = () => {
        this.props
        .calculator
        .add(Math.ceil(Math.random() * 1000));
    }
    
    render() {
        console.log("calc render");
        let {numbers, sum, avg} = this.props.calculator;

        return (
            <div> 
            <h2>Calculator</h2>
            
            <button onClick={this.addNumber}>
                 Add
            </button>

            <h2>Sum : {sum} </h2>
            <h2>Avg : {avg} </h2>



            <ul>
                {
                    numbers.map( (n, i) => (
                        <li key={i}>
                            {n}
                        </li>
                    ))
                }
            </ul>
            </div>
        )
    }
} 


Calculator.defaultProps = {
    
}

Calculator.propTypes = {
    
}