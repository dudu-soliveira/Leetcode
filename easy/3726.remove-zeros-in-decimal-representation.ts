// https://leetcode.com/problems/remove-zeros-in-decimal-representation/

// @leet start
function removeZeros(n: number): number {
  return Number(n.toString().replaceAll("0", ""));
}
// @leet end

