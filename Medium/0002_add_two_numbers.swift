// https://leetcode.com/problems/add-two-numbers/

// Definition for singly-linked list.
public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() {
        self.val = 0
        self.next = nil
    }
    public init(_ val: Int) {
        self.val = val
        self.next = nil
    }
    public init(_ val: Int, _ next: ListNode?) {
        self.val = val
        self.next = next
    }
}

// class Solution {
//     func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
//         let crtSum = (l1?.val ?? 0) + (l2?.val ?? 0)
//         var excedent = crtSum / 10
//         let result = ListNode(crtSum % 10)
//         var node1 = l1?.next
//         var node2 = l2?.next
//         var lastNode = result
//
//         while node1 != nil || node2 != nil || excedent != 0 {
//             let crtSum = (node1?.val ?? 0) + (node2?.val ?? 0) + excedent
//             excedent = crtSum / 10
//
//             node1 = node1?.next
//             node2 = node2?.next
//
//             let newNode = ListNode(crtSum % 10)
//             lastNode.next = newNode
//             lastNode = newNode
//         }
//
//         return result
//     }
// }

class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        let nxtSum = (l1?.val ?? 0) + (l2?.val ?? 0)
        var excedent = nxtSum / 10
        l1?.val = nxtSum % 10
        var node1 = l1
        var node2 = l2

        while node1?.next != nil || node2?.next != nil || excedent != 0 {
            node1?.next = node1?.next ?? ListNode()
            node1 = node1?.next
            node2 = node2?.next

            let nxtSum = (node1?.val ?? 0) + (node2?.val ?? 0) + excedent
            excedent = nxtSum / 10

            node1?.val = (nxtSum % 10)
        }

        return l1
    }
}
