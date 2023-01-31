/* 프로그래머스 1단계 완주하지 못한 선수 */

const participant = ["mislav", "stanko", "mislav", "ana"];

const completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
solution(participant, completion);
