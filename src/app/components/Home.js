import React from "react";

import {Like} from "./Like";

export class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            likes: 1000
        }
    }

    increment() {
         

        console.log("Home increment");

        //calls render method
        this.setState({
            likes: this.state.likes + 1
        })

    }

    componentWillMount() {
        //this.setState() //view is not ready,
    }

    render() {
        console.log("Home render caled");

        return (
            <div>
                <h1>Home - {this.state.likes}</h1>

                <Like likes={this.state.likes}
                       onIncr = {() => this.increment()}
                />
            </div>
        )
    }
}