console.log ("Mobx Learn")

import {observable, autorun, trace} from "mobx";


// user is observable
let user = observable({
    name: 'Karthik',
    age: 30,
    address: {
        state: 'KA'
    }
})

// observation/subscription
// notification when observable changed

// susbcription
// take callback function
// is called only when user.name change
autorun ( () => {
    // getter
    let fullName = user.name;
    let state = user.address.state;
    console.log("Autorun User name ", user.name, user.address);
    // trace shall print all the observed properties
    trace();
})

// autorun methods returns disposer method
// disposer function to be called to stop autorun
let disposerFn = autorun( () => {
    console.log("Auto run User age ", user.age);
});


console.log("User ", user);

// name is getter function
console.log("User name ", user.name);

// calls setter method
user.name = 'Nila';

// age is not subscribed in autorun
user.age = 31;

// getter
console.log("User name ", user.name);

setInterval( () => {
    user.age++;
    console.log("In timer User age ++ ", user.age);

    if (user.age >= 40) {
        // stop the autorun method only for age
        disposerFn();
    }
}, 5000);
