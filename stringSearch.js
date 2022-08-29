//['bobby', 'bob', 'boss', 'boxer','rick', 'bobb'] ---> input array from data base ||| "bobby" ----> search string
//['bobby', 'bob', 'boss', 'boxer', 'bobb'] - b;
//['bobby', 'bob', 'boss', 'boxer', 'bobb'] - bo;
//['bobby', 'bob', 'bobb'] - bob;
//['bobby','bobb'] - bobb;
//['bobby'] - bobby;

export const searchString = (arr, string, output = [], i = 0) => {
  if (i === string.length) return output;
  let ans = [];
  for (var j = 0; j < arr.length; j++) {
    if (string[i] === arr[j][i]) {
      ans.push(arr[j]);
    };
  };
  output.push(ans);
  return searchString(ans, string, output, i + 1,);
};

// console.log(searchString(['bobby', 'bob', 'boob', 'boss', 'boxer', 'rick', 'bobb'], 'bobby'));
