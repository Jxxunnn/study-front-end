# React Router

## tutorial

### 라우터 추가

가장 먼저 해야 할 일은 브라우저 라우터 를 생성 하고 첫 번째 경로를 구성하는 것입니다. 이렇게 하면 웹 앱에 대한 클라이언트 측 라우팅이 활성화됩니다.

파일 이 main.jsx진입점입니다. 그것을 열면 페이지에 React Router를 놓을 것입니다.

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

이 첫 번째 경로는 나머지 경로가 내부에서 렌더링되기 때문에 종종 "루트 경로"라고 합니다. 이것은 UI의 루트 레이아웃 역할을 할 것이며, 앞으로 나아가면서 중첩된 레이아웃을 갖게 될 것입니다.

### 루트 경로

이 앱의 전역 레이아웃을 추가해 보겠습니다.

👉 만들고 \_src/routessrc/routes/root.jsx
👉 루트 레이아웃 구성 요소 만들기

```js
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
```

👉 루트 경로로 설정<Root>element

```js
/* existing imports */
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### 찾을 수 없음 오류 처리

새 앱을 빌드할 때 기능보다 훨씬 더 많은 버그를 작성하기 때문에 프로젝트 초기에 앱이 오류에 어떻게 대응하는지 아는 것이 항상 좋은 생각입니다! 이런 일이 발생하면 사용자가 좋은 경험을 얻을 뿐만 아니라 개발 중에도 도움이 됩니다.

이 앱에 몇 가지 링크를 추가했습니다. 링크를 클릭하면 어떻게 되는지 볼까요?

👉 사이드바 이름 중 하나를 클릭하십시오.

역겨운! 이것은 React Router의 기본 오류 화면으로, 이 앱의 루트 요소에 있는 플렉스 박스 스타일로 인해 악화되었습니다 😂.

렌더링, 데이터 로드 또는 데이터 변이를 수행하는 동안 앱에서 오류가 발생할 때마다 React Router는 오류를 포착하고 오류 화면을 렌더링합니다. 나만의 오류 페이지를 만들어 봅시다.

👉 오류 페이지 구성 요소 만들기

```js
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
```

👉 루트 경로에서 를 로 설정<ErrorPage>errorElement

```js
/* previous imports */
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

오류 페이지는 이제 다음과 같아야 합니다.

(글쎄요, 별로 좋지 않습니다. 누군가가 디자이너에게 오류 페이지를 만들어달라고 요청하는 것을 잊었을 수도 있습니다. 아마도 모두가 디자이너에게 오류 페이지를 만들어달라고 요청하는 것을 잊고 디자이너가 그것을 생각하지 않았다고 비난할 것입니다 😆)

useRouteError발생한 오류를 제공하는 참고 사항입니다 . 사용자가 존재하지 않는 경로로 이동하면 "찾을 수 없음" 오류 응답statusText 을 받게 됩니다. 튜토리얼의 뒷부분에서 다른 오류를 확인하고 더 자세히 논의할 것입니다.

지금은 거의 모든 오류가 무한 스피너, 응답하지 않는 페이지 또는 빈 화면 대신 이 페이지에서 처리된다는 사실을 아는 것으로 충분합니다. 🙌

### 연락처 경로 UI

404 "찾을 수 없음" 페이지 대신 링크한 URL에서 실제로 무언가를 렌더링하려고 합니다. 그러기 위해서는 새로운 루트를 만들어야 합니다.

👉 연락 경로 모듈 만들기

touch src/routes/contact.jsx

👉 연락처 구성 요소 UI 추가

그것은 단지 많은 요소일 뿐이므로 자유롭게 복사/붙여넣기를 하십시오.

```js
import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
```

이제 구성 요소가 있으므로 새 경로에 연결해 보겠습니다.

👉 연락처 구성 요소 가져오기 및 새 경로 만들기

```js
/* existing imports */
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

/* existing code */
```

이제 링크 중 하나를 클릭하거나 방문 /contacts/1하면 새 구성 요소가 나타납니다!

그러나 루트 레이아웃 안에 있지 않습니다 😠

### 중첩 경로

우리는 연락처 구성 요소가 이와 같이 레이아웃 내부 에 렌더링되기를 원합니다.<Root>

우리는 접촉 경로를 루트 경로의 자식 으로 만들어 이를 수행합니다.

