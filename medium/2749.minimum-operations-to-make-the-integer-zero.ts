// https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/

// @leet start
function makeTheIntegerZero(num1: number, num2: number): number {
  if (num1 === 0) return 0;

  let numOps = 0;

  while (num1 > num2 || num2 < -1) {
    num1 -= num2;
    numOps++;

    if (num1 < 0) continue;

    let count = 0;
    let n = BigInt(num1);

    while (n !== 0n) {
      n &= n - 1n;
      count++;
    }

    if (numOps === count) return numOps;
    if (numOps > count) {
      if (num1 < numOps) return -1;
      return numOps;
    }
  }

  return -1;
}
// @leet end
