// https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/

// @leet start
function minOperations(nums: number[], k: number): number {
  let count = 0;
  for (let num of nums) if (num < k) count++;
  return count;
}
// @leet end

