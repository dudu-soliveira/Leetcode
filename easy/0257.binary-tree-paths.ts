// https://leetcode.com/problems/binary-tree-paths/

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
function dfs(node: TreeNode, paths: string[], parent: string): void {
  const curr = `${parent}->${node.val}`;

  if (node.left === null && node.right === null) paths.push(curr);
  if (node.left !== null) dfs(node.left, paths, curr);
  if (node.right !== null) dfs(node.right, paths, curr);
}

function binaryTreePaths(root: TreeNode | null): string[] {
  let paths: string[] = [];
  let curr = `${root!.val}`;

  if (root!.left === null && root!.right === null) return [curr];
  if (root!.left !== null) dfs(root!.left, paths, curr);
  if (root!.right !== null) dfs(root!.right, paths, curr);

  return paths;
}
// @leet end

