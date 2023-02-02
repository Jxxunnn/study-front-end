/* 프로그래머스 2단계 기능개발 */

function solution(progresses, speeds) {
  const queue = [...progresses];
  const answer = [];
  let count = 0;
  for (let i = 0; i < 100; i++) {
    count = 0;
    queue.forEach((_, idx) => (queue[idx] += speeds[idx]));
    while (queue[0] >= 100) {
      queue.shift();
      speeds.shift();
      count++;
    }
    if (count !== 0) {
      answer.push(count);
    }
  }
  return answer;
}
