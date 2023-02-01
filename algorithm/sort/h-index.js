/* 프로그래머스 2단계 H-Index */

function solution(citations) {
  citations.sort((a, b) => a - b);
  const max = Math.max(...citations);
  let h = 0;
  for (let i = 0; i <= max; i++) {
    //h === i
    const more = citations.filter((it) => it >= i); // h번 이상 인용된 논문
    const less = citations.filter((it) => it < i);

    if (more.length >= i && less.every((it) => it <= i)) {
      h = Math.max(h, i);
    }
  }
  return h;
}
