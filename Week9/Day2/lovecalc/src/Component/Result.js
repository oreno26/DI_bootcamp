import { connect } from "react-redux";

const Result = (props) => {
  if (!props.percentage) {
    return <h1>results</h1>;
  } else {
    return (
      <>
        <h1>Results:</h1>
        <ol>
          <li>{props.fname}</li>
          <li>{props.sname}</li>
          <li>{props.percentage}</li>
          <li>{props.result}</li>
        </ol>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    fname: state.fname,
    sname: state.sname,
    percentage: state.percentage,
    result: state.result,
  };
};

export default connect(mapStateToProps)(Result);
