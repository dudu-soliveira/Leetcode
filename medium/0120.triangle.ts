// https://leetcode.com/problems/triangle/

// @leet start
function minimumTotal(triangle: number[][]): number {
  for (let i = triangle.length - 2; i >= 0; i--) {
    let curr = triangle[i];
    let prev = triangle[i + 1];

    for (let j = 0; j < curr.length; j++) {
      curr[j] += Math.min(prev[j], prev[j + 1]);
    }
  }

  return triangle[0][0];
}
// @leet end

