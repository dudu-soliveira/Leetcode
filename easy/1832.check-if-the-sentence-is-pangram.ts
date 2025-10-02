// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

// @leet start
function checkIfPangram(sentence: string): boolean {
  let count = 0;
  let presentLetters: Map<string, boolean> = new Map();

  for (const c of sentence) {
    if (presentLetters.has(c)) continue;
    count++;
    if (count === 26) return true;
    presentLetters.set(c, true);
  }

  return false;
}
// @leet end

