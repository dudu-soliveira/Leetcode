// https://leetcode.com/problems/find-the-peaks/

// @leet start
function findPeaks(mountain: number[]): number[] {
  let peaks: number[] = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    const curr = mountain[i];
    if (curr > mountain[i - 1] && curr > mountain[i + 1]) peaks.push(i);
  }

  return peaks;
}
// @leet end

