// https://leetcode.com/problems/previous-permutation-with-one-swap/

// @leet start
function prevPermOpt1(arr: number[]): number[] {
  const n = arr.length;
  let curr: number = -1;

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      curr = i;
      break;
    }
  }

  if (curr === -1) return arr;

  for (let i = n - 1; i > curr; i--) {
    const num = arr[i];
    if (num < arr[curr]) {
      while (i - 1 > curr && arr[i - 1] === num) i--;
      arr[i] = arr[curr];
      arr[curr] = num;
      break;
    }
  }

  return arr;
}
// @leet end

