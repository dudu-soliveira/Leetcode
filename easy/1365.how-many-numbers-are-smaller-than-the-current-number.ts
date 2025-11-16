// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// @leet start
function smallerNumbersThanCurrent(nums: number[]): number[] {
  const n = nums.length;
  let ordered = Array.from(Array(n), (_, i) => i).sort(
    (a, b) => nums[a] - nums[b],
  );

  let prev = -1;

  for (let i = 0; i < n; i++)
    if (nums[ordered[i]] === prev) nums[ordered[i]] = nums[ordered[i - 1]];
    else {
      prev = nums[ordered[i]];
      nums[ordered[i]] = i;
    }

  return nums;
}
// @leet end

