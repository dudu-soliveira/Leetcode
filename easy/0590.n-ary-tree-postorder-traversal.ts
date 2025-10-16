// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

import { Stack } from "@datastructures-js/stack";

class _Node {
  val: number;
  children: _Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

// @leet start
function postorder(root: _Node | null): number[] {
  let ans: number[] = [];
  if (root === null) return ans;

  let todoStack = new Stack<_Node>();
  let doneStack = new Stack<_Node>();

  todoStack.push(root);

  while (!todoStack.isEmpty()) {
    const node = todoStack.pop()!;
    doneStack.push(node);

    for (const child of node.children) {
      todoStack.push(child);
    }
  }

  while (!doneStack.isEmpty()) ans.push(doneStack.pop()!.val);

  return ans;
}
// @leet end
