// https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/

// @leet start
function averageValue(nums: number[]): number {
  let sum = 0;
  let count = 0;

  for (const num of nums) {
    if (num % 6 !== 0) continue;

    sum += num;
    count++;
  }

  return count !== 0 ? Math.floor(sum / count) : 0;
}
// @leet end

