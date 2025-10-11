// https://leetcode.com/problems/maximum-total-damage-with-spell-casting/

// @leet start
function maximumTotalDamage(power: number[]): number {
  let countMap = new Map<number, number>();
  let uniqueValues: number[] = [];

  for (const num of power) {
    let count = countMap.get(num);
    if (count === undefined) uniqueValues.push(num);
    countMap.set(num, (count ?? 0) + 1);
  }

  uniqueValues.sort((a: number, b: number): number => a - b);

  const n = uniqueValues.length;
  let dp: number[] = Array(n);

  dp[0] = uniqueValues[0] * countMap.get(uniqueValues[0])!;

  for (let i = 1; i < n; i++) {
    const curr = uniqueValues[i];
    const damage = curr * countMap.get(curr)!;
    let j = 1;

    while (i - j >= 0 && uniqueValues[i - j] >= curr - 2) {
      j++;
    }

    dp[i] = Math.max((i - j < 0 ? 0 : dp[i - j]) + damage, dp[i - 1]);
  }

  return dp[n - 1];
}
// @leet end
