// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

// @leet start
function kLengthApart(nums: number[], k: number): boolean {
  let d = 0;
  let i = 0;

  while (nums[i] === 0) i++;

  i++;

  for (; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (d < k) return false;
      d = 0;
    } else d++;
  }

  return true;
}
// @leet end

