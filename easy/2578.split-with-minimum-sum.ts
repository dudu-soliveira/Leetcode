// https://leetcode.com/problems/split-with-minimum-sum/

// @leet start
function splitNum(num: number): number {
  let digits: number[] = [];

  while (num !== 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  digits.sort((a: number, b: number): number => b - a);
  let exp = 1;
  let ans = digits[0];

  for (let i = 1; i < digits.length; i++) {
    if (i % 2 === 0) exp *= 10;

    ans = ans + digits[i] * exp;
  }

  return ans;
}
// @leet end

