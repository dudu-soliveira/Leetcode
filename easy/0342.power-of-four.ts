// https://leetcode.com/problems/power-of-four/

function isPowerOfFour(n: number): boolean {
  return Number.isInteger(Math.log(n) / Math.log(4));
}
