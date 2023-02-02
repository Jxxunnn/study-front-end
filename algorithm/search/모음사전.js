/* 프로그래머스 2단계 모음사전 */

function solution(word) {
  function permutation(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr;
      const permutationArr = permutation(restArr, selectNum - 1);
      const combineFix = permutationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
  }
  const cases = [];
  for (let i = 0; i < 5; i++) {
    cases.push(...permutation("AEIOU".split(""), i + 1));
  }
  const refined = cases.map((it) => it.join(""));
  const noOverlap = [...new Set(refined)].sort();
  const result = noOverlap.indexOf(word) + 1;

  return result;
}
