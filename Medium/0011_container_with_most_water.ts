// https://leetcode.com/problems/container-with-most-water/

function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const heightLeft = height[left];
    const heightRight = height[right];
    const distance = right - left;
    let area: number;

    if (heightLeft > heightRight) {
      area = distance * heightRight;
      right--;
    } else {
      area = distance * heightLeft;
      left++;
    }

    if (area > max) max = area;
  }

  return max;
}
