// https://leetcode.com/problems/find-the-largest-almost-missing-integer/

// @leet start
function largestInteger(nums: number[], k: number): number {
  const n = nums.length;

  if (k === n) {
    let max = -1;
    for (let i = 0; i < n; i++) if (nums[i] > max) max = nums[i];
    return max;
  }

  if (k !== 1) {
    if (nums[0] === nums[n - 1]) return -1;
    let l = nums[0];
    let r = nums[n - 1];

    for (let i = 1; i < n - 1; i++) {
      if (nums[i] === nums[0]) {
        l = -1;
        if (r === -1) return -1;
      }
      if (nums[i] === nums[n - 1]) {
        r = -1;
        if (l === -1) return -1;
      }
    }

    return Math.max(l, r);
  }

  let count = Array(50);
  for (let i = 0; i < n; i++) count[nums[i]] = (count[nums[i]] ?? 0) + 1;

  let max = -1;

  for (let i = 0; i < n; i++)
    if (count[nums[i]] === 1 && nums[i] > max) max = nums[i];

  return max;
}
// @leet end
