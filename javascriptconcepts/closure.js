// const a = "apple";

// const bfun = () => {
//   console.log(a);
// }

// bfun();



// ------------------------

// const fun1 = (variable1) => {
//   return ((variable2) => {
//     console.log('outer fun gives this value', variable1);
//     console.log('inner fun gives this value', variable2);
//   })
// }

// const funcall = fun1('this is one');
// console.log(funcall, 'this is funcall');
// funcall('this is two');

//------------------------------

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
