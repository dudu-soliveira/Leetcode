// https://leetcode.com/problems/two-sum

// class Solution {
//     func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
//         let size = nums.count
//         for i in 0..<size {
//             for j in (i + 1)..<size {
//                 if nums[i] + nums[j] == target {
//                     return [i, j]
//                 }
//             }
//         }
//         return [0, 0]
//     }
// }

class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        let size = nums.count
        var values: [String: Int] = [:]
        for i in 0..<size {
            let crtValue = nums[i]
            let j = values[String(target - crtValue)] ?? -1
            values[String(crtValue)] = i
            if j != -1 && i != j {
                return [i, j]
            }
        }
        return [0, 0]
    }
}
