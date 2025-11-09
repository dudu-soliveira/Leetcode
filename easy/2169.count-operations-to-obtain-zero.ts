// https://leetcode.com/problems/count-operations-to-obtain-zero/

// @leet start
function countOperations(num1: number, num2: number): number {
  let ans = 0;
  if (num2 > num1) {
    const tmp = num2;
    num2 = num1;
    num1 = tmp;
  }

  while (num2 !== 0) {
    ans += Math.floor(num1 / num2);

    const mod = num1 % num2;
    num1 = num2;
    num2 = mod;
  }

  return ans;
}
// @leet end

