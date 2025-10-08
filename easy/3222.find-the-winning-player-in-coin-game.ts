// https://leetcode.com/problems/find-the-winning-player-in-coin-game/

// @leet start
function winningPlayer(x: number, y: number): string {
  return Math.min(x, Math.floor(y / 4)) % 2 ? "Alice" : "Bob";
}
// @leet end

