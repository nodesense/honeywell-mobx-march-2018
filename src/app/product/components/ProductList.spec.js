import {  mount } from 'enzyme'
import React from "react"

import ProductList from "./ProductList";
 
import productState from "../ProductState";

import restful from "../../core/Restful";

restful.getJson = function() {
    return Promise.resolve([{
        id: 1,
        name: "p1",
        price: 100
    }])
}
 
describe ("Test Product list component ", () => {

    let  wrapper = null;
    beforeEach( (done)=> {
        wrapper = mount(<ProductList productState={ProductList} cart={ {cartSize: 12} } />)
        done();
    })

    it("Test product component ", () => {
        
          console.log(wrapper.html());
          
          expect(wrapper.html()).toContain("100");

           })
})