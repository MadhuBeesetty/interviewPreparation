// given a n*n 2d array, rotate the array by 90 degrees.
// [[1,2,3],[4,5,6],[7,8,9]] -> [[7,4,1],[8,5,2],[9,6,3]]

const rotateArray = (arr) => {
  let output = [];
  for (var j = 0; j < arr.length; j++) {
    let intArr = [];
    for (var i = arr[0].length - 1; i >= 0; i--) {
      intArr.push(arr[i][j]);
      if (i === 0) output.push(intArr);
    };
  }
  return output;
};

console.log(rotateArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
