// https://leetcode.com/problems/concatenation-of-array/

// @leet start
function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++) nums.push(nums[i]);
  return nums;
}
// @leet end

