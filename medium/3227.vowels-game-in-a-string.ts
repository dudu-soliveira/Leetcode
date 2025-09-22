// https://leetcode.com/problems/vowels-game-in-a-string/

function doesAliceWin(s: string): boolean {
  return s.match(/[aeiou]/) != null;
}

console.log(doesAliceWin("bbcd"));
