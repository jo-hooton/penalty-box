import React from "react";
import "./App.css";
import SkaterTimerContainer from "./components/SkaterTimerContainer";

function App() {
  return (
    <>
      <header>Penalty Box Manager</header>
      <div className="main-content">
        <SkaterTimerContainer />
      </div>
    </>
  );
}

export default App;
