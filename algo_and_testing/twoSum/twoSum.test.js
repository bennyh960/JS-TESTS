const { test, expect } = require("@jest/globals");
const twoSum = require("./twoSum.easy");

test("Test 1:", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
test("Test 2:", () => {
  expect(twoSum([3, 1, 4], 7)).toEqual([0, 2]);
});
test("Test 1:", () => {
  expect(twoSum([6, 1, 1, 6, 1, 2], 8)).toEqual([0, 5]);
});
