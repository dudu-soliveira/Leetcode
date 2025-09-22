// https://leetcode.com/problems/find-closest-person/

function findClosest(x: number, y: number, z: number): number {
  let p1 = Math.max(x - z, z - x);
  let p2 = Math.max(y - z, z - y);
  return p1 == p2 ? 0 : p1 < p2 ? 1 : 2;
}
