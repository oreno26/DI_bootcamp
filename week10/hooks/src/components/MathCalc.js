import { useReducer } from "react";

const initialState = {
  calc: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addition":
      return { ...state, calc: state.calc + action.payload };
    case "reduction":
      return { ...state, calc: state.calc - 1 };
    case "devide":
      return { ...state, calc: state.calc / 2 };
    case "multiply":
      return { ...state, calc: state.calc * 2 };
    default:
      return { ...state };
  }
};

const MathCalc = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <>
      <h2>Simple Calculator</h2>
      <p>Result: {state.calc} </p>
      <br />
      <button onClick={()=>dispatch({type:`addition`,payload:10})}>Add 1</button>
      <button onClick={()=>dispatch({type:`reduction`})}>Minus 1</button>
      <button onClick={()=>dispatch({type:`devide`})}>Devide by 2</button>
      <button onClick={()=>dispatch({type:`multiply`})}>Multiply by 2</button>
    </>
  );
};

export default MathCalc;
