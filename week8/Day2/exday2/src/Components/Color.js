import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "still red" });
    }, 5000);
  }

  componentDidUpdate() {
    console.log("six");
    const elem = document.getElementById('target')
    elem.innerHTML= `my fav color is ${this.state.color}`

    return (<div>RED is my Fave</div>)
  }

  changeColorToRed = () => {
    this.setState({ color: "RED DAMN IT STOP ASKING ALSO @BUDBUD_THE_PRINCE" });
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.changeColorToRed}>
          CHANGE
        </button>
        <p>my favourite color {this.state.color} </p>
        <div id="target"></div>
      </>
    );
  }
}

export default Color;
