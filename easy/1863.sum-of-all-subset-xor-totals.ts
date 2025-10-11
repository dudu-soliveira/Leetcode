// https://leetcode.com/problems/sum-of-all-subset-xor-totals/

// @leet start
function subsetXORSum(nums: number[]): number {
  let xor = 0;

  for (const num of nums) xor |= num;

  return xor << (nums.length - 1);
}
// @leet end

