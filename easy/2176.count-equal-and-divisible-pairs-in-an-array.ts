// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

// @leet start
function countPairs(nums: number[], k: number): number {
  const n = nums.length;
  let idxListMap = new Map<number, number[]>();
  let count = 0;

  for (let i = 0; i < n; i++) {
    const curr = nums[i];
    const idxs = idxListMap.get(curr);

    if (idxs === undefined) {
      idxListMap.set(curr, [i]);
      continue;
    }

    if (i % k === 0) count += idxs.length;
    else {
      for (const idx of idxs) {
        if ((i * idx) % k === 0) count++;
      }
    }

    idxs.push(i);
  }

  return count;
}
// @leet end

