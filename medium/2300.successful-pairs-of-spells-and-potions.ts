// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

// @leet start
function binarySearch(arr: number[], value: number): number {
  let l = 0;
  let r = arr.length - 1;
  let resIdx = -1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);

    if (arr[mid] >= value) {
      resIdx = mid;
      r = mid - 1;
    } else l = mid + 1;
  }

  return resIdx;
}

function successfulPairs(
  spells: number[],
  potions: number[],
  success: number,
): number[] {
  const n = spells.length;
  const m = potions.length;

  potions.sort((a: number, b: number): number => a - b);

  for (let i = 0; i < n; i++) {
    const l = binarySearch(potions, Math.ceil(success / spells[i]));

    spells[i] = l !== -1 ? m - l : 0;
  }

  return spells;
}
// @leet end

