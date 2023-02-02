LIFO, FIFO, push & pop! 스택과 큐를 이용해서 문제 풀기.

`짝짓기, 테트리스, 교차하지 않는 등등 stack을 떠올리게 만드는 키워드`

# stack

```js
let count = 0;
const stack = [];
for (const letter of word) {
  if (stack.length && stack[stack.length - 1] === letter) {
    stack.pop();
  } else {
    stack.push(letter);
  }
  if (stack.length === 0) count++;
}
```

# 정규 표현식과 replace()

```js
let count = 0;

for (let word of arr) {
  if (word.length % 2 === 0) {
    let prevWord = word;
    let isGoodWord = true;
    while (prevWord) {
      const newWord = prevWord.replace(/A{2}|B{2}/g, "");
      if (newWord === prevWord) {
        isGoodWord = false;
        break;
      }
      prevWord = newWord;
    }
    if (isGoodWord) count++;
  }
}
```

# queue

문제
필수 과목이 CBA로 주어지면 필수과목은 C, B, A 과목이며, 이 순서대로 꼭 수업계획을 짜야한다. B과목은 C과목을 이수한 후에 들어야하고, A과목은 C와 B를 이수한 후에 들어야한다는 것이다. 필수과목이 주어졌을 때, 수업계획이 잘된 것이면 YES, 잘못된 것이면 NO를 출력하라.

입력예제 | 필수과목 CBA, 수업계획 CBDAGE

출력예제 | YES

```js
const solution = (list, plan) => {
  let answer = "YES";
  let queue = list.split("");

  for (let x of plan) {
    if (queue.includes(x)) {
      // 이수과목이면
      if (x !== queue.shift()) {
        // 이수과목에 포함되어있지만 순서가 안맞다는 뜻
        return "NO";
      } else {
        // 이수과목에 포함되어있고 순서도 맞으면 큐에서 해당과목 제거
        queue.shift();
      }
    }
  }
  if (queue.length > 0) {
    return "NO";
  }
  return answer;
};

const list = "CBA";
const plan = "CBDAGE";
console.log(solution(list, plan));
```
