// https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/

// @leet start
function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  if (k === 1) return true;
  const n = nums.length;
  let i = 0;
  let r = 1;
  let s = 0;

  for (; r < n; r++) {
    if (r - i >= k * 2 || (r - i >= k && s >= k)) break;
    if (nums[r] > nums[r - 1]) continue;

    s = r - i;
    i = r;
  }

  return r - i >= k * 2 || (r - i >= k && s >= k);
}
// @leet end

