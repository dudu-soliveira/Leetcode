// https://leetcode.com/problems/water-bottles/

// @leet start
function numWaterBottles(numBottles: number, numExchange: number): number {
  let count = numBottles;
  while (numBottles >= numExchange) {
    const newBottles = Math.floor(numBottles / numExchange);
    numBottles = newBottles + (numBottles % numExchange);
    count += newBottles;
  }
  return count;
}
// @leet end

