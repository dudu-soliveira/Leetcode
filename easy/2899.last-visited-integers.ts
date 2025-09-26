// https://leetcode.com/problems/last-visited-integers/

// @leet start
function lastVisitedIntegers(nums: number[]): number[] {
  let ans: number[] = [];
  let seen: number[] = [];
  let k = 0;

  for (let num of nums) {
    if (num === -1) {
      const i = seen.length - 1 - k;
      if (i >= 0) ans.push(seen[i]);
      else ans.push(-1);
      k++;
    } else {
      seen.push(num);
      k = 0;
    }
  }

  return ans;
}
// @leet end

