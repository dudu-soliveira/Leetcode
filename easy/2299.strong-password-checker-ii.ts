// https://leetcode.com/problems/strong-password-checker-ii/

// @leet start
let map = { a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1, i: 1, j: 1, k: 1, l: 1, m: 1, n: 1, o: 1, p: 1, q: 1, r: 1, s: 1, t: 1, u: 1, v: 1, w: 1, x: 1, y: 1, z: 1, A: 2, B: 2, C: 2, D: 2, E: 2, F: 2, G: 2, H: 2, I: 2, J: 2, K: 2, L: 2, M: 2, N: 2, O: 2, P: 2, Q: 2, R: 2, S: 2, T: 2, U: 2, V: 2, W: 2, X: 2, Y: 2, Z: 2, "0": 4, "1": 4, "2": 4, "3": 4, "4": 4, "5": 4, "6": 4, "7": 4, "8": 4, "9": 4, "!": 8, "@": 8, "#": 8, $: 8, "%": 8, "^": 8, "&": 8, "*": 8, "(": 8, ")": 8, "-": 8, "+": 8, };

function strongPasswordCheckerII(password: string): boolean {
  const n = password.length;
  if (n < 8) return false;

  let mask = 0;

  for (let i = 0; i < n; i++) {
    if (password[i] === password[i - 1]) return false;
    mask |= map[password[i]] ?? 0;
  }

  return mask === 15;
}
// @leet end

