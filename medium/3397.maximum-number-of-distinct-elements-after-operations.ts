// https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/

// @leet start
function maxDistinctElements(nums: number[], k: number): number {
  if (nums.length <= k * 2 + 1) return nums.length;

  let min = -Infinity;
  let count = 0;

  nums.sort((a, b) => a - b);

  for (const num of nums) {
    if (num + k <= min) continue;
    min = Math.max(min + 1, num - k);
    count++;
  }

  return count;
}
// @leet end
