// https://leetcode.com/problems/replace-non-coprime-numbers-in-array/

function gcdBinary(a: number, b: number): number {
  let d = 0;
  // Step 1: Divide a and b by 2 until one of them becomes odd, and increment d
  while (!(a & 1) && !(b & 1)) {
    a >>= 1;
    b >>= 1;
    d++;
  }
  while (!(a & 1)) a >>= 1; // Step 2: Divide a by 2 until it becomes odd
  while (!(b & 1)) b >>= 1; // Step 3: Divide b by 2 until it becomes odd
  // Step 4: While a and b are different than each other, subtract the smallest
  // from the biggest and divide it by 2 until it becomes odd
  while (a !== b) {
    if (a > b) {
      a -= b;
      while (!(a & 1)) a >>= 1;
    } else {
      b -= a;
      while (!(b & 1)) b >>= 1;
    }
  }

  return (1 << d) * a;
}

function gcd(a: number, b: number): number {
  if (b > a) {
    const tmp = b;
    b = a;
    a = tmp;
  }
  if (b == 1) return -1;
  if (b == a || Number.isInteger(a / b)) return b;

  while (true) {
    if (b > a) {
      const tmp = b;
      b = a;
      a = tmp;
    }
    a %= b;

    if (a == 0) return b;
    if (a == 1) return -1;
  }
}

function replaceNonCoprimes(nums: number[]): number[] {
  let answer: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const size = answer.length;
    const b = nums[i];
    let d = gcd(answer[size - 1], b);

    if (d !== -1) {
      let lcm = (answer.pop() * b) / d;
      for (let j = size - 2; j >= 0; j--) {
        d = gcd(lcm, answer[j]);
        if (d === -1) break;
        lcm *= answer.pop() / d;
      }
      answer.push(lcm);
    } else answer.push(b);
  }

  return answer;
}
