import {  mount } from 'enzyme'
import React from "react"

import ProductList from "./ProductList";
 
 
import restful from "../../core/Restful";

restful.getJson = function() {
    return Promise.resolve([{
        id: 1,
        name: "p1",
        price: 100
    }])
}

let productState = {
    products : []
}
 
describe ("Test Product list component ", () => {

    let  wrapper = null;
    beforeEach( (done)=> {
        wrapper = mount(<ProductList productState={productState} 
                                     cartState={ {quantity: 12} } />)
        done();
    })

    it("Test product component ", () => {
        
          console.log(wrapper.html());
          
          expect(wrapper.html()).toContain("100");

           })
})