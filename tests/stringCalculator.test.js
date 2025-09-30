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
