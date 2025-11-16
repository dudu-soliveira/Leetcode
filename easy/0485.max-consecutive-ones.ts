// https://leetcode.com/problems/max-consecutive-ones/

// @leet start
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) curr++;
    else {
      if (curr > max) max = curr;
      curr = 0;
    }
  }
  return Math.max(curr, max);
}
// @leet end

