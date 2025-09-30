const stringCalculator = require("../src/stringCalculator")

let calc;
beforeEach(() => {
    calc = new stringCalculator()
})

test("returns 0 for empty string",() => {
    expect(calc.add("")).toBe(0)
})