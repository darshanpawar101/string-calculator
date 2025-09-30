class stringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    const separatorRegex = /,|\n/;
    const sum = numbers
      ?.split(separatorRegex)
      ?.map((num) => parseInt(num))
      ?.reduce((sum, num) => sum + num, 0);
    return sum;
  }
}

module.exports = stringCalculator;
