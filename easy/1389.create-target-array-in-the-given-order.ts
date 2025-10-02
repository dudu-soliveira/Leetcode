// https://leetcode.com/problems/create-target-array-in-the-given-order/

// @leet start
function createTargetArray(nums: number[], index: number[]): number[] {
  const size = nums.length;
  let target: number[] = [];

  for (let i = 0; i < size; i++) {
    const idx = index[i];
    const num = nums[i];

    if (idx === i) target.push(num);
    else target.splice(idx, 0, num);
  }

  return target;
}
// @leet end

