import React from "react";

function ChildThree(props: { name: string; children: React.ReactNode }) {
  console.log("ChildThree Render");

  // React.memo does a shallow comparison, no deep comparison.

  // When we pass simple string as children, then React.memo will work with children.

  // But, if we pass some element or component, props.children will be a reference to an array.
  // Each render will receive a new array, the contents of the array may be same but the reference will be different.

  // This problem can be solved with the help of useMemo hook.

  return (
    <div>
      ChildThree Component {props.name} {props.children}
    </div>
  );
}

export default React.memo(ChildThree);
