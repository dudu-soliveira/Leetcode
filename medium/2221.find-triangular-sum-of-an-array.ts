// https://leetcode.com/problems/find-triangular-sum-of-an-array/

// @leet start
function triangularSum(nums: number[]): number {
  const n = nums.length;

  if (n === 1) return nums[0];

  let mult = 1n;
  let ans = BigInt(nums[0] + nums[n - 1]) % 10n;

  for (let i = 1; i < Math.ceil(n / 2); i++) {
    mult = (mult * BigInt(n - i)) / BigInt(i);
    ans = (ans + ((BigInt(nums[i]) * mult) % 10n)) % 10n;
    if (i !== n - i - 1)
      ans = (ans + ((BigInt(nums[n - i - 1]) * mult) % 10n)) % 10n;
  }

  return Number(ans);
}
// @leet end
