/**
 * @param {number} x
 * @return {boolean}
 * 
 * @description {Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.} 
 */

const palindromeNumber = function (x) {
  const tempArr = (x + "").split("");
  const length = tempArr.length;
  for (let i = 0; i < length; i++) {
    if (tempArr[i] !== tempArr[length - 1 - i]) return false;
  }
  return true;
};

module.exports = palindromeNumber;

// console.log(palindromeNumber(155));//false
// console.log(palindromeNumber(555));//true
// console.log(palindromeNumber(151));//true
// console.log(palindromeNumber(1551));//true
// console.log(palindromeNumber(987789));/true
// console.log(palindromeNumber(-121)); //false
