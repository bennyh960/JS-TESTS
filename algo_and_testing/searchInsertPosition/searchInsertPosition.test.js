const { test, expect } = require("@jest/globals");
const searchInsert = require("./searchInsertPosition.easy");

const arr = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 6, 8];

test(`Test 1: search 2 in ${arr}`, () => {
  expect(searchInsert(arr, 2)).toBe(1);
});

test(`Test 2: search 6 in ${arr}`, () => {
  expect(searchInsert(arr, 6)).toBe(5);
});

test(`Test 3: search 0 in ${arr}`, () => {
  expect(searchInsert(arr, 0)).toBe(0);
});

// odd length
test(`Test 4: search 0 in ${arr2}`, () => {
  expect(searchInsert(arr2, 0)).toBe(0);
});
test(`Test 5: search 5 in ${arr2}`, () => {
  expect(searchInsert(arr2, 5)).toBe(2);
});

test(`Test 6: search 7 in ${arr2}`, () => {
  expect(searchInsert(arr2, 7)).toBe(3);
});
