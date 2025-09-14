// https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/

function compareFn(a: number[], b: number[]): number {
  let diff = a[0] - b[0];
  return diff == 0 ? b[1] - a[1] : diff;
}

function numberOfPairs(points: number[][]): number {
  let countPairs = 0;
  const size = points.length;

  points.sort(compareFn);

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      const [lx, ly] = points[i];
      const [rx, ry] = points[j];

      // Check if A is on the upper left side of B
      if (
        (lx == rx && ly == ry) || // They are the same point
        lx > rx || // A is on the right of B
        ly < ry // A is bellow B
      )
        continue;

      let isValid = true;

      // Check if there's any point in the rectangle
      for (let k = 0; k < size; k++) {
        if (k == i || k == j) continue;

        const [kx, ky] = points[k];

        if (kx >= lx && kx <= rx && ky <= ly && ky >= ry) {
          isValid = false;
          break;
        }
      }

      if (isValid) countPairs++;
    }
  }

  return countPairs;
}
