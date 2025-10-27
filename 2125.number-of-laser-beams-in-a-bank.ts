// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/

// @leet start
function numberOfBeams(bank: string[]): number {
  let lasers = 0;
  let prevCount = 0;

  for (let i = 0; i < bank.length; i++) {
    let count = 0;
    for (let j = 0; j < bank[0].length; j++) {
      if (bank[i][j] === "1") count++;
    }
    if (count === 0) continue;

    lasers += prevCount * count;
    prevCount = count;
  }

  return lasers;
}
// @leet end
