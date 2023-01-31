import { useState } from "react";
import Gugudan from "./Gugudan";
import NumberBaseball from "./NumberBaseball";
import WordRelay from "./WordRelay";
import ResponseTimeCheck from "./ResponseTimeCheck";

function App() {
  return (
    <div className="App">
      <Gugudan />
      <WordRelay />
      <NumberBaseball />
      <ResponseTimeCheck />
    </div>
  );
}

export default App;
