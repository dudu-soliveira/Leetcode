// https://leetcode.com/problems/range-sum-of-bst/

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
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root === null) return 0;

  let curr = root.val;

  if (curr > high) return rangeSumBST(root.left, low, high);
  if (curr < low) return rangeSumBST(root.right, low, high);

  return (
    curr +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
}
// @leet end

