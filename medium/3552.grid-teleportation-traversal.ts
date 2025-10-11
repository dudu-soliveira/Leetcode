// https://leetcode.com/problems/grid-teleportation-traversal/
import { PriorityQueue } from "@datastructures-js/priority-queue";

// @leet start
function isValidCell(i: number, j: number, m: number, n: number): boolean {
  return i >= 0 && i < m && j >= 0 && j < n;
}

function minMoves(matrix: string[]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let c: string;

  let portalIdxMap = new Map<string, number[][]>();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((c = matrix[i][j]) === "." || c === "#") continue;

      let idxs = portalIdxMap.get(c);
      if (idxs === undefined) portalIdxMap.set(c, [[i, j]]);
      else idxs.push([i, j]);
    }
  }

  let distanceMatrix = Array.from(Array(m), (): number[] =>
    Array.from(Array(n).fill(Infinity)),
  );
  let heap = new PriorityQueue<number[][]>(
    (a: number[][], b: number[][]): number =>
      distanceMatrix[a[0][0]][a[0][1]] - distanceMatrix[b[0][0]][b[0][1]],
  );
  distanceMatrix[0][0] = 0;

  if ((c = matrix[0][0]) !== ".") {
    const idxs = portalIdxMap.get(c)!;

    for (const [iPortal, jPortal] of idxs) {
      if (iPortal === m - 1 && jPortal === n - 1) return 0;
      distanceMatrix[iPortal][jPortal] = 0;
    }

    heap.enqueue(idxs);
  } else heap.push([[0, 0]]);

  while (!heap.isEmpty()) {
    const idxs = heap.dequeue()!;
    const d = distanceMatrix[idxs[0][0]][idxs[0][1]] + 1;

    for (const [i, j] of idxs) {
      for (const dir of directions) {
        const iAdj = i + dir[0];
        const jAdj = j + dir[1];

        if (iAdj === m - 1 && jAdj === n - 1) {
          if (matrix[iAdj][jAdj] === "#") return -1;
          return d;
        }

        if (
          !isValidCell(iAdj, jAdj, m, n) ||
          d >= distanceMatrix[iAdj][jAdj] ||
          (c = matrix[iAdj][jAdj]) === "#"
        )
          continue;

        if (c !== ".") {
          const idxs = portalIdxMap.get(c)!;

          for (const [iPortal, jPortal] of idxs) {
            if (iPortal === m - 1 && jPortal === n - 1) return d;
            distanceMatrix[iPortal][jPortal] = d;
          }

          heap.enqueue(idxs);
          continue;
        }

        distanceMatrix[iAdj][jAdj] = d;
        heap.enqueue([[iAdj, jAdj]]);
      }
    }
  }

  let res: number;
  return (res = distanceMatrix[m - 1][n - 1]) === Infinity ? -1 : res;
}
// @leet end

