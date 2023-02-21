# 환경설정

- npm init

- npm install typescript

- npm install react react-dom

- npm istall webpack webpack-cli -D

리액트에서는 바벨로 최신 문법과 JSX를 옛날 문법으로 바꾸어줬는데,
타입스크립트는 자체적으로 바벨처럼 최신 문법을 낮춰준다.
그래서 왠만하면 바벨이 따로 필요 없다.

리액트에서는 webpack에 babel-loader를 붙여 웹팩과 바벨을 이어줬는데,
이번에는 webpack과 typescript-loader로 웹팩과 타스를 붙여주겠다.

ts-loader, awesome-typescript-loader 두 개가 유명하다. ts-loader 쓰겠음.

- $ npm i ts-loader @types/webpack ts-node -D

남이 만든 패키지들 npm에서 다운받을 떄 유형 5가지.

- 리덕스는 ts로 만들어져서 알아서 지원해줌.
- axios는 d.ts 파일을 제공해서 따로 타입지정 안해줘도 됨.
- react나 react-dom은 js로 만들어졌고 타이핑을 제공하지 않지만 커뮤니티가 타입들을 만들어놨음. `definitelyTyped` 레포. 이 사람들이 만든 타입을 설치하면 된다. `$ npm i @types/react @types/react-dom`

---

# 기본 타입스크립트 세팅하기
