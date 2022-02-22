// [1,1,1,1,1,2]

//return number of unique values in an array --  below solution is most time and space complex solution.

const countUnique = (arr, i = 0, j = 1) => {
  if (j === arr.length) return arr[i];
  if (arr[i] !== arr[j]) {
    arr[i] = i + 1;
    return countUnique(arr, i = j, j = j + 1)
  } else {
    return countUnique(arr, i, j = j + 1);
  }
};

console.log(countUnique([1, 1, 1, 1, 1, 2]))
console.log(countUnique([1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9, 9, 9,]))
