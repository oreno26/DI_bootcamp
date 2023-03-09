import React from "react";

class Errorboundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error=>", error);
    console.log("errorInfo=>", errorInfo);
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          Something went wrong, our team of trained elves are working on a fix
        </div>
      );
    }
    return this.props.children;
  }
}

export default Errorboundary;
