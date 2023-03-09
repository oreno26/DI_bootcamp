import React from "react";
import "./App.css";
import Counter from "./components/counter";
import Parent from "./Parent";
import Child from "./Child";
import Errorboundary from "./Errorboundary";
import CounterHook from "./components/CounterHook";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Errorboundary>
          <CounterHook />
        </Errorboundary>
      </div>
    </div>
  );
};

export default App;
