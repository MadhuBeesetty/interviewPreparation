//[-4,-3,-2,-1,0,1,2,5]
// given a sorted array return numbers whose sum is zero;

const multiplePOinter = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) { return [arr[right], arr[left]] } else if (sum > 0) {
      right--;
    } else {
      left++
    };
  };
};

console.log(multiplePOinter([-4, -3, -2, -1, 0, 1, 2, 5]));
