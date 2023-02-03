/* 프로그래머스 2단계 다리를 지나는 트럭 */

function solution(bridge_length, weight, truck_weights) {
  const trucks = truck_weights.map((it) => [it, 0]);
  const inBridge = [];
  let currentWeight = 0;
  let left = truck_weights.length;
  let timer = 0;
  while (left) {
    while (
      inBridge.length < bridge_length &&
      trucks.length &&
      currentWeight + trucks[0][0] <= weight
    ) {
      currentWeight += trucks[0][0];
      inBridge.push(trucks.shift());
      inBridge.forEach((_, i) => inBridge[i][1]++);
      timer++;
      //console.log("새로운 트럭이 들어왔습니다.", timer)
    }
    while (inBridge[0][1] < bridge_length) {
      inBridge.forEach((_, i) => inBridge[i][1]++);
      timer++;
      //console.log("다리를 건넙니다 영차.", timer)
    }
    currentWeight -= inBridge[0][0];
    inBridge.shift();
    //console.log("트럭 한 대가 다리를 빠져나갔습니다.")
    left--;
  }
  return timer + 1;
}
