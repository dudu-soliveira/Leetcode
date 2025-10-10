// https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/

// @leet start
function minMaxDifference(num: number): number {
  const s = String(num);
  let maxDigit = "";

  for (const c of s) {
    if (c === "9") continue;
    maxDigit = c;
    break;
  }

  return (
    Number(maxDigit !== "" ? s.replaceAll(maxDigit, "9") : s) -
    Number(s.replaceAll(s[0], "0"))
  );
}
// @leet end

