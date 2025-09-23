// https://leetcode.com/problems/count-elements-with-maximum-frequency/

// @leet start
function maxFrequencyElements(nums: number[]): number {
  let maxCount = 0;
  let maxValues: number[] = [];
  let countMap: Map<number, number> = new Map();

  for (const num of nums) {
    const count = (countMap.get(num) ?? 0) + 1;
    countMap.set(num, count);

    if (count === maxCount) maxValues.push(num);
    else if (count > maxCount) {
      maxCount = count;
      maxValues = [num];
    }
  }

  return maxCount * maxValues.length;
}
// @leet end
