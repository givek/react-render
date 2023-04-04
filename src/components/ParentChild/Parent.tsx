import React from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = React.useState(0);

  console.log("Parent Render");

  // How parent component effects the child component render ?

  // 1. New state if different from the old state.
  //    -> If the parent component re-renders the child component will also re-render.

  // 2. New state is the same as old state.
  //
  //    a. Right after initial render.
  //      -> As the parenet component does not re-render, the child also does not re-render.
  //
  //    b. After re-render's.
  //      -> Only the parent component will re-render one more time, the child component will not re-render again.

  // In this case as the contents of the child component never change, it goes through the render phase, but not through the commit phase.
  // As the diff produced for child component is the same.

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setCount(0)}>Count 0</button>
      <button onClick={() => setCount(5)}>Count 5</button>
      <Child />
    </div>
  );
}

export default Parent;
