// given an two array of numbers, return true if the second array has numbers that are only square of the numbers in the first array.

// [1,2,3,4] [1,4,9,16]  true
// -------------------------

const arrSquare = (arr1, arr2) => {
  arr1.forEach(element => {
    const elementIndex = arr2.indexOf(element * element);
    if (elementIndex !== -1) {
      arr2.splice(elementIndex, 1)
    }
  });
  return arr2;
  //console.log(arr2);
};

console.log(arrSquare([2, 3, 4], [4, 9, 16]))

const numSquare = (arr1, arr2) => {

  if (arr1.length !== arr2.length) return false;

  let arr1Obj = {};
  for (let val of arr1) {
    if (arr1Obj[val]) {
      arr1Obj[val] = arr1Obj[val] + 1;
    } else {
      arr1Obj[val] = 1;
    }
  };

  let arr2Obj = {};
  for (let val of arr2) {
    if (arr2Obj[val]) {
      arr2Obj[val] = arr2Obj[val] + 1;
    } else {
      arr2Obj[val] = 1;
    }
  };

  console.log(arr1Obj, arr2Obj);
  for (key in arr1Obj) {
    if (arr1Obj[key]) {
      console.log(arr1Obj[key], arr2Obj[key * key]);
      if (arr1Obj[key] !== arr2Obj[key * key]) return false;
    } else {
      return false;
    }
  };

  return true;

}

console.log(numSquare([2, 3, 4, 4], [4, 9, 16, 16]))
