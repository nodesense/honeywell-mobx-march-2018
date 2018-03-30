import {observable, 
    action,
    computed
} from "mobx";
 
class CalculatorState {

constructor() {
     
    this.numbers = [];
}


@observable numbers = [];

@computed  get sum () {
        let s = 0;
        for (let n of this.numbers) {
            s += n;
        }
        return s;
}


@computed  get avg () {
    let s = 0;
    for (let n of this.numbers) {
        s += n;
    }
    return s / (this.numbers.length || 1);
}

@action add (n) {
    this.numbers.push(n);       
}

@action remove(n) {
    this.numbers = this.items.filter(m => m != n);
}

@action reset() {
    this.numbers = [];        
}
  
}


export default new CalculatorState();