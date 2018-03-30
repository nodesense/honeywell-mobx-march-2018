import React from "react";

import {inject, observer} from "mobx-react";
 
export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            qty: 0
        })
    }

    changeHandler = (e) => {
        this.setState({
            qty: parseInt(e.target.value) || 0
        })
    }
 

    render() {
           
            let {item} = this.props;
            let props = this.props;

            console.log("at cart ", item);

            //es5 let item = props.item

            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                         <input name="quantity" 
                                value={this.state.qty}
                                onChange={this.changeHandler}
                            />
                          
                          </td>

                    <td>
                        {item.price * item.qty}
                    </td>
                          
                    <td> 
                        <button onClick={ ()=> {}} > 
                            Update
                        </button>

                    </td>

                    <td> 
                        <button onClick={() => {} } > 
                            Delete
                        </button>
                    </td>

                </tr>
            )
    }
}