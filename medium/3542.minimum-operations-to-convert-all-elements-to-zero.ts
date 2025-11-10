// https://leetcode.com/problems/minimum-operations-to-convert-all-elements-to-zero/

// @leet start
function minOperations(nums: number[]): number {
  const n = nums.length;
  let stack: number[] = [];
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      ans += stack.length;
      stack = [];
      continue;
    }

    while (stack.length && nums[i] < stack[stack.length - 1]) {
      stack.pop();
      ans++;
    }

    if (!stack.length || nums[i] > stack[stack.length - 1]) stack.push(nums[i]);
  }

  return ans + stack.length;
}
// @leet end
