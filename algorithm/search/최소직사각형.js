/* 프로그래머스 1단계 최소직사각형형 */

function solution(sizes) {
  sizes.forEach((it) => {
    if (it[0] < it[1]) {
      [it[0], it[1]] = [it[1], it[0]];
    }
  });
  const widths = sizes.map((it) => it[0]);
  const heights = sizes.map((it) => it[1]);
  return Math.max(...widths) * Math.max(...heights);
}

/* 
참조값을 활용하지 않고 swap한다면

const rotated = sizes.map(([w,h]) => w < h? [h,w] : [w,h])
 */
