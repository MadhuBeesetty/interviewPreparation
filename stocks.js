const stockprice = [1, 3, 2, 3];

const earlyStockPrize = (arr) => {
  let newArr = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length - 1; j++) {
      let arr1 = [...arr];
      let val1 = (Math.floor(arr1.slice(0, j).reduce((a, b) => a + b, 0) / arr1.slice(0, j).length));
      // console.log( Math.floor(arr1.slice(0, j).reduce((a, b) => a + b, 0) / arr1.slice(0, j).length));
      let arr2 = [...arr];
      let val2 = (Math.floor(arr2.slice(j, arr.length - 1).reduce((a, b) => a + b, 0) / arr2.slice(j, arr.length - 1).length));
      newArr.push(Math.min(val1, val2));
     // console.log(arr1, arr2, arr2.slice(j, arr.length - 1), arr2.slice(j, arr.length - 1).reduce((a, b) => a + b, 0), i, j, val1, val2);
    }
  }
  // console.log(newArr);
}

earlyStockPrize(stockprice);
