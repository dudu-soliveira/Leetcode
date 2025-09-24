// https://leetcode.com/problems/maximum-repeating-substring/

// @leet start
function maxRepeating(sequence: string, word: string): number {
  if (!sequence.includes(word)) return 0;

  let k = 1;
  while (sequence.includes(word.repeat(k + 1))) k++;

  return k;
}
// @leet end
