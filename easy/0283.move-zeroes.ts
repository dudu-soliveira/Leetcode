// https://leetcode.com/problems/move-zeroes/

// @leet start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let n = nums.length;
  let countZeros = 0;

  for (let i = 0; i < n; i++) {
    const curr = nums[i];

    if (curr === 0) {
      countZeros++;
      continue;
    }

    nums[i - countZeros] = curr;
  }

  for (let i = n - 1; i >= n - countZeros; i--) {
    if (nums[i] !== 0) nums[i] = 0;
  }
}
// @leet end

