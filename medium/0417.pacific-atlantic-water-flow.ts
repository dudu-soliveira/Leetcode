// https://leetcode.com/problems/pacific-atlantic-water-flow/

// @leet start
function dfs(
  heights: number[][],
  m: number,
  n: number,
  i: number,
  j: number,
  map: Map<number, boolean>,
): Map<number, boolean> {
  let currHeight = heights[i][j];
  let key: number;
  let x: number;
  let y: number;

  if (
    (x = i + 1) < m &&
    heights[x][(y = j)] >= currHeight &&
    !map.has((key = (x << 10) + y))
  ) {
    map.set(key, true);
    dfs(heights, m, n, x, y, map);
  }
  if (
    (x = i - 1) >= 0 &&
    heights[x][(y = j)] >= currHeight &&
    !map.has((key = (x << 10) + y))
  ) {
    map.set(key, true);
    dfs(heights, m, n, x, y, map);
  }
  if (
    (y = j + 1) < n &&
    heights[(x = i)][y] >= currHeight &&
    !map.has((key = (x << 10) + y))
  ) {
    map.set(key, true);
    dfs(heights, m, n, x, y, map);
  }
  if (
    (y = j - 1) >= 0 &&
    heights[(x = i)][y] >= currHeight &&
    !map.has((key = (x << 10) + y))
  ) {
    map.set(key, true);
    dfs(heights, m, n, x, y, map);
  }

  return map;
}

function pacificAtlantic(heights: number[][]): number[][] {
  let m = heights.length;
  let n = heights[0].length;
  let pacific: Map<number, boolean> = new Map();
  let atlantic: Map<number, boolean> = new Map();
  let both: number[][] = [];

  for (let i = 0; i < m; i++) {
    pacific.set((i << 10) + 0, true);
    dfs(heights, m, n, i, 0, pacific);

    atlantic.set((i << 10) + n - 1, true);
    dfs(heights, m, n, i, n - 1, atlantic);
  }

  for (let j = 0; j < n; j++) {
    pacific.set((0 << 10) + j, true);
    dfs(heights, m, n, 0, j, pacific);

    atlantic.set(((m - 1) << 10) + j, true);
    dfs(heights, m, n, m - 1, j, atlantic);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const key = (i << 10) + j;
      if (pacific.has(key) && atlantic.has(key)) both.push([i, j]);
    }
  }

  return both;
}
// @leet end

