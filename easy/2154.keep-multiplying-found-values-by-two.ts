// https://leetcode.com/problems/keep-multiplying-found-values-by-two/

// @leet start
function findFinalValue(nums: number[], original: number): number {
  if (original === 0) return original;

  const n = nums.length;
  const arr = Array(n);

  for (let i = 0; i < n; i++)
    if (nums[i] % original === 0) {
      const log = Math.log2(nums[i] / original);

      if (Number.isInteger(log)) arr[log] = 1;
    }

  for (let i = 0; i < n; i++) if (!arr[i]) return original << i;

  return original << n;
}
// @leet end

