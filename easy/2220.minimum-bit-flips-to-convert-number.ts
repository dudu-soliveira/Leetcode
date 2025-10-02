// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

// @leet start
function minBitFlips(start: number, goal: number): number {
  let count = 0;
  let dif = start ^ goal;
  while (dif !== 0) {
    dif &= dif - 1;
    count++;
  }
  return count;
}
// @leet end

