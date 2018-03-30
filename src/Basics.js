import {observable, autorun, trace, getDependencyTree} from "mobx";

let account = observable({
    name: 'Krish',
    balance: 100
});

// To update existing observable, we should use set

  
// let disposer = autorun( () => {
//     console.log(" Balance changed ", account.balance);
//     trace();
// })
 
// let counter = 0;
 
// setInterval ( () => {
//     account.balance = "test" + Math.random();
//     console.log("account ", account.balance)
//     counter++

//     if (counter == 5) disposer();
      
// }, 2000);

