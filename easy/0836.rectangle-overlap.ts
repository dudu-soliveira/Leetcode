// https://leetcode.com/problems/rectangle-overlap/

// @leet start
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  let [x1min, y1min, x1max, y1max] = rec1;
  let [x2min, y2min, x2max, y2max] = rec2;

  return x2max > x1min && x1max > x2min && y2max > y1min && y1max > y2min;
}
// @leet end

