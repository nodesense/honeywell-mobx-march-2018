import React from "react";

import {inject, observer} from "mobx-react";

@inject("cart")
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

    removeItem = (id) => {
        this.props.cart.removeItem(id);
    }

    updateItem = (id, qty) => {
        this.props.cart.updateItem(id, qty);
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
                          

                          Qty: {item.qty}

                          </td>

                    <td>
                        {item.price * item.qty}
                    </td>
                          
                    <td> 
                        <button onClick={ ()=> this.updateItem(item.id, this.state.qty)} > 
                            Update
                        </button>

                    </td>

                    <td> 
                        <button onClick={() => this.removeItem(item.id)} > 
                            Delete
                        </button>
                    </td>

                </tr>
            )
    }
}