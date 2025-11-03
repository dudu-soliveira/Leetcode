// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @leet start
function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  let removeMap = new Set(nums);
  let curr = head!;

  while (curr.next !== null) {
    if (removeMap.has(curr.next.val)) curr.next = curr.next.next;
    else curr = curr.next;
  }

  return removeMap.has(head!.val) ? head!.next : head;
}
// @leet end
