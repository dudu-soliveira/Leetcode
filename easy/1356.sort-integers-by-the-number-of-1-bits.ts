// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

// @leet start
function count1s(num: number): number {
  let count = 0;
  while (num !== 0) {
    num &= num - 1;
    count++;
  }
  return count;
}

function sortByBits(arr: number[]): number[] {
  let countMap = new Map<number, number>();

  return arr.sort((a, b) => {
    if (!countMap.has(a)) countMap.set(a, count1s(a));
    if (!countMap.has(b)) countMap.set(b, count1s(b));
    return countMap.get(a)! - countMap.get(b)! || a - b;
  });
}
// @leet end

