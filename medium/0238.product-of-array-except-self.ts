// https://leetcode.com/problems/product-of-array-except-self/

// @leet start
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  let res: number[] = Array(n).fill(1);
  let curr = 1;

  for (let i = 0; i < n; i++) {
    res[i] = curr;
    curr *= nums[i];
  }

  curr = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= curr;
    curr *= nums[i];
  }

  return res;
}
// @leet end
