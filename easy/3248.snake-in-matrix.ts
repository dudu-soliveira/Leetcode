// https://leetcode.com/problems/snake-in-matrix/

// @leet start
function finalPositionOfSnake(n: number, commands: string[]): number {
  let ans = 0;

  for (let i = 0; i < commands.length; i++) {
    switch (commands[i][0]) {
      case "U":
        ans -= n;
        break;
      case "R":
        ans++;
        break;
      case "D":
        ans += n;
        break;
      case "L":
        ans--;
        break;
    }
  }

  return ans;
}
// @leet end

