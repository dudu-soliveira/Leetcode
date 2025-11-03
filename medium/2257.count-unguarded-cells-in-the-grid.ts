// https://leetcode.com/problems/count-unguarded-cells-in-the-grid/

// @leet start
const ROWCHECKED = -4;
const COLCHECKED = -3;
const GUARD = -2;
const WALL = -1;
const UNGUARDED = 0;
const GUARDED = 1;

function countUnguarded(
  m: number,
  n: number,
  guards: number[][],
  walls: number[][],
): number {
  let grid = Array.from(Array(m), (): number[] => Array(n).fill(UNGUARDED));
  let ans = m * n - guards.length - walls.length;

  for (const [row, col] of walls) grid[row][col] = WALL;

  for (const [row, col] of guards) grid[row][col] = GUARD;

  for (let i = 0; i < guards.length; i++) {
    const [row, col] = guards[i];
    const cell = grid[row][col];

    if (cell === GUARDED) continue;

    if (cell !== ROWCHECKED) {
      for (const d of [-1, 1]) {
        let rowSeen = row + d;
        let cellSeen: number;
        while (
          rowSeen >= 0 &&
          rowSeen < m &&
          (cellSeen = grid[rowSeen][col]) !== WALL
        ) {
          if (cellSeen === UNGUARDED) {
            grid[rowSeen][col] = GUARDED;
            ans--;
          } else if (cellSeen === GUARD) grid[rowSeen][col] = ROWCHECKED;
          else if (cellSeen === COLCHECKED) grid[rowSeen][col] = GUARDED;

          rowSeen += d;
        }
      }
    }

    if (cell !== COLCHECKED) {
      for (const d of [-1, 1]) {
        let colSeen = col + d;
        let cellSeen: number;
        while (
          colSeen >= 0 &&
          colSeen < n &&
          (cellSeen = grid[row][colSeen]) !== WALL
        ) {
          if (cellSeen === UNGUARDED) {
            grid[row][colSeen] = GUARDED;
            ans--;
          } else if (cellSeen === GUARD) grid[row][colSeen] = COLCHECKED;
          else if (cellSeen === ROWCHECKED) grid[row][colSeen] = GUARDED;

          colSeen += d;
        }
      }
    }
  }

  return ans;
}
// @leet end

