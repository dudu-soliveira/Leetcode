// https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/

function numberOfPairs(points: number[][]): number {
  const uniqueX = [...new Set(points.map((p) => p[0]))].sort((a, b) => a - b);
  const xMap = new Map<number, number>();
  uniqueX.forEach((x, i) => {
    xMap.set(x, i);
  });

  const uniqueY = [...new Set(points.map((p) => p[1]))].sort((a, b) => a - b);
  const yMap = new Map<number, number>();
  uniqueY.forEach((y, j) => {
    yMap.set(y, j);
  });

  const numRows = uniqueX.length;
  const numCols = uniqueY.length;
  const matrix: number[][] = Array(numRows)
    .fill(null)
    .map(() => Array(numCols).fill(0));

  for (const point of points) {
    const i = xMap.get(point[0]);
    const j = yMap.get(point[1]);

    if (i !== undefined && j !== undefined) matrix[i][j]++;
  }

  const size = points.length;
  let count = 0;

  for (let i = 0; i < size; i++) {
    const ax = xMap.get(points[i][0]);
    const ay = yMap.get(points[i][1]);

    if (ax === undefined || ay === undefined) continue;

    // Skip if there are 2 equal points
    if (matrix[ax][ay] > 1) continue;

    let minY = 0;

    for (let bx = ax; bx < numRows; bx++) {
      for (let by = ay; by >= minY; by--) {
        if (bx == ax && by == ay) continue;

        let val = matrix[bx][by];

        if (val == 0) continue;

        if (val == 1) {
          count++;
        }

        minY = by + 1;
        break;
      }
      if (minY >= numCols) break;
    }
  }

  return count;
}
