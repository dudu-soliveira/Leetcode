// https://leetcode.com/problems/string-to-integer-atoi/

function myAtoi(s: string): number {
  let num = 0;
  let i = 0;
  let sign = 1;

  const max = 2147483647;
  const min = -2147483648;

  s = s.trimStart();

  if (s.startsWith("-")) {
    sign = -1;
    s = s.replace("-", "");
  } else if (s.startsWith("+")) {
    s = s.replace("+", "");
  }

  s = s.split(/\D/)[0];

  for (; i < s.length; i++) {
    num = num * 10 + Number(s[i]);
  }

  num *= sign;
  return num > max ? max : num < min ? min : num;
}
