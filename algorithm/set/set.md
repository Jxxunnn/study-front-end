# Set 자료구조

Set(집합) 자료구조란, 값들의 집합을 이야기한다. 수학 시간에 배웠던 그 집합이라고 보면된다. 집합 자료구조의 가장 큰 특징은 하나의 값은 Set(집합) 안에 오로지 한 개만 존재한다 이다.

즉, 하나의 값들이 한 번만 나오는다는 특징(unique)은 Set의 성질이다. JavaScript 에서는 Set 클래스가 내장되어 있다. 잘 사용하기만 하면 끝.

- |: 합집합 union
- &: 교집합 intersect
- -: 차집합 complement

JavaScript 에서도 위와 같이 고유한 값들의 집합으로 변환시키는 Set클래스가 있다.

```js
const setA = new Set([1, 2, 3, 4, 5, 6, 7, 8]); // array => set 으로 변환 (알아서 중복제거 됨)
const setB = new Set([3, 4, 5, 6, 7]);

const union = new Set([...setA, ...setB]); // set => array spread syntax 사용
const intersection = new Set([...setA].filter((x) => setB.has(x))); // 둘 다 있는 것들을 솎아낸다.
const difference1 = new Set([...setA].filter((x) => !setB.has(x))); // set1 - set2
const difference2 = new Set([...setB].filter((x) => !setA.has(x))); // set2 - set1
const symmetricDifference = new Set([...difference1, ...difference2]); // union - intersection

const isSuperSet = function (superset, subset) {
  // check if left set(superset) is a superset of right set(subset)
  for (let element of subset) if (!superset.has(element)) false; // 한 번이라도 superset으로 들어온 집합이 subset으로 들어온 집합의 값을 가지고 있지 않다면 => false
  return true;
};
```
