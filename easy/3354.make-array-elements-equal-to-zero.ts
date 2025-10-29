// https://leetcode.com/problems/make-array-elements-equal-to-zero/

// @leet start
function countValidSelections(nums: number[]): number {
  let prefix = 0;
  let sufix = nums.reduce((prev, curr) => prev + curr, 0);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      const d = Math.abs(sufix - prefix);
      if (d === 1) count++;
      if (d === 0) count += 2;
      continue;
    }
    prefix += num;
    sufix -= num;
  }

  return count;
}
// @leet end

