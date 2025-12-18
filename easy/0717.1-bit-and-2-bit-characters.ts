// https://leetcode.com/problems/1-bit-and-2-bit-characters/

// @leet start
function isOneBitCharacter(bits: number[]): boolean {
  let isTwoBit = false;

  for (let i = 0; i < bits.length - 1; i++) {
    if (isTwoBit) {
      isTwoBit = false;
      continue;
    }
    if (bits[i] === 1) isTwoBit = true;
  }

  return !isTwoBit;
}
// @leet end

