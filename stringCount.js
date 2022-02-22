const stringCount = (str, obj = {}, i = 0) => {
  if (i === str.length) return;
  if (obj[str[i]]) {
    obj[str[i]] = obj[str[i]] + 1;
  } else {
    obj[str[i]] = 1;
  }
  stringCount(str, obj, i + 1);
  return obj;
};

// console.log(stringCount("madhu"));
