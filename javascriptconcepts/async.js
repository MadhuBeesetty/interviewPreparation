// javascript is a synchronous language -- javascript reads one line at time and execute it.
// when javascript language sees a async key word we breaks out of syncronous code and starts a seperate thread.
// when we do an async await: we let the code do something and wait for a responce whlie the rest of the executes normally

let a = 1;
let b = 2;

setTimeout(() => {
  console.log(a, b);
}, 100);

a = 10;
b = 20;

console.log(a);
console.log(b);
