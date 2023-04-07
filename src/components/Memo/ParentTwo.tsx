import React from "react";
import ChildTwo from "./ChildTwo";

function ParentTwo() {
  const [count, setCount] = React.useState(0);

  const [pet, setPet] = React.useState("cat");

  console.log("ParentTwo Render");

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button
        onClick={() => {
          setPet("Dog");
        }}
      >
        Change Pet
      </button>
      <ChildTwo name={pet} />
    </div>
  );
}

export default ParentTwo;
