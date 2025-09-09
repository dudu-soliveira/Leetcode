// https://leetcode.com/problems/zigzag-conversion/

class Solution {
    func convert(_ s: String, _ numRows: Int) -> String {
        if numRows == 1 { return s }

        var result: [String] = []
        var row = 0
        var direction = -1

        for _ in 0..<numRows {
            result.append("")
        }

        for c in s {
            result[row] += String(c)

            if (row == numRows - 1) || (row == 0) {
                direction *= -1
            }
            row += (1 * direction)
        }

        return result.joined()
    }
}
