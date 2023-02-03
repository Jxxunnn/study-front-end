/* 프로그래머스 2단계 프린터터 */

function solution(priorities, location) {
  const waitingList = priorities.map((it, i) => [it, i]);
  let count = 0;
  while (true) {
    const first = waitingList.shift();
    if (waitingList.some((it) => it[0] > first[0])) {
      waitingList.push(first);
    } else {
      count++;
      if (first[1] === location) {
        return count;
      }
    }
  }
  return count;
}
