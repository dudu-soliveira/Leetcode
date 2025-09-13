// https://leetcode.com/problems/maximum-69-number/

function maximum69Number(num: number): number {
  const s = num.toString();
  const i = s.indexOf("6");

  if (i == -1) return num;

  return Number(s.substring(0, i) + "9" + s.substring(i + 1, s.length));
}
