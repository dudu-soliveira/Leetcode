// https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/

// @leet start
function minNumberOperations(target: number[]): number {
  const n = target.length;
  let ans = target[0];
  for (let i = 1; i < n; ++i) {
    ans += Math.max(target[i] - target[i - 1], 0);
  }
  return ans;
}
// @leet end

