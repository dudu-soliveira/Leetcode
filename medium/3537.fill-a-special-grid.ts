// https://leetcode.com/problems/fill-a-special-grid/

// @leet start
function specialGrid(n: number): number[][] {
  let size = 1 << n;
  let grid = Array.from(Array(size), (): number[] => Array(size));
  let count = 0;

  function dfs(l: number, r: number, u: number, d: number) {
    if (l === r && u === d) {
      grid[u][l] = count++;
      return;
    }

    const sidesMid = Math.floor(l + (r - l) / 2);
    const heightMid = Math.floor(u + (d - u) / 2);

    dfs(sidesMid + 1, r, u, heightMid);
    dfs(sidesMid + 1, r, heightMid + 1, d);
    dfs(l, sidesMid, heightMid + 1, d);
    dfs(l, sidesMid, u, heightMid);
  }

  dfs(0, size - 1, 0, size - 1);
  return grid;
}
// @leet end

