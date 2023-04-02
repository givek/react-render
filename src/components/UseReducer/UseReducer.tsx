import React from "react";

const initialState = 0;

function reducer(state: number, action: string): number {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function UseReducer() {
  const [count, dispatch] = React.useReducer(reducer, initialState);

  // From React 18 onwards, useState and useReducer handle re-renders differently.

  // In case of useReducer, it will re-render everytime, irrespective to the value to prev and curr state.

  console.log("UseReducer Render");

  return (
    <div>
      <div> Count - {count}</div>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default UseReducer;
