// https://leetcode.com/problems/ones-and-zeroes/

// @leet start
function findMaxForm(strs: string[], m: number, n: number): number {
  let max = [m, n];
  let dp: number[][] = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  for (let i = 0; i < strs.length; i++) {
    let count = [0, 0];
    let skip = false;

    for (let idx = 0; idx < strs[i].length; idx++)
      if (++count[strs[i][idx]] > max[strs[i][idx]] && (skip = true)) break;

    if (skip) continue;

    for (let z = m; z >= count[0]; z--)
      for (let o = n; o >= count[1]; o--)
        dp[z][o] = Math.max(dp[z - count[0]][o - count[1]] + 1, dp[z][o]);
  }

  return dp[m][n];
}
// @leet end
