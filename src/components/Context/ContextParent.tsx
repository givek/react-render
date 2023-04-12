import React from "react";
import MemoizedChildA from "./ContextChildren";

export const CounterContext = React.createContext(0);

function ContextParent() {
  const [count, setCount] = React.useState(0);

  console.log("ContextParent Render");

  // If the context provider receives a new value, all the components consuming the context value will also re-render.

  // Also, the children components of all the re-rendered components will re-render.

  // Now, as the child component is wraped with React.memo, it will not re-render if the props don't change.
  // But, the ChildC component still re-renders as it is consuming the context value.

  return (
    <>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <CounterContext.Provider value={count}>
        <MemoizedChildA />
      </CounterContext.Provider>
    </>
  );
}

export default ContextParent;
