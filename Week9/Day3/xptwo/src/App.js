import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { addYear, redYear } from "./redux/action";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AGE: {props.age} </h1>
        <button onClick={props.ageUp}>age up</button>
        <button onClick={props.ageDown}>age down</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch(addYear()),
    ageDown: () => dispatch(redYear()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
