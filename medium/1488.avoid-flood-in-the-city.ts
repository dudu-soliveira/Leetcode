// https://leetcode.com/problems/avoid-flood-in-the-city/

// @leet start
function binarySearch(arr: number[], value: number): number {
  let l = 0;
  let r = arr.length - 1;
  let resIdx = -1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);

    if (arr[mid] > value) {
      resIdx = mid;
      r = mid - 1;
    } else l = mid + 1;
  }

  return resIdx;
}

function avoidFlood(rains: number[]): number[] {
  let n = rains.length;
  let lakeIdxMap: Map<number, number> = new Map();
  let dryDays: number[] = [];

  for (let i = 0; i < n; i++) {
    const curr = rains[i];

    if (curr === 0) {
      dryDays.push(i);
      rains[i] = 1;
      continue;
    }

    let prevIdx = lakeIdxMap.get(curr);

    if (prevIdx !== undefined) {
      const j = binarySearch(dryDays, prevIdx);

      if (j === -1) return [];

      rains[dryDays[j]] = curr;
      dryDays.splice(j, 1);
    }

    lakeIdxMap.set(curr, i);
    rains[i] = -1;
  }

  return rains;
}
// @leet end

