//(awesome, awesome);

// const Anagram = (string1, string2) => {
// if(string1.length !== string2.length) return false;
// let obj1 = {};
// let obj2 = {};
// for(let key in string1){
//   if(!obj1[string1[key]]){
// obj1[string1[key]] = 1;
//   } else {
//     obj1[string1[key]] = obj1[string1[key]] + 1;
//   }
// };

// for(let key in string2){
//   if(!obj2[string2[key]]){
// obj2[string2[key]] = 1;
//   } else {
//     obj2[string2[key]] = obj2[string2[key]] + 1;
//   }
// };

// for(let val in string1){
//   if(obj1[val] !== obj2[val]) return false;
// }

// return true;

// }

const validAnagram = (string1, string2) => {
  // add whatever parameters you deem necessary - good luck!
  const creObj = (string) => {
    let obj = {};
    for (var i = 0; i < string.length; i++) {
      if (!obj[string[i]]) {
        obj[string[i]] = 1
      } else {
        obj[string[i]] = obj[string[i]] + 1;
      }
    }
    return obj;
  };
  const obj1 = creObj(string1);
  const obj2 = creObj(string2);
  console.log(obj1, obj2);
  for (var keys in obj1) {
    if (obj1[keys] !== obj2[keys]) return false;
  }
  return true;
}

console.log(validAnagram('awesome', 'awesome'));
console.log(validAnagram('rat', 'car'));
