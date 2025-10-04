// https://leetcode.com/problems/largest-values-from-labels/

// @leet start
function largestValsFromLabels(
  values: number[],
  labels: number[],
  numWanted: number,
  useLimit: number,
): number {
  let size = values.length;
  let max = 0;
  let labelMap: Map<number, number> = new Map();
  let sorted: number[] = [];

  for (let i = 0; i < size; i++) {
    sorted.push(i);
    if (!labelMap.has(i)) labelMap.set(i, useLimit);
  }

  sorted.sort((a: number, b: number): number => values[b] - values[a]);

  for (let i = 0; i < size; i++) {
    const idx = sorted[i];
    const label = labels[idx];
    const labelLimit = labelMap.get(label)!;

    if (labelLimit === 0) {
      continue;
    }

    labelMap.set(label, labelLimit - 1);

    max += values[idx];
    if (--numWanted === 0) break;
  }

  return max;
}
// @leet end

