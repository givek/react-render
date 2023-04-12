import React from "react";
import ChildA from "./ContextChildren";

export const CounterContext = React.createContext(0);

function ContextParent() {
  const [count, setCount] = React.useState(0);

  console.log("ContextParent Render");

  // If the context provider receives a new value, all the components consuming the context value will also re-render.

  // Also, the children components of all the re-rendered components will re-render.

  return (
    <>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <CounterContext.Provider value={count}>
        <ChildA />
      </CounterContext.Provider>
    </>
  );
}

export default ContextParent;
