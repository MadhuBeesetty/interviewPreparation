// implement a dynamic programming to claculate minimum cost required to climb all step.
// steps are represented by a array
// you can climb one step or two steps at a time.

const recfun = (arr) => {
  for (var i = 2; i < arr.length; i++) {
    arr[i] = Math.min(arr[i - 1] + arr[i], arr[i - 2] + arr[i]);
  };
  console.log(arr, arr.length, arr[arr.length - 1], arr[arr.length - 2]);
  return Math.min(arr[arr.lenght - 1], arr[arr.lenght - 2]);
}

// console.log(recfun([1, 10, 20, 15, 3, 6, 9, 8]));
// console.log(recfun([1, 10, 21, 25, 24, 30, 33, 38]));

const recDyna = (arr, i = 2) => {
  if (i === arr.length) return Math.min(arr[arr.length - 1], arr[arr.length - 2]);
  arr[i] = Math.min(arr[i - 1] + arr[i], arr[i - 2] + arr[i]);
  return recDyna(arr, i + 1);
};

console.log(recDyna([1, 10, 20, 15, 3, 6, 9, 8]));
