// https://leetcode.com/problems/valid-triangle-number/

// @leet start
function triangleNumber(nums: number[]): number {
  const size = nums.length;
  let count = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < size - 2; i++) {
    let k = i + 2;
    if (nums[i] === 0) continue;
    for (let j = i + 1; j < size - 1; j++) {
      const sum = nums[i] + nums[j];
      while (k < size && sum > nums[k]) k++;
      count += k - j - 1;
    }
  }

  return count;
}
// @leet end

