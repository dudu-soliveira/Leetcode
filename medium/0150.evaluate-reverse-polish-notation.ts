// https://leetcode.com/problems/evaluate-reverse-polish-notation/

// @leet start
function evalRPN(tokens: string[]): number {
  let stack: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case "+":
        stack.push(stack.pop()! + stack.pop()!);
        break;
      case "-":
        stack.push(-stack.pop()! + stack.pop()!);
        break;
      case "*":
        stack.push(stack.pop()! * stack.pop()!);
        break;
      case "/":
        const x = stack.pop()!;
        const y = stack.pop()!;
        stack.push(Math.trunc(y / x));
        break;
      default:
        stack.push(Number.parseInt(tokens[i]));
        break;
    }
  }

  return stack.pop()!;
}
// @leet end

