import ObjectUseReducer from "./components/ImmutableState/ObjectUseReducer";
import ObjectUseState from "./components/ImmutableState/ObjectUseState";
import ParentThree from "./components/IncorrectMemo/ParentThree";
import ParentTwo from "./components/Memo/ParentTwo";
import ChildOne from "./components/Optimization/ChildOne";
import ParentOne from "./components/Optimization/ParentOne";
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
      {/* <Parent /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <ParentTwo /> */}
      <ParentThree />
    </div>
  );
}

export default App;
