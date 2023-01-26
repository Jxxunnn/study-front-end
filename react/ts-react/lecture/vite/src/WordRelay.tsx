import React, {
  useState,
  useRef,
  FormEvent,
  useCallback,
  ChangeEvent,
} from "react";

const WordRelay = () => {
  const [word, setWord] = useState("기러기");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: FormEvent<HTMLFormElement>) => void>(
    (e) => {
      e.preventDefault();
      console.log(value);
      if (value.length > 1 && value[0] === word[word.length - 1]) {
        setResult("정답!");
        setWord(value);
        setValue("");
        inputRef.current?.focus();
      } else {
        setResult("꽝!");
        setValue("");
        inputRef.current?.focus();
      }
    },
    [value, word]
    //쓰이는 state 모두 적어줘야 한다.
    //같으면 캐싱해둔 거 그대로 쓰고 아니면 따라서 바뀌고
  );
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );
  return (
    <>
      <h1>끝말잇기</h1>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
