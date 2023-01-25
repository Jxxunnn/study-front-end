function solution(s) {
  const step1 = s.replaceAll("{", "[").replaceAll("}", "]");
  const step2 = JSON.parse(step1);
  step2.sort((a, b) => a.length - b.length);
  const step3 = step2.flat();
  const step4 = [...new Set([...step3])];
  return step4;
}
