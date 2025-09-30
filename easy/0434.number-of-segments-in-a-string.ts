// https://leetcode.com/problems/number-of-segments-in-a-string/

// @leet start
function countSegments(s: string): number {
  const size = s.length;
  let count = 0;
  let i = 0;

  while (i < size && s[i] === " ") i++;

  for (; i < size; i++) {
    if (s[i] === " " && s[i - 1] !== " ") count++;
  }

  if (size > 0 && s[size - 1] !== " ") count++;

  return count;
}
// @leet end

