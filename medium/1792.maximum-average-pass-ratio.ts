// https://leetcode.com/problems/maximum-average-pass-ratio/solutions/7143071/most-efficient-beat-100-easy-java-python-c-javascript-go-c-typescript/

import { PriorityQueue } from "@datastructures-js/priority-queue";

// @leet start
function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const increaseMap: number[] = [];
  const size = classes.length;

  const compare = (a: number, b: number): number => {
    return increaseMap[b] - increaseMap[a];
  };

  const increaseQueue: PriorityQueue<number> = new PriorityQueue(compare);

  for (let i = 0; i < size; i++) {
    const [pass, total] = classes[i];

    increaseMap.push((pass + 1) / (total + 1) - pass / total);
    increaseQueue.enqueue(i);
  }

  for (let i = 0; i < extraStudents; i++) {
    const maxInc = increaseQueue.dequeue()!;

    const pass = ++classes[maxInc][0];
    const total = ++classes[maxInc][1];

    increaseMap[maxInc] = (pass + 1) / (total + 1) - pass / total;
    increaseQueue.enqueue(maxInc);
  }

  return (
    classes.reduce(
      (acc: number, curr: number[]): number => acc + curr[0] / curr[1],
      0,
    ) / size
  );
}
// @leet end

