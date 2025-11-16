// https://leetcode.com/problems/set-mismatch/

// @leet start
function findErrorNums(nums: number[]): number[] {
  const n = nums.length;
  let count = Array(n + 1).fill(0);
  let ans: number[] = Array(2);

  for (let i = 0; i < n; i++) if (++count[nums[i]] === 2) ans[0] = nums[i];

  for (let i = 1; i <= n; i++)
    if (count[i] === 0) {
      ans[1] = i;
      break;
    }

  return ans;
}
// @leet end

