// https://leetcode.com/problems/print-words-vertically/

// @leet start
function printVertically(s: string): string[] {
  let words = s.split(" ");
  let n = words.length;
  let m = 0;

  for (const word of words) if (word.length > m) m = word.length;

  let wordMatrix = Array.from(Array(m), (): string[] => Array(n).fill(" "));

  for (let j = 0; j < n; j++) {
    const word = words[j];
    for (let i = 0; i < word.length; i++) {
      wordMatrix[i][j] = word[i];
    }
  }

  return wordMatrix.flatMap((value) => value.join("").trimEnd());
}
// @leet end

