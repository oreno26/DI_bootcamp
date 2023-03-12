import React from "react";
import { connect } from "react-redux";
import { changePropTwo } from "../Redux/actions";
import ChangeByClick from "./ChangeByClick";

const Child = (props) => {
  return (
    <>
      <h1>Child</h1>
      <input type="text" onChange={props.change} />
      <ol>
        <li>{props.prop_one} props sent from parent</li>
        <li>{props.b} -props from reducer</li>
        <li>{props.c} -MY TEST from reducer</li>
      </ol>
      <ChangeByClick />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    b: state.property_one,
    c: state.prop_two,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePropB: (e) => dispatch(changePropTwo(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Child);
