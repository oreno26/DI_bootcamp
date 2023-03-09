import logo from "./logo.svg";
import "./App.css";
import BuggyCounter from "./Component/BuggyCounter";
import ErrorBoundary from "./Component/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
     
        <BuggyCounter />
     
    </div>
  );
}

export default App;
