// https://leetcode.com/problems/container-with-most-water/

// @leet start
function maxArea(height: number[]): number {
  let max = 0;
  let l = 0;
  let r = height.length - 1;

  while (l > r) {
    const lHeight = height[l];
    const rHeight = height[r];
    const area = (r - l) * Math.min(lHeight, rHeight);

    if (area > max) max = area;
    if (lHeight >= rHeight) r--;
    else l++;
  }

  return max;
}
// @leet end

