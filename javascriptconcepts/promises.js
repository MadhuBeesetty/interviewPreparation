// promise in javascript is just similar to a promise in a real life -- i promise that i do something on a even (resolve) -- or
// else i will do something when event fails (reject);

let p = new Promise((resolve, reject) => {
  let a = 1+1
  if(a == 2) {
    resolve('success')
  } else{
    reject('Failed')
  }
})

p.then((message) => {
  console.log(`this is resolve ${message}`)
}).catch((message) => {
  console.log(`this is reject ${message}`)
})

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

const promise1 = new Promise((resolve, reject) => {
  resolve('this is first promise')
})

const promise2 = new Promise((resolve, reject) => {
  resolve('this is second promise')
})

Promise.all([
  promise1,
  promise2
]).then((message));
