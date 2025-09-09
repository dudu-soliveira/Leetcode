// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/

function getNoZeroIntegers(n: number): number[] {
  let a = n - 1;
  let b = 1;

  while (String(a).concat(String(b)).includes("0")) {
    a--;
    b++;
  }

  return [a, b];
}
