import React from "react";
import { CounterContext } from "./ContextParent";

function ChildC() {
  const count = React.useContext(CounterContext);

  console.log("ChildC Render");

  return (
    <>
      <div>ChildC {count}</div>
    </>
  );
}

function ChildB() {
  console.log("ChildB Render");

  return (
    <>
      <div>ChildB</div>
      <ChildC />
    </>
  );
}

function ChildA() {
  console.log("ChildA Render");

  return (
    <>
      <div>ChildA</div>
      <ChildB />
    </>
  );
}

export default ChildA;
