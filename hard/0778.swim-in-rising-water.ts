// https://leetcode.com/problems/swim-in-rising-water/
import { PriorityQueue } from "@datastructures-js/priority-queue";

// @leet start
function isValidCell(i: number, j: number, n: number): boolean {
  return i >= 0 && i < n && j >= 0 && j < n;
}

function swimInWater(grid: number[][]): number {
  const n = grid.length;
  let heap: PriorityQueue<number[]> = new PriorityQueue(
    (a: number[], b: number[]): number => a[2] - b[2],
  );

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  heap.enqueue([0, 0, grid[0][0]]);

  while (!heap.isEmpty()) {
    const [i, j, t] = heap.dequeue()!;
    if (i === n - 1 && j === n - 1) return t;

    for (const [iDir, jDir] of directions) {
      const iAdj = i + iDir;
      const jAdj = j + jDir;

      if (isValidCell(iAdj, jAdj, n) && grid[iAdj][jAdj] !== -1) {
        heap.enqueue([iAdj, jAdj, Math.max(grid[iAdj][jAdj], t)]);
        grid[iAdj][jAdj] = -1;
      }
    }
  }

  return -1;
}
// @leet end

