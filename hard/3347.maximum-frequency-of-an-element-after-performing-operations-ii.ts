// https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/

// @leet start
function sort(a: number[], b: number[]): number {
  return a[0] - b[0] || b[1] - a[1];
}

function maxFrequency(
  nums: number[],
  k: number,
  numOperations: number,
): number {
  let map = new Map<number, number>();
  let ans = 0;
  let acc = 0;

  for (let i = 0; i < nums.length; i++)
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);

  let heap: number[][] = [];

  let freq = map.entries();

  for (const [num, count] of freq) {
    heap.push([num - k, count]);
    heap.push([num, 0]);
    heap.push([num + k, -count]);
  }

  heap.sort(sort);

  for (let i = 0; i < heap.length; i++) {
    acc += heap[i][1];

    if (acc > ans)
      ans = Math.max(
        ans,
        Math.min(acc, numOperations + (map.get(heap[i][0]) ?? 0)),
      );
  }

  return ans;
}
// @leet end
