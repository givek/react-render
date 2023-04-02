import React from "react";

const initialState = {
  firstName: "Mr",
  lastName: "Cat",
};

function ObjectUseState() {
  const [cat, setCat] = React.useState(initialState);

  function changeName() {
    // cat.firstName = "Hello";
    // setCat(cat);

    const newCat = { ...cat };
    newCat.firstName = "Hello";
    setCat(newCat);

    // In this case, as we are creating a new object everytime,
    // React will re-render the component even if the actual value is same because the reference is different.
  }

  // Reference of the object must change for React to re-render the component.

  console.log("ObjectUseState Render");

  return (
    <div>
      <button onClick={changeName}>
        {cat.firstName} {cat.lastName}
      </button>
    </div>
  );
}

export default ObjectUseState;
