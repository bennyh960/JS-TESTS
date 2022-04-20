const { test, expect } = require("@jest/globals");
const strStr = require("./strStr.easy");

test(`Test 1: search "ll" in "hello"`, () => {
  expect(strStr("hello", "ll")).toBe(2);
});
test(`Test 2: search "lo" in "hellollo"`, () => {
  expect(strStr("hellollo", "lo")).toBe(3);
});
test(`Test 3: search "l" in "hellollo"`, () => {
  expect(strStr("hellollo", "l")).toBe(2);
});
test(`Test 3: search "l" in "hellollo"`, () => {
  expect(strStr("hellollo", "xxx")).toBe(-1);
});

// console.log(strStr("hello", "ll"));
// console.log(strStr("hellollo", "lo"));
// console.log(strStr("hellollo", "l"));
// console.log(strStr("hellollo", "x"));
