// given an array  and a value, return the index of value in the array, if the value is not found, return -1

function linearSearch(arr, value, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === value) return i;
  return linearSearch(arr, value, i + 1);
  // add whatever parameters you deem necessary - good luck!
}
