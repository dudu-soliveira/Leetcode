// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/

// @leet start
function minCost(colors: string, neededTime: number[]): number {
  let ans = 0;
  let max = neededTime[0];
  let sum = neededTime[0];

  for (let i = 1; i < colors.length; i++) {
    if (colors[i] === colors[i - 1]) {
      sum += neededTime[i];
      max = Math.max(max, neededTime[i]);
      continue;
    }

    ans += sum - max;
    sum = max = neededTime[i];
  }

  ans += sum - max;

  return ans;
}
// @leet end
