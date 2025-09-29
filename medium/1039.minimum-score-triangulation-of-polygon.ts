// https://leetcode.com/problems/minimum-score-triangulation-of-polygon/

// @leet start
function minScoreTriangulation(values: number[]): number {
  let minAreaMap: Map<number, number> = new Map();

  function calcArea(l: number, r: number): number {
    if (r === l + 1) return 0;

    const key = (l << 10) + r;
    if (minAreaMap.has(key)) return minAreaMap.get(key)!;

    const edge = values[l] * values[r];
    if (r === l + 2) return edge * values[r - 1];

    let min = Infinity;

    for (let k = l + 1; k < r; k++) {
      const area = edge * values[k] + calcArea(l, k) + calcArea(k, r);
      if (area < min) min = area;
    }

    minAreaMap.set(key, min);
    return min;
  }

  return calcArea(0, values.length - 1);
}
// @leet end

