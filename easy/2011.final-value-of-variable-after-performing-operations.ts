// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

// @leet start
function finalValueAfterOperations(operations: string[]): number {
  return operations.reduce((p, c) => c[1] === '-' ? p - 1 : p + 1, 0)
};
// @leet end
