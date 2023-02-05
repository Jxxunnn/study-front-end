# 깊이/너비 우선 탐색

## 그래프 탐색 알고리즘

- 그래프: 여러 개체들이 연결되어 있는 자료구조
- 탐색: 특정 개체를 찾기 위한 알고리즘

1. 하나를 몰아본다 dfs
2. 여러 개를 하나씩 본다 bfs

## 대표적 문제 유형

1. 경로탐색 유형 (최단거리, 시간)
2. 네트워크 유형 (연결)
3. 조합 유형(모든 조합 만들고 비교하기)

## dfs

1. 재귀함수가 일반적 구현 방식.

- 재귀릍 타고타서 탈출조건에 도달하고 파라미터를 바꿔가며 모든 경우의 수를 찾아 정답을 찾는 방식.

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const cases = +input[0];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let idx = 0;
for (let i = 0; i < cases; i++) {
  const [M, N, EA] = input
    .slice(1)
    [idx].split(" ")
    .map((v) => Number(v));
  const matrix = Array(N)
    .fill(0)
    .map(() => Array(M).fill(0));
  const visited = Array(N)
    .fill(0)
    .map(() => Array(M).fill(0));
  let count = 0;

  for (let j = idx + 2; j < EA + idx + 2; j++) {
    let [x, y] = input[j].split(" ").map((v) => Number(v));
    matrix[y][x] = 1;
  }

  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (matrix[j][k] && !visited[j][k]) {
        count++;
        dfs(j, k);
      }
    }
  }

  function dfs(y, x) {
    visited[y][x] = 1;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
      if (matrix[ny][nx] == 1 && !visited[ny][nx]) {
        dfs(ny, nx);
      }
    }
  }

  idx += EA + 1;
  console.log(count);
}
```

```js
function solution(n, info) {
  let maxDiff = 0;
  let ryonInfo = Array(11).fill(0);

  const shot = (peachScore, ryonScore, count, idx, board) => {
    if (n < count) return;
    if (idx > 10) {
      let diff = ryonScore - peachScore;
      if (diff > maxDiff) {
        //남은 화살은 모두 0점 과녁에
        board[10] = n - count;
        maxDiff = diff;
        ryonInfo = board;
      }
      return;
    }
    //해당 라운드를 라이언이 가져가는 경우
    if (n > count) {
      let board2 = [...board];
      board2[10 - idx] = info[10 - idx] + 1;
      shot(
        peachScore,
        ryonScore + idx,
        count + info[10 - idx] + 1,
        idx + 1,
        board2
      );
    }

    //해당 라운드를 라이언이 포기하는 경우
    if (info[10 - idx] > 0) {
      shot(peachScore + idx, ryonScore, count, idx + 1, board);
    } else {
      shot(peachScore, ryonScore, count, idx + 1, board);
    }
  };
  //완전탐색 시작
  shot(0, 0, 0, 0, ryonInfo);

  if (maxDiff <= 0) return [-1];
  else return ryonInfo;
}
```

## bfs

1. 큐 / 링크드리스트

- 턴을 돌면서 가장 먼저 넣었던 것을 꺼내서 연결된 점을 큐에 넣고 큐가 빌 때까지 반복. 순서가 보장되어야 하기 때문에 큐나 링크드리스트를 사용하는 것이 보편적

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((v) => Number(v));
const [y1, x1] = [0, 0];
const [dy, dx] = [
  [-1, 0, 1, 0],
  [0, 1, 0, -1],
];
const matrix = input.slice(1).map((v) => v.split("").map((v) => Number(v)));
const visited = Array(N)
  .fill(0)
  .map(() => Array(M).fill(0));

let q = [];
q.push([y1, x1]);
visited[y1][x1] = 1;
while (q.length) {
  let [y, x] = q.shift();
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
    if (matrix[ny][nx] == 0 || visited[ny][nx]) continue;
    visited[ny][nx] = visited[y][x] + 1;
    q.push([ny, nx]);
  }
}
console.log(visited[N - 1][M - 1]);
```

## bfs와 dfs중 무엇을 쓸까.

- 자신 있고 손에 익은 알고리즘. dfs가 동작 검증하기 훨씬 쉬움.

- dfs는 수행시간 관점에서 복불복일 수 있기 때문에 시간 초과되는 문제에서는 bfs가 유리함. 시간 복잡도가 낮음.

- 문제 순서와 난이도를 고려해서 앞쪽 쉬운 문제로 나왔다면 빠르게 dfs로, 뒤쪽 난이도 있는 문제나 dfs로 풀기에는 시간이 오래 걸리는 문제라면 bfs로.
