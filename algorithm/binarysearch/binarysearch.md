# 이분탐색

```js
const binarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = parseInt((start + end) / 2);

    if (target === arr[mid]) {
      return mid;
    } else {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
};
```
