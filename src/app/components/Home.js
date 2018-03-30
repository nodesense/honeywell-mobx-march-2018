import React from "react";

import {Like} from "./Like";

// only for learning to use mobx with react
import {observable, autorun, action} from "mobx";

// observer uses autorun
// observer uses disposor
// automatically subscribe and unsubscribe
// calls render method
import {observer, inject} from "mobx-react";


//ES.NEXT decorator

// inject takes homeState from Provider (main.js)
// pass to home component as props
// this.props.homeState
@inject("homeState")
@observer
export class Home extends React.Component {

    constructor(props) {
        super(props);

       // stateless component
    }

    increment() {
         
       let actionFn =  action(() => {
            console.log("Home increment");

            this.props.homeState.likes++;
        });

        actionFn();

        

    }
  

    render() {
        console.log("Home render caled");

        return (
            <div>
                <h1>Home - {this.props.homeState.likes}</h1>

                <button  
                       onClick = {() => this.increment()}
                >
                 +1
                </button>

                <Like />
            </div>
        )
    }
}