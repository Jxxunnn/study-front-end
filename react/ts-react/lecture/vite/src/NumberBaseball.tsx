import React, { useState, useRef, useCallback, FormEvent } from "react";
import Try from "./Try";

const NumberBaseball = () => {
  const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidates.splice(
        Math.floor(Math.random() * (9 - i)),
        1
      )[0];
      array.push(chosen);
    }
    return array;
  };
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState([{ try: "" }]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <div>
      <h1>숫자 야구 게임</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          maxLength={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력</button>
      </form>
      <div>시도: {TimeRanges.length}</div>
      <ul>
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} />
        ))}
      </ul>
    </div>
  );
};

export default NumberBaseball;
