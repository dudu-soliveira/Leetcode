// https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/

// @leet start
function maxSideLength(mat: number[][], threshold: number): number {
  const m = mat.length;
  const n = mat[0].length;
  let ans = 0;

  for (let i = 0; i < m; i++) {
    if (ans >= m - i) break;

    for (let j = 0; j < n; j++) {
      if (ans >= n - j) break;

      let sum = 0;
      let l = 0;
      while (sum <= threshold && i + l < m && j + l < n) {
        for (let k = 0; k < l; k++)
          sum += mat[i + k][j + l] + mat[i + l][j + k];

        sum += mat[i + l][j + l];

        l++;
      }

      ans = Math.max(sum <= threshold ? l : l - 1, ans);
    }
  }

  return ans;
}
// @leet end
