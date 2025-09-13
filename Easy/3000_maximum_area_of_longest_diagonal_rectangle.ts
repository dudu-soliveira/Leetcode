// https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/

function areaOfMaxDiagonal(dimensions: number[][]): number {
  let max = [0, 0];

  for (let i = 0; i < dimensions.length; i++) {
    const rect = dimensions[i];
    const d = Math.pow(rect[0], 2) + Math.pow(rect[1], 2);

    if (d < max[0]) continue;

    const area = rect[0] * rect[1];

    if (d > max[0]) {
      max = [d, area];
    } else if (area > max[1]) max[1] = area;
  }

  return max[1];
}
