import React from "react";

function ChildFour(props: { name: string }) {
  const date = new Date();

  console.log("ChildFour Render");

  // Components where the JSX can change, even thought the props and state remain the same.

  // We need to be carefull when optimizing such components.

  return (
    <div>
      Hello {props.name}. {date.getHours()}: {date.getMinutes()}:
      {date.getSeconds()}
    </div>
  );
}

export default React.memo(ChildFour);
