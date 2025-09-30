// https://leetcode.com/problems/find-triangular-sum-of-an-array/

// @leet start
function triangularSum(nums: number[]): number {
  const n = nums.length;
  let multArr: bigint[] = Array(n).fill(1n);
  let ans = 0n;

  for (let i = 1; i < Math.ceil(n / 2); i++) {
    const mult = (multArr[i - 1] * BigInt(n - i)) / BigInt(i);
    multArr[i] = mult;
    multArr[n - i - 1] = mult;
  }

  for (let i = 0; i < n; i++) {
    ans = (ans + BigInt(nums[i]) * multArr[i]) % 10n;
  }

  return Number(ans);
}
// @leet end

