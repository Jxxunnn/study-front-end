/* 프로그래머스 2단계 게임 맵 최단거리 */
/* bfs 풀이 */

function solution(maps) {
  const [N, M] = [maps.length, maps[0].length];
  const [y1, x1] = [0, 0];
  const [dy, dx] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
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
      if (maps[ny][nx] == 0 || visited[ny][nx]) continue;
      visited[ny][nx] = visited[y][x] + 1;
      q.push([ny, nx]);
    }
  }
  return visited[N - 1][M - 1] ? visited[N - 1][M - 1] : -1;
}
