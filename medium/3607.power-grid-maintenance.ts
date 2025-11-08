// https://leetcode.com/problems/power-grid-maintenance/
import { MinPriorityQueue } from "@datastructures-js/priority-queue";

// @leet start
function processQueries(
  c: number,
  connections: number[][],
  queries: number[][],
): number[] {
  let grids: (number | number[])[] = Array.from(Array(c + 1), (_, k) => [k]);
  let queues: (number[] | MinPriorityQueue<number>)[] = Array(c + 1);
  let ans: number[] = [];

  for (let i = 0; i < connections.length; i++) {
    let u = connections[i][0];
    let v = connections[i][1];

    let idxU = typeof grids[u] === "number" ? grids[u] : u;
    let idxV = typeof grids[v] === "number" ? grids[v] : v;

    if (idxU === idxV) continue;

    if (idxU < idxV) {
      if (idxV !== v) grids[v] = idxU;
      let gridV = grids[idxV] as number[];
      for (let j = 0; j < gridV.length; j++) {
        grids[gridV[j]] = idxU;
        (grids[idxU] as number[]).push(gridV[j]);
      }
    } else {
      if (idxU !== u) grids[u] = idxV;
      let gridU = grids[idxU] as number[];
      for (let j = 0; j < gridU.length; j++) {
        grids[gridU[j]] = idxV;
        (grids[idxV] as number[]).push(gridU[j]);
      }
    }
  }

  for (let i = 1; i <= c; i++) {
    const station = grids[i];

    if (typeof station === "number") queues[i] = [station, 1];
    else queues[i] = MinPriorityQueue.fromArray(station);
  }

  for (let i = 0; i < queries.length; i++) {
    const x = queries[i][1];
    let station = queues[x];

    if (queries[i][0] === 1) {
      if (Array.isArray(station)) {
        if (station[1] === 1) {
          ans.push(x);
          continue;
        }
        station = queues[station[0]] as MinPriorityQueue<number>;
      }
      let front = station.front();

      while (
        front !== null &&
        Array.isArray(queues[front]) &&
        queues[front][1] === 0
      ) {
        station.dequeue();
        front = station.front();
      }

      ans.push(front ?? -1);
      continue;
    }

    if (Array.isArray(station)) station[1] = 0;
    else if (station.front() === x) station.pop();
  }

  return ans;
}
// @leet end

