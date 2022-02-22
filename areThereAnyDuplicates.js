// Frequency counter multiplePOinter
// implement a function called are there any duplicates which accepts a variable number of arguments and check whether there are any duplicates in those arguments.

function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
