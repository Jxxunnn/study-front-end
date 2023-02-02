/* 프로그래머스 2단계 피로도 */

function solution(k, dungeons) {
  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

      const permutations = getPermutations(rest, selectNumber - 1);

      const attached = permutations.map((el) => [fixed, ...el]);

      results.push(...attached);
    });

    return results;
  };
  const cases = getPermutations(dungeons, dungeons.length);
  let max = 0;
  for (const case1 of cases) {
    let explored = 0;
    explored = 0;
    let gauge = k;
    for (const dungeon of case1) {
      const [need, consume] = dungeon;
      if (gauge < need) continue;
      gauge -= consume;
      explored++;
    }
    max = Math.max(max, explored);
  }
  return max;
}
