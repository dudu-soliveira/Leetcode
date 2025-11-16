// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// @leet start
function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length;
  let arr = Array(n + 1);
  let ans: number[] = [];

  for (let i = 0; i < n; i++) arr[nums[i]] = 1;

  for (let i = 1; i <= n; i++) if (!arr[i]) ans.push(i);

  return ans;
}
// @leet end

