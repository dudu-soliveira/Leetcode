// https://leetcode.com/problems/integer-to-roman/

function intToRoman(num: number): string {
  const symbols = ["I", "V", "X", "L", "C", "D", "M"];
  let result = "";
  let i = 0;

  while (num >= 1) {
    let roman = "";
    let digit = num % 10;

    switch (digit) {
      case 4:
        roman = symbols[i] + symbols[i + 1];
        break;
      case 9:
        roman = symbols[i] + symbols[i + 2];
        break;
      default:
        if (digit >= 5) {
          digit %= 5;
          roman = symbols[i + 1];
        }
        roman += symbols[i].repeat(digit);
        break;
    }

    num = Math.floor(num / 10);
    result = roman + result;
    i += 2;
  }

  return result;
}
