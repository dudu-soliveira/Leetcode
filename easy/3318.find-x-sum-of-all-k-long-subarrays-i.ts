// https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/

// @leet start
function findXSum(nums: number[], k: number, x: number): number[] {
  const n = nums.length;
  let countMap = new Map<number, number>();
  let answer: number[] = Array(n - k + 1).fill(0);
  let unique: number[] = [];

  const sort = (a: number, b: number): number =>
    countMap.get(b)! - countMap.get(a)! || b - a;

  for (let i = 0; i < k; i++) {
    if (!countMap.has(nums[i])) unique.push(nums[i]);
    countMap.set(nums[i], (countMap.get(nums[i]) ?? 0) + 1);
  }

  unique.sort(sort);

  for (let i = 0; i < x && i < unique.length; i++) {
    answer[0] += unique[i] * countMap.get(unique[i])!;
  }

  for (let i = k; i < n; i++) {
    let prevIdx = i - k;
    let curr = nums[i];
    let prev = nums[prevIdx];

    if (prev === curr) {
      answer[prevIdx + 1] = answer[prevIdx];
      continue;
    }

    let prevCount = countMap.get(prev)! - 1;
    let currCount = (countMap.get(curr) ?? 0) + 1;

    countMap.set(prev, prevCount);
    countMap.set(curr, currCount);

    if (currCount === 1) unique.push(curr);

    unique.sort(sort);
    if (prevCount === 0) unique.pop();

    for (let j = 0; j < x && j < unique.length; j++) {
      answer[prevIdx + 1] += unique[j] * countMap.get(unique[j])!;
    }
  }

  return answer;
}
// @leet end

