/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * @description Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Optional write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */
const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  // target out of num range
  if (target > nums[right]) {
    return right + 1;
  }
  if (target < nums[0]) {
    return 0;
  }

  while (left <= right) {
    mid = parseInt((left + right) / 2);
    target < nums[mid] ? (right = mid - 1) : (left = mid + 1);
    if (target === nums[mid]) {
      // console.log("here");
      return mid;
    }
  }

  // console.log("target not in nums but in range");
  return mid;
};

module.exports = searchInsert;

// const arr = [1, 2, 3, 4, 5];
// const arr = [2, 4, 6, 8];
// console.log(searchInsert(arr, 7));
// console.log(searchInsert(arr, 3));
