// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/

// @leet start
function canBeEqual(target: number[], arr: number[]): boolean {
  let numCount: Map<number, number> = new Map();

  for (const num of target) {
    numCount.set(num, (numCount.get(num) ?? 0) + 1);
  }

  for (const num of arr) {
    const count = numCount.get(num);
    if (count === undefined) return false;
    if (count === 1) numCount.delete(num);
    else numCount.set(num, count - 1);
  }

  return true;
}
// @leet end

