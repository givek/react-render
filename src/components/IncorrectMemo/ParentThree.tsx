import React from "react";
import MemoizedChildThree from "./ChildThree";
import MemoizedChildFour from "./ChildFour";

function ParentThree() {
  const [count, setCount] = React.useState(0);

  const [pet, setPet] = React.useState("cat");

  console.log("ParentThree Render");

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
      {/* <MemoizedChildThree name={pet}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
      <MemoizedChildFour name={pet} />
    </div>
  );
}

export default ParentThree;
