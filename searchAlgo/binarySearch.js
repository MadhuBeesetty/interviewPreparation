// given a sorted array and a value verify if the arr has the given value.

// [5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,88], 14; ans is 5;

const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let midPoint = Math.round(arr.length / 2);
  while (left !== right) {
    if (arr[left] === value) return left;
    if (arr[right] === value) return right;
    if (arr[midPoint] === value) return midPoint;
    console.log(arr[left], arr[right], right, arr[midPoint]);
    if (arr[midPoint] > value) {
      right = midPoint;
      midPoint = Math.round((left + right) / 2);
    } else {
      left = midPoint;
      midPoint = Math.round((left + right) / 2);
    };
  }
  return "value not found";
}

console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 88], 14));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 88], 64));
