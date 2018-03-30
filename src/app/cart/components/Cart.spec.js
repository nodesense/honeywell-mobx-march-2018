import {  mount } from 'enzyme'
import React from "react"

import Cart from "./Cart";
 
    
describe ("Test Product list component ", () => {

    let  wrapper = null;
    beforeEach( (done)=> {
        // mocks
        let cartState  = {
            items: [],
            quantity: 0,
            amount: 0
        }

        wrapper = mount(<Cart cartState={cartState}  />)
        done();
    })

    it("Test product component ", () => {
        
          console.log(wrapper.html());
          
          expect(wrapper.html()).toContain("100");

           })
})