👉 연락처 경로를 루트 경로의 자식으로 이동

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```

이제 루트 레이아웃이 다시 표시되지만 오른쪽에는 빈 페이지가 표시됩니다. 자식 경로를 렌더링할 위치 를 루트 경로에 알려야 합니다 . <Outlet>. \_

를 찾아 <div id="detail">내부에 콘센트를 꽂습니다.

👉 렌더링<Outlet>

```js
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
```

### 클라이언트 측 라우팅

알아채셨을 수도 있고 눈치채지 못했을 수도 있지만 사이드바의 링크를 클릭하면 브라우저가 React Router를 사용하는 대신 다음 URL에 대한 전체 문서 요청을 수행합니다.

클라이언트 측 라우팅을 사용하면 앱이 서버에서 다른 문서를 요청하지 않고도 URL을 업데이트할 수 있습니다. 대신 앱에서 새 UI를 즉시 렌더링할 수 있습니다. <Link>. \_

👉 사이드바를 다음 <a href>으로 변경<Link to>

```js
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </>
  );
}
```

브라우저 devtools에서 네트워크 탭을 열어 더 이상 문서를 요청하지 않는지 확인할 수 있습니다.

### 데이터 로드 중

URL 세그먼트, 레이아웃 및 데이터는 함께 결합(3중?)되지 않는 경우가 더 많습니다. 이미 이 앱에서 볼 수 있습니다.

URL 세그먼트 요소 데이터
/ <Root> 연락처 목록
연락처/:id <Contact> 개별 연락

이 자연스러운 결합으로 인해 React Router는 경로 구성 요소에 데이터를 쉽게 가져올 수 있는 데이터 규칙을 가지고 있습니다.

데이터를 로드하는 데 사용할 두 가지 API loader와 useLoaderData. 먼저 루트 모듈에서 로더 함수를 만들고 내보낸 다음 이를 경로에 연결합니다. 마지막으로 데이터에 액세스하고 렌더링합니다.

👉 로더 내보내기root.jsx

```js
import { Outlet, Link } from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
```

👉 경로에 로더 구성

```js
/* other imports */
import Root, { loader as rootLoader } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```

👉 데이터 액세스 및 렌더링

```js
import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../contacts";

/* other code */

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        {/* other code */}

        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>

        {/* other code */}
      </div>
    </>
  );
}
```

그게 다야! React Router는 이제 해당 데이터를 UI와 자동으로 동기화합니다. 아직 데이터가 없으므로 다음과 같은 빈 목록이 표시될 수 있습니다.

`loader 요약`
Loader
URL, 레이아웃, 데이터는 뗄래야 뗄 수 없는 관계이다. 셋이 거의 같이 다닌다.

이러한 자연스러운 결합때문에, React Router에서는 컴포넌트에 데이터를 전달하는 api를 제공한다.

이 API는 앞서배운 Loader이다.

또한 앞서 Link 컴포넌트를 통해 클라이언트 측으로 요청을 보내는 법을 배웠다.

그럼 서버에서 처리해야 할 작업들은 어디서 해야할 까? 바로 앞서배운 loader, action, fetch 에서 하는것이다!

Loader
loader는 아래 내용만 기억하면 된다

로더의 호출 시점은 컴포넌트가 렌더링되기 전이다
각 route 파일에 loader라는 함수를 만든뒤 이를 export하여 사용하는것이 일반적이다
loader함수가 값을 리턴하면 useLoaderData()로 컴포넌트에서 데이터를 받을 수 있다
GET요청을 하면 Loader가 호출된다

### 데이터 쓰기 + HTML 양식

곧 첫 번째 연락처를 만들겠지만 먼저 HTML에 대해 이야기해 보겠습니다.

React Router는 JavaScript 캄브리아기 폭발 이전의 웹 개발에 따라 HTML 양식 탐색을 데이터 변형 프리미티브로 에뮬레이트합니다. "오래된 학교" 웹 모델의 단순성과 함께 클라이언트 렌더링 앱의 UX 기능을 제공합니다.

일부 웹 개발자에게는 익숙하지 않지만 HTML 양식은 실제로 링크를 클릭하는 것처럼 브라우저에서 탐색을 유발합니다. 유일한 차이점은 요청에 있습니다. 링크는 URL만 변경할 수 있는 반면 양식은 요청 방법(GET 대 POST) 및 요청 본문(POST 양식 데이터)도 변경할 수 있습니다.

클라이언트 쪽 라우팅이 없으면 브라우저는 양식의 데이터를 자동으로 직렬화하여 POST의 경우 요청 본문으로, GET의 경우 URLSearchParams로 서버에 보냅니다. React Router는 서버에 요청을 보내는 대신 클라이언트 측 라우팅을 사용하여 경로로 보냅니다 action.

앱에서 "새로 만들기" 버튼을 클릭하여 이를 테스트할 수 있습니다. Vite 서버가 POST 요청을 처리하도록 구성되지 않았기 때문에 앱이 폭발해야 합니다(아마도 405 🤷여야 하지만 404를 보냅니다).

새 연락처를 만들기 위해 해당 POST를 Vite 서버로 보내는 대신 클라이언트 측 라우팅을 대신 사용하겠습니다.

### 연락처 만들기

action루트 경로 를 내보내고 경로 구성에 연결 <form>하고 React Router로 변경하여 새 연락처를 만듭니다 <Form>.

👉 액션 생성 및 변경<form><Form>

## JSX 경로

마지막 요령으로 많은 사람들이 JSX로 경로를 구성하는 것을 선호합니다. 당신은 그것을 할 수 있습니다 createRoutesFromElements. 경로를 구성할 때 JSX 또는 객체 간에 기능적 차이는 없으며 단순히 스타일 선호도입니다.

```JS
import {
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);
```
