import React from "react";

const initialState = { count: 0 };

function reducer(
  state: typeof initialState,
  action: string
): typeof initialState {
  switch (action) {
    case "increment": // same reference
      state.count += 1;
      return state;

    case "decrement": // new reference
      return { count: state.count - 1 };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function ObjectUseReducer() {
  const [count, dispatch] = React.useReducer(reducer, initialState);

  // In case of useReducer, it will re-render even if the reference is same.

  console.log("UseReducer Render");

  return (
    <div>
      <div> Count - {count.count}</div>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default ObjectUseReducer;
