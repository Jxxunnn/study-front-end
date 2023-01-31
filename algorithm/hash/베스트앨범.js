/* 프로그래머스 3단계 베스트앨범 */
function solution(genres, plays) {
  const map = {};
  //step1 - hash
  genres.forEach((genre, i) => {
    if (genre in map) {
      map[genre].push([plays[i], i]);
    } else {
      map[genre] = [[plays[i], i]];
    }
  });
  //step2 - sort key
  const sorted = Object.entries(map);
  sorted.sort((a, b) => {
    const A = a[1].reduce((total, v) => total + v[0], 0);
    const B = b[1].reduce((total, v) => total + v[0], 0);
    if (A < B) return 1;
    else if (A > B) return -1;
  });
  //step3 - sort values
  for (let i = 0; i < sorted.length; i++) {
    const [_, list] = sorted[i];
    list.sort((a, b) => {
      if (a[0] < b[0]) return 1;
      else if (a[0] > b[0]) return -1;
      else {
        return a[1] < b[1] ? -1 : 1;
      }
    });
  }
  //step4 - combine
  const albumList = sorted
    .map((list) => {
      return (flat = list[1].slice(0, 2).map((it) => {
        return it[1];
      }));
    })
    .flat();
  //done
  return albumList;
}
