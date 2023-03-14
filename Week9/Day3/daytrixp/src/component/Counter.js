import { connect } from "react-redux";
import { addition, reduce } from "../redux/actions";




function Counter(props) {
  const addOdd = () => {
    props.counter % 2 !== 0 ? props.addOne() : console.log();
  };
  const delayAdd = () => {
    setTimeout(props.addOne, 2000);
  };
  return (
    <>
      <button onClick={props.addOne}>+</button>
      <button onClick={props.redOne}>-</button>
      <h3>Counter: {props.counter}</h3>
      <button onClick={addOdd}>Add if odd</button>
      <button onClick={delayAdd}>Delay Add</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => dispatch(addition()),
    redOne: () => dispatch(reduce()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
