// https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/

// @leet start
function hasSameDigits(s: string): boolean {
  const n = s.length - 1;
  const digits = s.split("").map(BigInt);

  let pascal = 1n;
  let l = (digits[0] + digits[n - 1]) % 10n;
  let r = (digits[1] + digits[n]) % 10n;

  for (let i = 1; i < Math.ceil(n / 2); i++) {
    pascal = (pascal * BigInt(n - i)) / BigInt(i);

    l = (l + ((digits[i] * pascal) % 10n)) % 10n;
    r = (r + ((digits[i + 1] * pascal) % 10n)) % 10n;
    if (i !== n - i - 1) {
      l = (l + ((digits[n - i - 1] * pascal) % 10n)) % 10n;
      r = (r + ((digits[n - i] * pascal) % 10n)) % 10n;
    }
  }

  return l === r;
}
// @leet end

