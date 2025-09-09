// https://leetcode.com/problems/palindrome-number/

class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        if x < 0 { return false }
        var reversed = 0
        var num = x

        while num != 0 {
            reversed = (reversed * 10) + (num % 10)
            num /= 10
        }

        return reversed == x
    }
}
