// https://leetcode.com/problems/largest-perimeter-triangle/

// @leet start
function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    const second = nums[i + 1];
    const third = nums[i + 2];
    if (first < second + third) return first + second + third;
  }

  return 0;
}
// @leet end

