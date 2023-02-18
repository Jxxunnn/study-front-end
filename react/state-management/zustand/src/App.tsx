import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useBearStore from "./store";

function App() {
  const bears = useBearStore((state) => state.bears);

  return (
    <div className="App">
      <h1>{bears} around here...</h1>
      <Controls />
    </div>
  );
}

function Controls() {
  const { increasePopulation, removeAllBears } = useBearStore();
  console.log(increasePopulation);

  return (
    <>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>remove</button>
    </>
  );
}

export default App;
