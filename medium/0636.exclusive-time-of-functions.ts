// https://leetcode.com/problems/exclusive-time-of-functions/

// @leet start
function exclusiveTime(n: number, logs: string[]): number[] {
  let times: number[] = Array(n).fill(0);
  let stack: number[] = [];
  let t = 0;

  for (let i = 0; i < logs.length; i++) {
    const curr = logs[i].split(":");
    let time = parseInt(curr[2]);

    if (curr[1] === "start") {
      if (stack.length) {
        times[stack[stack.length - 1]] += time - t;
      }
      stack.push(parseInt(curr[0]));
    } else {
      times[stack.pop()!] += time - t + 1;
      time++;
    }

    t = time;
  }

  return times;
}
// @leet end

