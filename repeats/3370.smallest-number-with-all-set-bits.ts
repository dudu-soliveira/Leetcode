// https://leetcode.com/problems/smallest-number-with-all-set-bits/

// @leet start
function smallestNumber(n: number): number {
  return (1 << (Math.floor(Math.log2(n)) + 1)) - 1;
}
// @leet end

