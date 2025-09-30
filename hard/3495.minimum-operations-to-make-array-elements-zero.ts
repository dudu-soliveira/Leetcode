// https://leetcode.com/problems/minimum-operations-to-make-array-elements-zero/

// @leet start
function minOperations(queries: number[][]): number {
  let ans = 0;
  let expList: number[] = [];

  for (let i = 0; i < 16; i++) expList.push(1 << (2 * i));

  for (const [l, r] of queries) {
    let numOps = 0;
    for (let i = 1; i < 16; i++) {
      const exp = expList[i];

      if (l >= exp) continue;

      numOps += (Math.min(r, exp) - Math.max(l, expList[i - 1]) + 1) * i;

      if (r >= exp) numOps -= i;
      else break;
    }
    ans += Math.ceil(numOps / 2);
  }

  return ans;
}
// @leet end
