# 우선순위 큐

- 우선순위 큐는 우선순위가 가장 높은 데이터를 가장 먼저 삭제하는 자료구조이다.
- 우선순위 큐는 데이터를 우선순위에 따라 처리하고 싶을 때 사용한다.
- ex) 물건 데이터를 자료구조에 넣었다가 가치가 좋은 물건부터 꺼내서 확인해야 하는 경우.

1. 단순히 리스트를 이용하여 구현 `삽입 시간 O(1) 삭제 시간 O(N)`
2. 힙(heap)을 이용하여 구현 `삽입 시간 O(logN) 삭제 시작 O(logN)`

단순히 N개의 데이터를 힙에 넣었다가 모두 꺼내는 작업은 정렬과 동일하다. (힙 정렬)

- 이 경우 시간 복잡도는 O(NlogN) 이다.

# 힙의 특징

- 힙은 완전 이진 트리 자료구조의 일종이다.
- 힙에서는 항상 **_루트 노드(root node)를 제거_**한다.
- **_최소 힙(min heap)_**
  - 루트 노드가 가장 작은 값을 가진다.
  - 따라서 값이 작은 데이터가 우선적으로 제거된다.
- **_최대 힙(max heap)_**

  - 루트 노드가 가장 큰 값을 가진다.
  - 따라서 값이 큰 데이터가 우선적으로 제거된다.

  ## 완전 이진 트리

  - **_완전 이진 트리_**란 루트(root)노드부터 시작하여 왼쪽 자식 노드, 오른쪽 자식 노드 순서대로 데이터가 차례대로 삽입되는 트리(tree)를 의미한다.

  ## 최소 힙 구성 함수: Min-Heapify()

  - (상향식) 부모 노드로 거슬러 올라가며, 부모보다 자신의 값이 더 작은 경우에 위치를 교체한다.
  -

  ## 힙에 새로운 원소가 삽입될 때

  - 새로운 원소가 삽입되었을 때 O(logN)의 시간 복잡도로 힙 성질을 유지하도록 할 수 있다.

  ## 힙에서 원소가 제거될 때

  - 원소가 제거되었을 때 O(logN)의 시간 복잡도로 힙 성질을 유지하도록 할 수 있다.
  - 이후에 루트 노드에서부터 하향식으로 (더 작은 자식 노드로) Heapify()를 진행한다.
