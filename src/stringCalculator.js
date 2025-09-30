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

    const sum = numbers
      ?.split(delimiterRegex)
      ?.map((num) => parseInt(num))
      ?.reduce((sum, num) => sum + num, 0);

    return sum;
  }
}

module.exports = stringCalculator;
