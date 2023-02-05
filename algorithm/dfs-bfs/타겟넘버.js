/* 프로그래머스 2단계 타겟 넘버 */

//중복조합으로 해결하려 하였으나 테스트 케이스 1,2에서 콜스택 초과

/* 나의 풀이 - 중복조합 */

function solution(numbers, target) {
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

  let count = 0;
  const signList = permutation([-1, 1], numbers.length);
  signList.forEach((sign) => {
    const sum = sign.reduce((total, s, i) => total + s * numbers[i], 0);
    if (sum === target) count++;
  });
  return count;
}

/* 다른 사람 풀이 - dfs */

function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function dfs(count, sum) {
    if (count === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

  dfs(0, 0);

  return answer;
}

// https://yong-nyong.tistory.com/41
