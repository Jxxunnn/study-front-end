/* 프로그래머스 2단계 위장 */

function solution(clothesList) {
  const map = {};
  for (const clothes of clothesList) {
    const [name, type] = clothes;
    map[type] = (map[type] || 0) + 1;
  }
  const values = Object.values(map);
  const multiply = values.reduce((total, v) => total * (v + 1), 1);

  return multiply - 1;
}
