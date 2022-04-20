const { test, expect } = require("@jest/globals");
const bracketsValidtion = require("./validParentheses.easy");

test("Test 1:", () => {
  expect(bracketsValidtion("({[]})")).toBe(true);
});
test("Test 2:", () => {
  expect(bracketsValidtion("(){}[]{}{}")).toBe(true);
});
test("Test 3:", () => {
  expect(bracketsValidtion("(){}]{}{}")).toBe(false);
});
test("Test 4:", () => {
  expect(bracketsValidtion("()}")).toBe(false);
});
test("Test 5:", () => {
  expect(bracketsValidtion("{([({)])}")).toBe(false);
});
