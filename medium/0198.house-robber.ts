// https://leetcode.com/problems/house-robber/

// @leet start
function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 1) return nums[0];

  let dp: number[] = Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[n - 1];
}
// @leet end

