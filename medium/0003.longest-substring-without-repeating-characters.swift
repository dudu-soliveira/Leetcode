// https://leetcode.com/problems/longest-substring-without-repeating-characters/

class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var start = 0
        var biggest = 0
        var table: [Character: Int] = [:]
        var i = 0

        for c in s {
            let prevIdx = table[c] ?? -1

            if prevIdx != -1 && prevIdx >= start {
                start = prevIdx + 1
            }

            table[c] = i

            let windowSize = i - start + 1
            if windowSize > biggest { biggest = windowSize }

            i += 1
        }

        return biggest
    }
}
