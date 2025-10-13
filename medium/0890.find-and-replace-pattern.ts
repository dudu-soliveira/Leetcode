// https://leetcode.com/problems/find-and-replace-pattern/

// @leet start
function findAndReplacePattern(words: string[], pattern: string): string[] {
  let n = pattern.length;
  let idxMap = new Map<string, number>();
  let ptrIdxs: number[] = Array(n);
  let ans: string[] = [];

  for (let i = 0; i < n; i++) {
    const c = pattern[i];
    if (!idxMap.has(c)) idxMap.set(c, i);
    ptrIdxs[i] = idxMap.get(c)!;
  }

  for (const word of words) {
    idxMap.clear();
    let match = true;
    for (let i = 0; i < n; i++) {
      const c = word[i];
      if (!idxMap.has(c)) idxMap.set(c, i);
      if (ptrIdxs[i] !== idxMap.get(c)) {
        match = false;
        break;
      }
    }
    if (match) ans.push(word);
  }

  return ans;
}
// @leet end

