const stringCalculator = require("../src/stringCalculator");

let calc;
beforeEach(() => {
  calc = new stringCalculator();
});

test("returns 0 for empty string", () => {
  expect(calc.add("")).toBe(0);
});

test("returns number for single input", () => {
  expect(calc.add("1")).toBe(1);
});

test("returns sum of two numbers separated by commas", () => {
  expect(calc.add("1,2")).toBe(3);
});

test("returns sum of all numbers separated by commas", () => {
  expect(calc.add("1,2,3,4,5,6")).toBe(21);
});

test("returns sum of all numbers separated by new lines and commas", () => {
  expect(calc.add("1\n2,3\n4,5\n6")).toBe(21);
});

test("returns sum of all numbers separated by custom delimiter", () => {
  expect(calc.add("//;\n1;2;3;4;5;6")).toBe(21);
});
