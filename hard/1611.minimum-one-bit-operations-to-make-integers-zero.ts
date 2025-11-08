// https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/

// @leet start
function minimumOneBitOperations(n: number): number {
  const s = n.toString(2);
  const len = s.length;
  let ans = 0;
  let mult = 1;

  for (let i = 0; i < len; i++) {
    if (s[i] === "0") continue;

    ans += ((1 << (len - i - 1)) * 2 - 1) * mult;
    mult *= -1;
  }

  return ans;
}
// @leet end

