// https://leetcode.com/problems/number-of-unequal-triplets-in-array/

// @leet start
function unequalTriplets(nums: number[]): number {
  let idxMap = new Map<number, number>();
  let countList: number[] = [];
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const idx = idxMap.get(curr);

    if (idx === undefined) {
      idxMap.set(curr, countList.length);
      countList.push(1);
      continue;
    }

    countList[idx] += 1;
  }

  let n = countList.length;
  for (let i = 0; i < n - 2; i++) {
    const x = countList[i];
    for (let j = i + 1; j < n - 1; j++) {
      const y = countList[j];
      for (let k = j + 1; k < n; k++) {
        ans += x * y * countList[k];
      }
    }
  }

  return ans;
}
// @leet end

