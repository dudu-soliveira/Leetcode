// https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/

// @leet start
function maxIncreasingSubarrays(nums: number[]): number {
  let max = 1
  let last = 0
  let len = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) len++
    else {
      let x = Math.max(len >> 1, Math.min(len, last))
      if (x > max) max = x
      last = len
      len = 1
    }
  }

  return Math.max(Math.max(len >> 1, Math.min(len, last)), max)
};
// @leet end
