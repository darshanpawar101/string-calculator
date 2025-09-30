class stringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }

    let delimiterRegex = /,|\n/;

    if (numbers.startsWith("//")) {
      const parts = numbers?.split("\n");
      const customDelimiter = parts[0].substring(2);
      delimiterRegex = new RegExp(customDelimiter);
      numbers = parts[1];
    }

    const nums = numbers?.split(delimiterRegex)?.map((num) => parseInt(num));

    const negativeNumbers = nums?.filter((num) => num < 0);
    if (negativeNumbers?.length > 0) {
      throw new Error(
        `negative numbers not allowed: ${negativeNumbers.join(", ")}`
      );
    }

    const validNums = nums.filter((num) => num <= 1000);

    return validNums?.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = stringCalculator;
