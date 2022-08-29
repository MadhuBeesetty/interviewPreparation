
export const searchString = (string, arr = ['bobby', 'bob', 'boob', 'boss', 'boxer', 'rick', 'bobb'], output = [],i = 0) => {
  console.log('i am here 1');
  if (i === string.length) {
    console.log(output, 'i am here');
    return output;}
  let ans = [];
  for (var j = 0; j < arr.length; j++) {
    if (string[i] === arr[j][i]) {
      ans.push(arr[j]);
    };
  };
  output.push(ans);
  return searchString(string, ans, output, i + 1);
};
