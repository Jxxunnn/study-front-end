# 자료구조

- 스택
- 그래프(인접 행렬, 인접 리스트)
- 연결 리스트(ver. 배열)
- 해시 테이블

# 알고리즘

- 순열
- 조합
- 누적 합(prefix sum)
- 정규 표현식
- 투 포인터
- 재귀
- BFS(너비 우선 탐색)
- DFS(깊이 우선 탐색)
- 완전탐색(브루트 포스)

---

# 치트 시트

## 인접 행렬

```js
let max = 5; // 정점의 갯수
let matrix = new Array(max).fill(0).map((row) => new Array(max).fill(0));

/*
matrix는 이렇게 생기게 된다:
[
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0]
]
*/
```

## 인접 리스트

```js
//정점의 갯수
let max = 5;

//인접 리스트를 객체로 만들기 위한 준비!
let adjList = {};

//정점의 갯수만큼 인접리스트에 키-값을 만든다. 값은 빈 배열로 넣는다.
for (let i = 0; i < max; i++) {
  adjLists[i] = [];
}

//정점간 간선 정보에 따라서, loop을 사용해 위에 빈 배열로 만들었던 것에 값을 넣어준다.
//간선 정보에 따라서, 인접 리스트는 아래와 같은 모양을 하고 있을 것이다.

/*
{
  0 : [3, 6],      // 정점 0에서 정점 3과 정점 6으로 향하는 간선이 있다는 뜻
  1 : [0],
  2 : [0, 5],
  3 : [1, 4],
  4 : [1, 2],
  5 : [2, 3, 4]
}
*/
```

## 누적 합

```js
function solution(l, r, arr) {
  let sum = 0;
  const p = [0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    p.push(sum);
  }

  return p[r] - p[l - 1];
}
const arr = [10, 20, 30, 40, 50];
console.log(solution(2, 5, arr));
```

## 투 포인터

```js
function solution(n, arr) {
  let answer = 0;
  let sum = 0;
  let end = 0;

  // 시작점 start를 배열 시작부터 오른쪽으로 한 칸씩 옮김
  for (let start = 0; start < arr.length; start++) {
    // 끝점 end를 가능한 만큼 이동시킴
    while (sum < n && end < arr.length) {
      sum += arr[end];
      // console.log('start: ' + start, 'end: ' + end, 'sum: ' + sum);
      end++;
    }
    if (sum === n) answer++;
    sum -= arr[start];
  }
  return answer;
}

const arr = [1, 2, 3, 2, 5];
console.log(solution(5, arr));
```

---

# 명심보감

1. 숫자가 억단위 넘어가면 BigInt 써주어야 함.
2. 짝짓기, 테트리스, 교차하지 않는 등등은 stack을 떠올리게 만드는 키워드
3. 계산할 필요가 없는 범위는 if문으로 처리하는 습관 들이기. 잘못걸리면 시간초과에 걸릴 수 있음.
4. 불가능한 경우가 있을 때는 불가능한 경우가 무엇인지 먼저 사고하고 테스트케이스 추가하는 습관 들이기. 테스트케이스는 작게작게 생각하기.
5. 시간 관련 문제에서 구간을 구할 때는 `[(a이상), (b미만)]` 이다.
6. 숫자 세기 문제는 Map 혹은 배열. Map 자료구조는 key와 value 형태로 이루어 짐. string을 기반으로 할 때는 Map 자료구조를 우선적으로 고려하기. integer를 기반으로 할 때는 배열을 우선적으로 고려하기.
7. 보통 배열은 1000만 정도의 length를 가지면 공간 할당이 안 됨. interger라도 주어지는 숫자의 양이 1000만 100만 10만 이렇게 띄엄띄엄 들어오는 경우에는 Map으로.
8. 순열은 항상 오름차순으로.
9. 조합에서 9C7 = 9C2
10. connected component 문제는 DFS 선택.
11. 가중치가 같은 최단거리 문제는 BFS 선택. 가중치가 다른 그래프라면 다익스트라나 벨만포트 등 최단거리 알고리즘 사옹해야 함.
12. 일정 자리 수 이상의 숫자는 지수 표기법으로 변환 됨. BigInt 자료형에 숫자를 담으면 출력시 값의 뒤에 n이 붙음. BigInt는 string으로 변환할 때 맨 끝의 n이 떼어짐. join 메서드를 사용하였을 때도 string으로 반환 되기에 정상 출력 가능

---

# 백준 VSC 세팅법

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").split("/n");
```
