// https://leetcode.com/problems/shuffle-the-array/

// @leet start
function shuffle(nums: number[], n: number): number[] {
  let ans: number[] = Array(n * 2);
  for (let i = 0; i < 2 * n; i++)
    ans[i] = nums[i % 2 ? n + Math.floor(i / 2) : i / 2];
  return ans;
}
// @leet end

