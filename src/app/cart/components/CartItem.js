import React from "react";

import {inject, observer} from "mobx-react";
 
@inject("cartState")
@observer
export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: props.item.qty
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            qty: nextProps.item.qty
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
                        <button onClick={ ()=> {this.props.cartState
                                                .updateItem(item.id, this.state.qty)}} > 
                            Update
                        </button>

                    </td>

    <td> 
        <button 
        onClick={() => { this.props.cartState.removeItem(item.id) } } > 
            Delete
        </button>
    </td>

                </tr>
            )
    }
}