// https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/

// @leet start
function minNumberOperations(target: number[]): number {
  const n = target.length;
  let ans = target[n - 1];

  for (let i = 1; i < n; i++)
    if (target[i] < target[i - 1]) ans += target[i - 1] - target[i];

  return ans;
}
// @leet end
