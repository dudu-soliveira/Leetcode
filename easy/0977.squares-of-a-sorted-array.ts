// https://leetcode.com/problems/squares-of-a-sorted-array/

// @leet start
function sortedSquares(nums: number[]): number[] {
  const size = nums.length;
  let posIdx = 0;
  let sorted: number[] = [];

  while (posIdx < size && nums[posIdx] < 0) posIdx++;

  let negIdx = posIdx - 1;

  while (negIdx >= 0 || posIdx < size) {
    if (
      negIdx >= 0 &&
      (posIdx >= size || Math.abs(nums[negIdx]) <= nums[posIdx])
    ) {
      sorted.push(Math.pow(nums[negIdx], 2));
      negIdx--;
    } else {
      sorted.push(Math.pow(nums[posIdx], 2));
      posIdx++;
    }
  }

  return sorted;
}
// @leet end

