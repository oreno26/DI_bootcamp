import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [sum, setSum] = useState(0);
  const [opertator, setOperator] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

const reset = () =>{
  setNumA("")
  setNumB("")
  setSum(0)
  setIsClicked(false)
  setOperator(0)
}
   
  const sumUp = () => {
    if (opertator == "+") {
      setSum(+numA + +numB);
    } else if (opertator == "-") {
      setSum(+numA - +numB);
    }else if (opertator == "/") {
      setSum(+numA / +numB);
    }else if (opertator == "*") {
      setSum(+numA * +numB);
    }
  };
  const oper = (e) => {
    isClicked == false ? setIsClicked(true) : setIsClicked(false);
    setOperator(e.target.innerText);
  };
  const check = (e) => {
    if (isClicked == false) {
      setNumA(numA + e.target.innerText);
    } else {
      setNumB(numB + e.target.innerText); 
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="calc">
          <div className="gridelem screen">
            <span>{isClicked ? numB : numA}</span>
            <h4>{sum}</h4>
          </div>
          <div onClick={reset} className="gridelem AC">
            AC
          </div>
          <div onClick={oper} className="gridelem act">
            /
          </div>
          <div onClick={oper} className="gridelem act">
            *
          </div>
          <div onClick={check} className="gridelem num">
            7
          </div>
          <div onClick={check} className="gridelem num">
            8
          </div>
          <div onClick={check} className="gridelem num">
            9
          </div>
          <div onClick={oper} className="gridelem act">
            -
          </div>
          <div onClick={check} className="gridelem num">
            4
          </div>
          <div onClick={check} className="gridelem num">
            5
          </div>
          <div onClick={check} className="gridelem num">
            6
          </div>
          <div onClick={oper} className="gridelem act">
            +
          </div>
          <div onClick={check} className="gridelem num">
            1
          </div>
          <div onClick={check} className="gridelem num">
            2
          </div>
          <div onClick={check} className="gridelem num">
            3
          </div>
          <div onClick={sumUp} className="gridelem EQ act">
            =
          </div>
          <div onClick={check} className="gridelem num zero">
            0
          </div>
          <div onClick={check} className="gridelem num">
            .
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

//7*4 grid
