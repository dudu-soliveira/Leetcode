// https://leetcode.com/problems/find-the-minimum-amount-of-time-to-brew-potions/

// @leet start
function minTime(skill: number[], mana: number[]): number {
  const n = skill.length;
  const m = mana.length;
  let f = [skill[0] * mana[0]];

  for (let j = 1; j < n; j++) {
    f[j] = f[j - 1] + skill[j] * mana[0];
  }

  for (let i = 1; i < m; i++) {
    let x = mana[i];
    let now = f[0];

    for (let j = 1; j < n; j++) {
      now = Math.max(now + skill[j - 1] * x, f[j]);
    }
    f[n - 1] = now + skill[n - 1] * x;

    for (let j = n - 2; j >= 0; j--) {
      f[j] = f[j + 1] - skill[j + 1] * x;
    }
  }

  return f[n - 1];
}
// @leet end

