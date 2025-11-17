// https://leetcode.com/problems/build-an-array-with-stack-operations/

// @leet start
function buildArray(target: number[], n: number): string[] {
  let ans: string[] = [];
  let prev = 0;

  for (let i = 0; i < target.length; i++) {
    while (++prev !== target[i]) ans.push("Push", "Pop");
    ans.push("Push");
  }

  return ans;
}
// @leet end

