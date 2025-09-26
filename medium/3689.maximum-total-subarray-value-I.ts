// https://leetcode.com/problems/maximum-total-subarray-value-i/

function maxTotalValue(nums: number[], k: number): number {
  let max = -Infinity;
  let min = Infinity;

  for (let num of nums) {
    if (num > max) max = num;
    if (num < min) min = num;
  }

  return (max - min) * k;
}
