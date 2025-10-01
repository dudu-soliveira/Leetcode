// https://leetcode.com/problems/maximum-ascending-subarray-sum/

// @leet start
function maxAscendingSum(nums: number[]): number {
  let max = 0;
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    if (curr > nums[i - 1]) sum += curr;
    else {
      if (sum > max) max = sum;
      sum = curr;
    }
  }

  return sum > max ? sum : max;
}
// @leet end

