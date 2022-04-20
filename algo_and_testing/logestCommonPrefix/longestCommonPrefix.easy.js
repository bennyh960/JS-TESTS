/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  // find shortest word
  strs.sort();
  const shortestLength = strs[0].length;

  // define length variable
  const length = strs.length;

  let idx = 0;
  for (let i = 0; i < shortestLength; i++) {
    if (strs[0][i] === strs[length - 1][i]) {
      for (let j = 1; j < length - 1; j++) {
        if (strs[0][i] === strs[j][i]) idx++;
      }
    }
  }

  if (idx === 0) {
    return "";
  }

  let prefix = strs[0].substring(0, idx);
  return prefix;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["a", "a", "a"]));

module.exports = longestCommonPrefix;
