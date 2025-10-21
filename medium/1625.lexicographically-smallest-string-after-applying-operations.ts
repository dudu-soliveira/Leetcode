// https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/
import { Queue } from "@datastructures-js/queue";

// @leet start
function findLexSmallestString(s: string, a: number, b: number): string {
  let queue = new Queue<string>();
  let map = new Map<string, true>();
  let min = s;
  let n = s.length;

  queue.enqueue(s);
  map.set(s, true);

  while (!queue.isEmpty()) {
    let s = queue.dequeue()!;
    if (s < min) min = s;

    let nums = s.split("").map((v) => Number(v));

    let op1 = Array.from(nums, (v, k) => String(k % 2 ? (v + a) % 10 : v)).join(
      "",
    );
    if (!map.has(op1)) {
      map.set(op1, true);
      queue.enqueue(op1);
    }

    let op2 = Array.from(nums, (_, k) => nums[(k + n - b) % n]).join("");
    if (!map.has(op2)) {
      map.set(op2, true);
      queue.enqueue(op2);
    }
  }

  return min;
}
// @leet end
