// https://leetcode.com/problems/vowel-spellchecker/

function spellchecker(wordlist: string[], queries: string[]): string[] {
  const re = /[aeiou]/g;
  const size = queries.length;
  let wordTable = {};
  let modifiedTable = {};
  let answer = Array(size);

  for (let s of wordlist) {
    wordTable[s] = s;
    const lower = s.toLowerCase();
    const vowel = lower.replaceAll(re, "*");

    if (modifiedTable[lower] === undefined) modifiedTable[lower] = s;
    if (modifiedTable[vowel] === undefined) modifiedTable[vowel] = s;
  }

  for (let i = 0; i < size; i++) {
    const q = queries[i];

    answer[i] =
      wordTable[q] ??
      modifiedTable[q.toLowerCase()] ??
      modifiedTable[q.toLowerCase().replaceAll(re, "*")] ??
      "";
  }

  return answer;
}
