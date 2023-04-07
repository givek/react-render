import React from "react";

function ChildTwo(props: { name: string }) {
  console.log("ChildTwo Render");

  return <div>ChildTwo Component {props.name}</div>;
}

// React.memo is a higher-order component that we can use to wrap components if they render the same result given the same props.

// If the component props don't change during re-renders, react will use the previous render.

// React.memo only does a shallow comparions of the prev and curr props.

// When does using React.memo makes sense ?

export default React.memo(ChildTwo);
