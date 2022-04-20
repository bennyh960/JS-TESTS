const { test, expect } = require("@jest/globals");
const palindromeNumber = require("./palindromeNumber.easy");

test("Example 1 : 121", () => {
  expect(palindromeNumber(121)).toBe(true);
});

test("Example 2: -121", () => {
  expect(palindromeNumber(-121)).toBe(false);
});

test("Example 3: 111 ", () => {
  expect(palindromeNumber(111)).toBe(true);
});
