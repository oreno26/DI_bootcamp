import { connect } from "react-redux";

function Counter(props) {
  return (
    <>
      <button>+</button>
      <button>-</button>
      <h3>Counter: {props.counter}</h3>
      <button>Add if odd</button>
      <button>Delay Add</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(Counter);
