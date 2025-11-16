// https://leetcode.com/problems/increment-submatrices-by-one/

// @leet start
function rangeAddQueries(n: number, queries: number[][]): number[][] {
  let mat: number[][] = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < queries.length; i++) {
    let [row1, col1, row2, col2] = queries[i];

    for (let j = row1; j <= row2; j++) mat[j][col1]++;
    if (++col2 < n) for (let j = row1; j <= row2; j++) mat[j][col2]--;
  }

  for (let i = 0; i < n; i++)
    for (let j = 1; j < n; j++) mat[i][j] += mat[i][j - 1];

  return mat;
}
// @leet end
