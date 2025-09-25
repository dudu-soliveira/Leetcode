// https://leetcode.com/problems/range-addition-ii/

// @leet start
function maxCount(m: number, n: number, ops: number[][]): number {
  let iMin = m;
  let jMin = n;

  for (let [i, j] of ops) {
    if (i < iMin) iMin = i;
    if (j < jMin) jMin = j;
  }

  return iMin * jMin;
}
// @leet end

