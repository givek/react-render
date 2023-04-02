import React from "react";

function UseState() {
  const [count, setCount] = React.useState(0);

  // React Strict Mode double invokes the component body, only in dev enviornment.

  // 1. Update to same value as initial render ?
  //    -> The component will not re-render.
  //
  // 2. Update to same value after re-renders ?
  //    -> React will render that specific component one more time and then bails out from any subsequent renders.

  // For comparing prev and curr state, React uses the Object.is() camparison method.

  console.log("render");

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setCount(0)}>Count 0</button>
      <button onClick={() => setCount(5)}>Count 5</button>
    </div>
  );
}

export default UseState;
