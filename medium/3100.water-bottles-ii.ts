// https://leetcode.com/problems/water-bottles-ii/

// @leet start
function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  const b = 2 * numExchange - 3;
  return (
    Math.ceil((-b + Math.sqrt(b * b - 4 * (numBottles * -2))) / 2) +
    numBottles -
    1
  );
}
// @leet end

