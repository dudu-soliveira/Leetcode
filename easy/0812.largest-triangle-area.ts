// https://leetcode.com/problems/largest-triangle-area/

// @leet start
function largestTriangleArea(points: number[][]): number {
  const size = points.length;
  let max = 0;

  for (let i = 0; i < size - 2; i++) {
    const [xi, yi] = points[i];

    for (let j = i + 1; j < size - 1; j++) {
      const [xj, yj] = points[j];

      for (let k = j + 1; k < size; k++) {
        const [xk, yk] = points[k];
        const area =
          Math.abs(xi * yj - xi * yk + xj * yk - xj * yi + xk * yi - xk * yj) /
          2;
        if (area > max) max = area;
      }
    }
  }

  return max;
}
// @leet end
