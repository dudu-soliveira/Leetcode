// https://leetcode.com/problems/sort-vowels-in-a-string/

// // Original solution
// function sortVowels(s: string): string {
//   let indexes: number[] = [];
//   let vowels: string[] = [];
//   let resultArray: string[] = [];
//
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     switch (c) {
//       case "A":
//       case "E":
//       case "I":
//       case "O":
//       case "U":
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         vowels.push(c);
//         indexes.push(i);
//         resultArray.push("");
//         break;
//       default:
//         resultArray.push(c);
//         break;
//     }
//   }
//
//   vowels.sort();
//
//   for (let i = 0; i < indexes.length; i++) {
//     resultArray[indexes[i]] = vowels[i];
//   }
//
//   return resultArray.join("");
// }

// Solution using counting sort
function sortVowels(s: string): string {
  let indexes: number[] = [];
  let resultArray: string[] = [];

  let vowelCount = {
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0,
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (vowelCount[c] != undefined) {
      vowelCount[c]++;
      indexes.push(i);
    }
    resultArray.push(c);
  }

  let i = 0;

  for (let c of vowels) {
    while (vowelCount[c] > 0) {
      vowelCount[c]--;
      resultArray[indexes[i]] = c;
      i++;
    }
  }

  return resultArray.join("");
}
