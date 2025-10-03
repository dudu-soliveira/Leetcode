// https://leetcode.com/problems/as-far-from-land-as-possible/
import { Queue } from "@datastructures-js/queue";

// @leet start
function maxDistance(grid: number[][]): number {
  let n = grid.length;
  let distance = 2;
  let queue: Queue<number[]> = new Queue();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) queue.enqueue([i, j]);
    }
  }

  if (queue.isEmpty() || queue.size() === n * n) return -1;

  while (!queue.isEmpty()) {
    const [i, j] = queue.dequeue()!;
    distance = grid[i][j] + 1;

    let d = i - 1;
    let u = i + 1;
    let l = j - 1;
    let r = j + 1;

    if (d >= 0 && grid[d][j] === 0) {
      grid[d][j] = distance;
      queue.enqueue([d, j]);
    }
    if (u < n && grid[u][j] === 0) {
      grid[u][j] = distance;
      queue.enqueue([u, j]);
    }
    if (l >= 0 && grid[i][l] === 0) {
      grid[i][l] = distance;
      queue.enqueue([i, l]);
    }
    if (r < n && grid[i][r] === 0) {
      grid[i][r] = distance;
      queue.enqueue([i, r]);
    }
  }

  return distance - 2;
}
// @leet end
