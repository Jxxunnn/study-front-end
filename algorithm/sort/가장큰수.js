/* 프로그래머스 2단계 가장 큰 수 */
function solution(numbers) {
  var answer = numbers
    .map((v) => v + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}
