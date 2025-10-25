// https://leetcode.com/problems/calculate-money-in-leetcode-bank/

// @leet start
function totalMoney(n: number): number {
  const numWeeks = Math.floor(n / 7);
  const mod = n % 7;
  return numWeeks * (28 + 3.5 * (numWeeks - 1) + mod) + (mod * (mod + 1)) / 2;
}
// @leet end

