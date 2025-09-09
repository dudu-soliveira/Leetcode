// https://leetcode.com/problems/longest-palindromic-substring/

class Solution {
        func longestPalindrome(_ s: String) -> String {
        if s.count == 0 {
            return ""
        }

        var startCandidates: [Character: Bool] = [:]
        var candidatesIdxs: [Character: [String.Index]] = [:]
        var biggest: String = String(s[s.startIndex])

        for i in s.indices {
            let c = s[i]

            if candidatesIdxs[c] == nil {
                candidatesIdxs[c] = [i]
            } else {
                candidatesIdxs[c]?.append(i)
                startCandidates[c] = startCandidates[c] ?? true
            }
        }

        for (c, _) in startCandidates {
            let size = candidatesIdxs[c]?.count ?? 0
            let idxList = candidatesIdxs[c] ?? []

            for i in 0..<(size - 1) {
                for j in ((i + 1)..<size).reversed() {
                    var leftIdx = idxList[i]
                    var rightIdx = idxList[j]
                    let substr: String = String(s[leftIdx...rightIdx])

                    if substr.count <= biggest.count {
                        break
                    }

                    while leftIdx <= rightIdx {
                        if s[leftIdx] == s[rightIdx] {
                            leftIdx = s.index(leftIdx, offsetBy: 1)
                            rightIdx = s.index(rightIdx, offsetBy: -1)
                            continue
                        }
                        break
                    }

                    if leftIdx > rightIdx {
                        biggest = substr
                        break
                    }
                }
            }
        }

        return biggest
    }
}
