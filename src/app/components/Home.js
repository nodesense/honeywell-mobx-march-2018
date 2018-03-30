import React from "react";

import {Like} from "./Like";

// throw away code
// only for learning to use mobx with react
import {observable, autorun} from "mobx";

let homeState = observable({
    likes: 1000
});


export class Home extends React.Component {

    constructor(props) {
        super(props);

       // stateless component
    }

    increment() {
         

        console.log("Home increment");

        homeState.likes++;

    }
 
    componentDidMount() {
        console.log("Home mount");

        this.disposer = autorun( () => {
            console.log("autorun likes ", 
                        homeState.likes);
            //calls render method
             
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        console.log("Home unmount");
        this.disposer();
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