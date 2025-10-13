// https://leetcode.com/problems/word-search/

// @leet start
function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const k = word.length;

  let startList: number[][] = [];
  let countBoard = new Map<string, number>();
  let countWord = new Map<string, number>();

  const d = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // Return if not all letters of word are in board
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      countBoard.set(board[i][j], (countBoard.get(board[i][j]) ?? 0) + 1);
  for (let i = 0; i < k; i++)
    countWord.set(word[i], (countWord.get(word[i]) ?? 0) + 1);
  for (const [c, countW] of countWord.entries())
    if (countW > (countBoard.get(c) ?? 0)) return false;

  // If the last character of word appears less than the first, reverse word
  if (countBoard.get(word[k - 1])! < countBoard.get(word[0])!)
    word = word.split("").reverse().join("");

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (board[i][j] === word[0]) startList.push([i, j]);

  function isValid(i: number, j: number): boolean {
    return i >= 0 && i < m && j >= 0 && j < n;
  }

  function dfs(i: number, j: number, idx: number): boolean {
    if (idx === k) return true;

    const c = board[i][j];
    board[i][j] = "-1";

    for (const adj of d) {
      const iAdj = i + adj[0];
      const jAdj = j + adj[1];

      if (
        isValid(iAdj, jAdj) &&
        board[iAdj][jAdj] === word[idx] &&
        dfs(iAdj, jAdj, idx + 1)
      )
        return true;
    }

    board[i][j] = c;

    return false;
  }

  for (let i = 0; i < startList.length; i++)
    if (dfs(startList[i][0], startList[i][1], 1)) return true;

  return false;
}
// @leet end
