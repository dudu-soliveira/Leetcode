// https://leetcode.com/problems/number-of-substrings-with-only-1s/

// @leet start
function numSub(s: string): number {
  const n = s.length;
  let ans = 0;
  let ones = 0;

  for (let i = 0; i <= n; i++) {
    if (s[i] === "1") ones++;
    else {
      ans += (ones * (ones + 1)) / 2;
      ones = 0;
    }
  }

  return ans % (1e9 + 7);
}
// @leet end

