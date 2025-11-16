// https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/

// @leet start
function maxOperations(s: string): number {
  let ans = 0;
  let moves = 0;

  for (let i = s.length - 1; i >= 0; i--)
    if (s[i] === "1") ans += moves;
    else if (s[i + 1] !== "0") moves++;

  return ans;
}
// @leet end

