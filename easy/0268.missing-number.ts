// https://leetcode.com/problems/missing-number/

// @leet start
function missingNumber(nums: number[]): number {
  const n = nums.length;

  return nums.reduce((acc, curr) => acc - curr, (n * (n + 1)) / 2);
}
// @leet end
