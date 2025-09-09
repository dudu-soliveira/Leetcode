// https://leetcode.com/problems/median-of-two-sorted-arrays/

// NOT O( log(n+m) )
class Solution {
    func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {
        let nums = (nums1 + nums2).sorted()
        let size = nums.count

        if size % 2 == 1 {
            return Double(nums[size / 2])
        }

        return Double(nums[(size / 2) - 1] + nums[size / 2]) / 2.0
    }
}
