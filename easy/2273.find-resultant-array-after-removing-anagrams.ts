// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

// @leet start
function removeAnagrams(words: string[]): string[] {
  let ans: string[] = [];
  let curr = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i].split("").sort().join("");

    if (word !== curr) {
      curr = word;
      ans.push(words[i]);
    }
  }

  return ans;
}
// @leet end

