/* 주차요금계산 */

let fees = [1, 461, 1, 10];
let records = ["00:00 1234 IN"];

function solution(fees, records) {
  let cars = [];
  const step_1 = records.map((r) => {
    const time = r.split(" ")[0];
    const num = r.split(" ")[1];
    const state = r.split(" ")[2];
    cars.push(num);
    if (state === "IN") {
      return { carNum: num, in: time };
    }
    if (state === "OUT") {
      return { carNum: num, out: time };
    }
  });
  cars = [...new Set(cars)].sort((a, b) => {
    return Number(a) - Number(b);
  });
  console.log(cars);

  let log = [];
  step_1.forEach((obj) => {
    if (obj.in) {
      if (obj.in !== "23:59") {
        log.push(obj);
      }
    }
  });
  let pay = [];
  step_1.forEach((obj) => {
    if (obj.out) {
      const found = log.find((e) => e.carNum === obj.carNum);
      pay.push({ carNum: obj.carNum, in: found.in, out: obj.out });
      const foundIndex = log.findIndex((e) => e.carNum === obj.carNum);
      log.splice(foundIndex, 1);
    }
  });
  pay.push(...log);
  const pay2 = pay.map((obj) => {
    if (!obj.hasOwnProperty("out")) {
      return { ...obj, out: "23:59" };
    }
    {
      return obj;
    }
  });
  const pay3 = pay2.map((obj) => {
    return {
      carNum: obj.carNum,
      time: convertTime(obj.out) - convertTime(obj.in),
    };
  });
  let costLog = {};
  pay3.forEach((obj) => {
    costLog[obj.carNum] = costLog[obj.carNum] + obj.time || obj.time;
  });
  const sorted = Object.keys(costLog).sort(function (a, b) {
    return Number(a) - Number(b);
  });
  const ans = sorted.map((n) => {
    return calculCost(costLog[n], fees);
  });
  return ans;
}

function convertTime(hour) {
  let timeParts = hour.split(":");
  return Number(timeParts[0]) * 60 + Number(timeParts[1]);
}
function calculCost(min, fees) {
  let cost =
    min - fees[0] <= 0
      ? fees[1]
      : Math.ceil((min - fees[0]) / fees[2]) * fees[3] + fees[1];
  return cost;
}

solution(fees, records);
