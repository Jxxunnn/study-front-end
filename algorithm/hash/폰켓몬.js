/* 프로그래머스 1단계 폰켓몬 */

function solution(nums) {
  const maxTypeN = [...new Set(nums)].length;
  return nums.length / 2 < maxTypeN ? nums.length / 2 : maxTypeN;
}
