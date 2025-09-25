// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/

// @leet start
function checkZeroOnes(s: string): boolean {
  let curr0 = 0;
  let curr1 = 0;
  let max0 = 0;
  let max1 = 0;

  for (let c of s) {
    if (c === "0") {
      curr0++;
      if (curr1 > max1) max1 = curr1;
      curr1 = 0;
    } else {
      curr1++;
      if (curr0 > max0) max0 = curr0;
      curr0 = 0;
    }
  }

  if (curr0 > max0) max0 = curr0;
  if (curr1 > max1) max1 = curr1;

  return max1 > max0;
}
// @leet end

