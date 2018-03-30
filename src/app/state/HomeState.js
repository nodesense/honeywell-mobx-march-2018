import {observable} from "mobx";

let homeState = observable({
    likes: 1000
});

export default homeState;