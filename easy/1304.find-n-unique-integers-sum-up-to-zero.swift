// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

class Solution {
    func sumZero(_ n: Int) -> [Int] {
        if n <= 0 { return [] }
        if n == 1 { return [0] }

        var arr: [Int] = []

        for i in 1...(n / 2) {
            arr.append(i)
            arr.append(-i)
        }

        if n % 2 == 1 {
            arr.append(0)
        }

        return arr
    }
}
