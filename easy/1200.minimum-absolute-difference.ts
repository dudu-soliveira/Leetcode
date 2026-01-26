// https://leetcode.com/problems/minimum-absolute-difference/

// @leet start
function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  let res = [[arr[0], arr[1]]];
  let min = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];

    if (diff < min) {
      res = [[arr[i - 1], arr[i]]];
      min = diff;
    } else if (diff === min) {
      res.push([arr[i - 1], arr[i]]);
    }
  }

  return res;
}
// @leet end

