// https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/

// @leet start
function gcd(x: number, y: number): number {
  if (y > x) {
    const tmp = x;
    x = y;
    y = tmp;
  }

  while (y !== 0) {
    const mod = x % y;
    x = y;
    y = mod;
  }

  return x;
}

function binaryGcd(x: number, y: number): number {
  let d = 0;

  while (!(x & 1) && !(y & 1)) {
    x >>= 1;
    y >>= 1;
    d++;
  }

  while (!(x & 1)) x >>= 1;
  while (!(y & 1)) y >>= 1;

  while (x !== y) {
    if (x > y) {
      x -= y;
      while (!(x & 1)) x >>= 1;
    } else {
      y -= x;
      while (!(y & 1)) y >>= 1;
    }
  }

  return x << d;
}

function minOperations(nums: number[]): number {
  const n = nums.length;

  let countOnes = 0;
  for (let i = 0; i < n; i++) if (nums[i] === 1) countOnes++;
  if (countOnes) return n - countOnes;

  for (let r = 1; r < n; r++) {
    for (let l = 0; l + r < n; l++) {
      let x = nums[l];
      for (let j = 1; j <= r; j++) {
        x = binaryGcd(x, nums[l + j]);
        if (x === 1) return n + r - 1;
      }
    }
  }

  return -1;
}
// @leet end
