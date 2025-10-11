// https://leetcode.com/problems/delete-and-earn/

// @leet start
function deleteAndEarn(nums: number[]): number {
  let countMap = new Map<number, number>();
  let uniqueValues: number[] = [];

  for (const num of nums) {
    const count = countMap.get(num);
    if (count === undefined) uniqueValues.push(num);
    countMap.set(num, (count ?? 0) + 1);
  }

  uniqueValues.sort((a, b) => a - b);

  const n = uniqueValues.length;
  let prev1 = uniqueValues[0] * countMap.get(uniqueValues[0])!;
  let prev2 = 0;

  for (let i = 1; i < n; i++) {
    const num = uniqueValues[i];
    const points = num * countMap.get(num)!;
    const tmp = prev1;

    if (uniqueValues[i - 1] !== num - 1) {
      prev1 = prev1 + points;
      prev2 = tmp;
      continue;
    }

    prev1 = Math.max(prev2 + points, prev1);
    prev2 = tmp;
  }

  return prev1;
}
// @leet end
