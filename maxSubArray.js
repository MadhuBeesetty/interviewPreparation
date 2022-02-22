// sliding window
// maximum sub array, return the maximum of a sub array when given an array.

const maxSubArray = (arr, subArray, max = 0, i = 0, j = subArray) => {
  if (j === arr.length) return max;
  const sum = (total = 0) => {
    for (i < j; i = i + 1;) {
      total = total + arr[i];
    }
    if (total > max) max = total;
  };
  sum();
  maxSubArray(arr, max, i + 1, j + 1);
};

console.log(maxSubArray([2, 6, 9, 8, 2, 1, 5, 6, 7], 3));
