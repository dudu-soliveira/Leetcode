// https://leetcode.com/problems/trapping-rain-water-ii/
import { PriorityQueue } from "@datastructures-js/priority-queue";

// @leet start
function trapRainWater(heightMap: number[][]): number {
  let m = heightMap.length;
  let n = heightMap[0].length;
  let volume = 0;

  if (n <= 2 || m <= 2) return volume;

  let heap: PriorityQueue<number[]> = new PriorityQueue(
    (a: number[], b: number[]): number => a[2] - b[2],
  );

  heightMap[0][0] = -1;
  heightMap[0][n - 1] = -1;
  heightMap[m - 1][0] = -1;
  heightMap[m - 1][n - 1] = -1;

  for (let i = 0; i < m; i++) {
    if (i !== 0 && i !== m - 1) {
      heap.enqueue([i, 0, heightMap[i][0]]);
      heightMap[i][0] = -1;
      heap.enqueue([i, n - 1, heightMap[i][n - 1]]);
      heightMap[i][n - 1] = -1;
      continue;
    }

    for (let j = 1; j < n - 1; j++) {
      heap.enqueue([i, j, heightMap[i][j]]);
      heightMap[i][j] = -1;
    }
  }

  while (!heap.isEmpty()) {
    const [i, j, h] = heap.dequeue()!;

    const d = i - 1;
    const u = i + 1;
    const l = j - 1;
    const r = j + 1;

    let neighbour: number;

    if (d >= 0 && (neighbour = heightMap[d][j]) !== -1) {
      if (neighbour < h) volume += h - neighbour;
      heap.enqueue([d, j, Math.max(h, neighbour)]);
      heightMap[d][j] = -1;
    }
    if (u < m && (neighbour = heightMap[u][j]) !== -1) {
      if (neighbour < h) volume += h - neighbour;
      heap.enqueue([u, j, Math.max(h, neighbour)]);
      heightMap[u][j] = -1;
    }
    if (l >= 0 && (neighbour = heightMap[i][l]) !== -1) {
      if (neighbour < h) volume += h - neighbour;
      heap.enqueue([i, l, Math.max(h, neighbour)]);
      heightMap[i][l] = -1;
    }
    if (r < n && (neighbour = heightMap[i][r]) !== -1) {
      if (neighbour < h) volume += h - neighbour;
      heap.enqueue([i, r, Math.max(h, neighbour)]);
      heightMap[i][r] = -1;
    }
  }

  return volume;
}
// @leet end

