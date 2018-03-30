import React from "react";

import {observer, inject} from "mobx-react";

import ProductWidget from "./ProductWidget";

@inject("productState", "cartState")
@observer
export default class ProductList extends React.Component {

    componentDidMount() {
        this.props.productState.getProducts();
    }

    render() {

        let list= this.props.productState
             .products.map ( product => (
                 <ProductWidget key={product.id} 
                                product={product}>
                    {product.name}
                 </ProductWidget>
             ))

        return (
             
            <div>
                <h2>Cart Size [{this.props.cartState.quantity}] </h2>
                <div className="flex two">
                    {list}
                </div>
            </div>

        )
    }
}