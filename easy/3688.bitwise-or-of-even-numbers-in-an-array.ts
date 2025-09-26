// https://leetcode.com/problems/bitwise-or-of-even-numbers-in-an-array/

function evenNumberBitwiseORs(nums: number[]): number {
  let res = 0;

  for (let num of nums) {
    if (num % 2 === 0) res |= num;
  }

  return res;
}
