// https://leetcode.com/problems/destination-city/

// @leet start
function destCity(paths: string[][]): string {
  let cityMap = new Map<string, boolean>();

  for (const [a, b] of paths) {
    cityMap.set(a, false);
    if (cityMap.get(b) === undefined) cityMap.set(b, true);
  }

  for (const [city, isDest] of cityMap.entries()) {
    if (isDest) return city;
  }

  return "";
}
// @leet end

