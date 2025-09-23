// https://leetcode.com/problems/compare-version-numbers/submissions/1780182227/

// @leet start
function compareVersion(version1: string, version2: string): number {
  let idxV1 = 0;
  let idxV2 = 0;

  let numV1 = 0;
  let numV2 = 0;

  while (version1[idxV1] !== undefined || version2[idxV2] !== undefined) {
    const v1 = version1[idxV1] || ".";
    const v2 = version2[idxV2] || ".";

    if (v1 === "." && v2 === ".") {
      if (numV1 === numV2) {
        numV1 = 0;
        numV2 = 0;
        idxV1++;
        idxV2++;
        continue;
      }

      return numV1 < numV2 ? -1 : 1;
    }

    if (v1 !== ".") {
      numV1 = numV1 * 10 + Number(v1);
      idxV1++;
    }

    if (v2 !== ".") {
      numV2 = numV2 * 10 + Number(v2);
      idxV2++;
    }
  }

  return numV1 < numV2 ? -1 : numV1 > numV2 ? 1 : 0;
}

// function compareVersion(version1: string, version2: string): number {
//   const v1 = version1.split(".").map(Number);
//   const v2 = version2.split(".").map(Number);
//
//   for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
//     const num1 = v1[i] || 0;
//     const num2 = v2[i] || 0;
//
//     if (num1 === num2) continue;
//
//     return num1 < num2 ? -1 : 1;
//   }
//
//   return 0;
// }
// @leet end

