import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
//lets me connect to the provider
import { addition, reduce, reset } from "./Redux/action";

function App (props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.title}</h1>
        <button onClick={props.reset}>{props.start}</button>
        <button onClick={props.addOne}>+</button>
        <p>{props.num}</p>
        <button onClick={props.redOne}>-</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => { // im creating my props, lets make all the Wrods be PROPS
  return {
    num: state.counter,
    title: state.title,
    start: state.startBtn
  };
};




const mapDispatchToProps = (dispatch) => {
  return{
    addOne: () => dispatch(addition()),
    redOne: () => dispatch(reduce()),
    reset: () => dispatch(reset())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
