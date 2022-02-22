// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (num, i = 1) => {
  if (i === num.length) return (num[num.length - 1]);
  num[i] = num[i] * num[i - 1];
  return productOfArray(num, i + 1);
};


console.log(productOfArray([1, 2, 3]));
