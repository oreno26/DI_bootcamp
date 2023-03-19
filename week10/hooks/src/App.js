import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, createContext, useContext } from "react";
//useSelector useDispatch from react-redux
//useParams useNavigate from react-router-dom
//createContext useContext  from react

import ChangeName from "./components/ChangeName";
import MathCalc from "./components/MathCalc";
export const AppContext = createContext(null);

function App() {
  const [name, setName] = useState("Oren");

  return (
    <AppContext.Provider value={{ setName, name }}>
      <div className="App">
        <header className="App-header">
          <div>
          {name}
          <ChangeName />
          </div>
          <div>
            <MathCalc />
          </div>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
