// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

const repeatedSubstringPattern = (string) => {
  let obj = {};
  for (var i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1
    } else {
      obj[string[i]] = obj[string[i]] + 1
    }
  };
  Object.values(obj).forEach((e) => e === )
}
