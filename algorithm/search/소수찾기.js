/* 프로그래머스 2단계 소수 찾기 */
function solution(numbers) {
  function isPrimeNumber(n) {
    if (n == 1) return;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return;
    }
    primes.push(n);
  }
  const nums = numbers.split("").map((it) => +it);
  const primes = [];
  for (let i = 0; i < nums.length; i++) {
    const permus = getPermutations(nums, i + 1);
    for (let j = 0; j < permus.length; j++) {
      const ddd = +permus[j].join("");
      if (ddd === 0 || ddd === 1) continue;
      isPrimeNumber(+permus[j].join(""));
    }
  }
  return new Set([...primes]).size;
}

function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}
