// https://leetcode.com/problems/fraction-to-recurring-decimal/

// @leet start
function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator === 0) return "0";

  let negative = false;
  if (numerator < 0) {
    negative = !negative;
    numerator *= -1;
  }
  if (denominator < 0) {
    negative = !negative;
    denominator *= -1;
  }

  const int = negative
    ? `-${Math.floor(numerator / denominator)}`
    : String(Math.floor(numerator / denominator));
  numerator %= denominator;

  if (numerator === 0) return String(int);

  let results: number[] = [];
  let operationMap: Map<string, number> = new Map();

  for (let i = 0; i < 10000; i++) {
    numerator *= 10;
    const div = Math.floor(numerator / denominator);
    numerator %= denominator;

    const key = `${div}-${numerator}`;
    const repeatStart = operationMap.get(key);

    if (repeatStart !== undefined)
      return `${int}.${results.slice(0, repeatStart).join("")}(${results.slice(repeatStart).join("")})`;

    results.push(div);
    operationMap.set(key, i);

    if (numerator === 0) break;
  }

  return `${int}.${results.join("")}`;
}
// @leet end
