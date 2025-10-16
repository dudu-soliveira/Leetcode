// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @leet start
function sumEvenGrandparent(root: TreeNode | null): number {
  let sum = 0;
  const l = root!.left;
  const r = root!.right;
  const val = root!.val;

  if (l === null && r === null) return 0;

  function dfs(root: TreeNode | null, parent: number, grandEven: boolean) {
    if (root === null) return;

    if (grandEven) sum += root.val;

    const parentEven = parent % 2 === 0;
    const val = root.val;

    dfs(root.left, val, parentEven);
    dfs(root.right, val, parentEven);
  }

  dfs(l, val, false);
  dfs(r, val, false);

  return sum;
}
// @leet end

