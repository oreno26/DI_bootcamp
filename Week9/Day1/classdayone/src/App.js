import React from "react";
import Child from "./Component/Child";
import { changePropOne } from "./Redux/actions";

import { connect } from "react-redux";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      property_one: "text one",
    };
  }
  handleChange = (e) => {
    const newText = e.target.value;
    this.setState({ property_one: newText });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>simple rexux Example </h1>
          <input type="text" onChange={this.handleChange} />
          <div> props a-{this.props.a}</div>
          <p>props b-{this.props.b}</p>
          <input
            type="text"
            onChange={this.props.changePropA}
            placeholder="change STORE prop A"
          />
          <Child prop_one={this.state.property_one} />
          <p>{this.state.property_one} state</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.property_one,
    b: state.prop_two
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePropA: (e) => dispatch(changePropOne(e.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
