// https://leetcode.com/problems/buddy-strings/

// @leet start
function buddyStrings(s: string, goal: string): boolean {
  let n = s.length;
  if (n !== goal.length) return false;

  let sLetter: string, goalLetter: string;
  let letterMap = new Map<string, boolean>();
  let hasDuplicate = false;
  let count = 0;

  for (let i = 0; i < n; i++) {
    const sCurr = s[i];
    const goalCurr = goal[i];

    if (!letterMap.has(sCurr) && !hasDuplicate) letterMap.set(sCurr, true);
    else hasDuplicate = true;

    if (sCurr === goalCurr) continue;

    if (count === 0) {
      sLetter = sCurr;
      goalLetter = goalCurr;
      count++;
      continue;
    }

    if (sCurr !== goalLetter! || goalCurr !== sLetter! || count > 2)
      return false;
    count++;
  }

  return count === 2 || (count === 0 && hasDuplicate);
}
// @leet end

