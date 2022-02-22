// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

const power = (a, b) => {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

// power(2,4); -> 16
// power(2,3); -> 8
// power(2,2); -> 4
// power(2,1); -> 2
// power(2,0); -> 1

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
