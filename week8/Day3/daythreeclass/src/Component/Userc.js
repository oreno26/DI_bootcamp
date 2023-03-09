import React from "react";

class Userc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "inline-block",
          borderRadius: "25px",
          padding: "10px",
          margin: "20px",
          border: "1rem double red",
        }}
      >
        <h4>{this.props.name}</h4>
        <p>{this.props.email}</p>
        <h5>{this.props.username}</h5>
      </div>
    );
  }
}

export default Userc;
