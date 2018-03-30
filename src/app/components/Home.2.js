import React from "react";

import {Like} from "./Like";

// only for learning to use mobx with react
import {observable, autorun} from "mobx";

//FIXME: inject homeState into Home component
// using provider
import homeState from "../state/HomeState";

// observer uses autorun
// observer uses disposor
// automatically subscribe and unsubscribe
// calls render method
import {observer} from "mobx-react";


//ES.NEXT decorator

@observer
export class Home extends React.Component {

    constructor(props) {
        super(props);

       // stateless component
    }

    increment() {
         

        console.log("Home increment");

        homeState.likes++;

    }
  

    render() {
        console.log("Home render caled");

        return (
            <div>
                <h1>Home - {homeState.likes}</h1>

                <button  
                       onClick = {() => this.increment()}
                >
                 +1
                </button>
            </div>
        )
    }
}