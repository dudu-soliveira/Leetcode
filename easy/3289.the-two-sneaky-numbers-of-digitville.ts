// https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/

// @leet start
function getSneakyNumbers(nums: number[]): number[] {
  const n = nums.length;
  let count: number[] = Array(n);
  let ans: number[] = [];

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (count[num] === 1) {
      ans.push(num);
      if (ans.length === 2) break;
    } else count[num] = 1;
  }

  return ans;
}
// @leet end

