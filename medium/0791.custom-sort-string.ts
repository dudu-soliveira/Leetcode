// https://leetcode.com/problems/custom-sort-string/

// @leet start
function customSortString(order: string, s: string): string {
  let orderMap = new Map<string, number>();

  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }

  let orderedList: string[] = [];
  let extraList: string[] = [];

  for (const c of s) {
    if (!orderMap.has(c)) extraList.push(c);
    else orderedList.push(c);
  }

  orderedList.sort(
    (a: string, b: string): number => orderMap.get(a)! - orderMap.get(b)!,
  );

  return orderedList.join("") + extraList.join("");
}
// @leet end
