import React from "react";
import "./App.css";
import Characters from "./components/Characters";
// import ToolTip from "./components/ToolTip";
// import Beta from "./components/Beta";

function App() {
  return (
    <div className="App">
      {/* <Beta>
        <img
          className="img-sun"
          src="https://www.agweek.com/sites/default/files/styles/full_1000/public/field/image/sunshine-background-1473838693kSs_15.jpg?itok=KgPOehm3"
          alt="sun"
        />
      </Beta>
      <ToolTip /> */}
      <Characters />
    </div>
  );
}

export default App;
