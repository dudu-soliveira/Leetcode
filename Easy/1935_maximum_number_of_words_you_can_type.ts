// https://leetcode.com/problems/maximum-number-of-words-you-can-type/

function canBeTypedWords(text: string, brokenLetters: string): number {
  let brokenTable = {};
  let words = text.split(" ");
  let count = words.length;

  for (let c of brokenLetters) {
    brokenTable[c] = true;
  }

  for (let word of words) {
    for (let c of word) {
      if (brokenTable[c] === true) {
        count--;
        break;
      }
    }
  }

  return count;
}
