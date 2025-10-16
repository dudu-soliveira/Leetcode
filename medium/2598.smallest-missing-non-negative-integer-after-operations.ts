// https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/

// @leet start
function findSmallestInteger(nums: number[], value: number): number {
  let arr = Array(value).fill(0)

  for (let i = 0; i < nums.length; i++) {
    let mod = nums[i] % value
    if (mod < 0) mod += value
    arr[mod]++
  }

  let min = Infinity
  let minIdx = 0

  for (let i = 0; i < value; i++) {
    if (arr[i] === 0) return i
    if (arr[i] < min) { min = arr[i]; minIdx = i }
  }

  return minIdx + min * value
};
// @leet end
