import React from "react";

function ParentOne(props: { children: React.ReactNode }) {
  const [count, setCount] = React.useState(0);

  console.log("ParentOne Render");

  // A component can change its state but not props.

  // As the ChildOne component is passed as props (children) it will not re-render on state change in this component.
  // Here, props.children is reference to the ChildOne component.

  // But if a state change occurs in the component where ChildOne is created and passed as props,
  // then ChildOne component will also have to re-render.

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      {props.children}
    </div>
  );
}

export default ParentOne;
