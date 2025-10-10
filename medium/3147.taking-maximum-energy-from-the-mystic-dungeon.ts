// https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/

// @leet start
function maximumEnergy(energy: number[], k: number): number {
  const n = energy.length;

  for (let i = n - 1; i >= n - k; i--) {
    let curr = energy[i];
    let j = k;

    while (i - j >= 0) {
      energy[i - j] += curr;
      curr = energy[i - j];
      j += k;
    }
  }

  let max = -Infinity;

  for (const num of energy) if (num > max) max = num;

  return max;
}
// @leet end

