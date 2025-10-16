// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

// @leet start
const cols=[
  "A", "B", "C", "D", "E", "F",
  "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X",
  "Y", "Z"
]

function cellsInRange(s: string): string[] {
  let ans:string[] = []

  let i = 0
  while (cols[i]!==s[0])i++

  let j = i
  while(cols[j]!==s[3])j++

  for(;i<=j;i++){
    for (let k=Number(s[1]);k<=Number(s[4]);k++){
      ans.push(cols[i]+String(k))
    }
  }

  return ans
};
// @leet end
