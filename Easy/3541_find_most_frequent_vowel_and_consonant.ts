// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/

function maxFreqSum(s: string): number {
  let max = [0, 0];
  let letterCount = {};
  for (let c of s) {
    letterCount[c] = letterCount[c] ? letterCount[c] + 1 : 1;
    switch (c) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        if (letterCount[c] > max[0]) max[0] = letterCount[c];
        break;
      default:
        if (letterCount[c] > max[1]) max[1] = letterCount[c];
        break;
    }
  }
  return max[0] + max[1];
}
