const { test, expect } = require("@jest/globals");
const romanToInt = require("./romanToInteger.easy");

test("Example 1 : III", () => {
  expect(romanToInt("III")).toBe(3);
});
test("Example 2 : LVIII", () => {
  expect(romanToInt("LVIII")).toBe(58);
});
test("Example 3 : MCMXCIV", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
