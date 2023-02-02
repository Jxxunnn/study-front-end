/* 프로그래머스 2단계 올바른 괄호 */

function solution(s) {
  const stack = [];
  if (s.length % 2 !== 0) return false;
  for (const char of s) {
    if (stack.length && stack[stack.length - 1] === "(" && char === ")") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0 ? true : false;
}
