import ObjectUseReducer from "./components/ImmutableState/ObjectUseReducer";
import ObjectUseState from "./components/ImmutableState/ObjectUseState";
import Parent from "./components/ParentChild/Parent";
import UseReducer from "./components/UseReducer/UseReducer";
import UseState from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState />
      <ObjectUseReducer /> */}
      <Parent />
    </div>
  );
}

export default App;
